import React from "react";
import { SelectProps } from "../../types/select";

const SelectField: React.FC<SelectProps> = ({
  options,
  value,
  label,
  onChange,
}) => {
  return (
    <div className="">
      <label className="block font-medium">{label}</label>
      <select
        className="w-full px-3 py-2 border rounded"
        defaultValue={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectField;
