import React from "react";

const RadioButtonGroup = ({
  label,
  name,
  options,
  value,
  onChange,
  required,
  error,
}) => {
  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-gray-700 pl-1">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>

      <div className="flex gap-4 pt-2">
        {options.map((option) => (
          <label key={option.value} className="flex items-center gap-2">
            <input
              type="radio"
              name={name}
              className={`text-sm`}
              value={option.value}
              checked={value === option.value}
              onChange={(e) => onChange(e)}
              required={required}
            />
            {option.label}
          </label>
        ))}
      </div>

      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default RadioButtonGroup;
