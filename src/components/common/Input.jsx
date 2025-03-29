import React from "react";

const Input = ({
  label,
  icon: Icon,
  placeholder,
  type = "text",
  required = false,
  error,
  width = "50px",
  ...props
}) => {
  return (
    <div className={`w-full`}>
      <label className="block text-sm font-medium text-gray-700 pl-1">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <div className="relative mt-1 min-w-[220px]">
        {Icon && (
          <div className="absolute inset-y-0 left-0 flex items-center pl-3">
            <Icon className="w-4 h-4 text-gray-400" />
          </div>
        )}
        <input
          type={type}
          placeholder={placeholder}
          className={`w-full h-[35px] p-2 border rounded-lg shadow-sm focus:outline-none focus:ring-0.5 focus:ring-green-500 focus:border-green-500 placeholder:text-sm ${
            Icon ? "pl-10" : ""
          } ${error ? "border-red-500" : "border-gray-300"}`}
          {...props}
        />
      </div>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default Input;
