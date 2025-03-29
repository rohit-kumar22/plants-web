import { useState, useEffect, useRef } from "react";

const SelectWithSearch = ({
  label,
  options,
  required = false,
  error,
  value,
  placeholder = "Select an option",
  defaultValue = "",
  onChange,
  debounceTime = 300,
  name,
  ...props
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredOptions, setFilteredOptions] = useState(options);
  const [showDropdown, setShowDropdown] = useState(false);
  const inputRef = useRef(null);
  const dropdownRef = useRef(null);

  // Update displayed value when `value` prop changes
  const selectedOption = options.find((opt) => opt.value === value);
  const displayedValue = selectedOption ? selectedOption.label : "";

  // Filter options based on search term
  useEffect(() => {
    const handler = setTimeout(() => {
      setFilteredOptions(
        options.filter((option) =>
          option.label.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }, debounceTime);

    return () => clearTimeout(handler);
  }, [searchTerm, options, debounceTime]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        inputRef.current &&
        !inputRef.current.contains(event.target)
      ) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle option selection
  const handleSelect = (option) => {
    onChange && onChange({ target: { name, value: option.value } });
    setSearchTerm(""); // Reset search field after selection
    setShowDropdown(false);
  };

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <label className="block text-sm pl-1 font-medium text-gray-700">
        {label}
        {required && <span className="text-red-500 pl-1">*</span>}
      </label>

      {/* Dropdown toggle box */}
      <div
        className={`w-full h-[35px] mt-1 px-2 flex items-center justify-between border rounded-lg shadow-sm cursor-pointer ${
          error ? "border-red-500" : "border-gray-300"
        }`}
        onClick={() => setShowDropdown((prev) => !prev)}
      >
        <span className="text-[14px] text-gray-700">
          {displayedValue || placeholder}
        </span>
      </div>

      {showDropdown && (
        <div className="absolute z-10 w-full bg-white border border-gray-300 rounded-md shadow-md max-h-60 overflow-y-auto mt-1">
          {/* Search field inside dropdown (resets after selection) */}
          <input
            ref={inputRef}
            type="text"
            value={searchTerm}
            placeholder="Search..."
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-3 py-2 border-b border-gray-300 focus:outline-none"
          />

          {/* Filtered options */}
          <ul>
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option, index) => (
                <li
                  key={index}
                  className="px-3 py-2 cursor-pointer hover:bg-gray-100"
                  onClick={() => handleSelect(option)}
                >
                  {option.label}
                </li>
              ))
            ) : (
              <li className="px-3 py-2 text-gray-500">No options found</li>
            )}
          </ul>
        </div>
      )}

      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default SelectWithSearch;
