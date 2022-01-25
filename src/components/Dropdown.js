import "./Dropdown.css";

import React, { useCallback } from "react";
import { TEXT_DEFAULT_DROPDOWN } from "../utils";

const Dropdown = ({
  label,
  options,
  value,
  name,
  onChange,
  isClearable,
  placeholder,
  disabled,
  ...props
}) => {
  const handleChange = useCallback(
    (e) => {
      onChange(e, e.currentTarget.value);
    },
    [onChange]
  );
  return (
    <div className="Dropdown">
      <label htmlFor={name}>{label}</label>
      <select
        id={name}
        name={name}
        value={value}
        onChange={handleChange}
        disabled={disabled}
        {...props}
      >
        {isClearable && (
          <option value={null}>{placeholder || TEXT_DEFAULT_DROPDOWN}</option>
        )}
        {options.map((option) => (
          <option key={option.value}>{option.label}</option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
