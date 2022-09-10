import React from 'react';

import './styles.scss';

export default function FormInput({
  type,
  name,
  value,
  handleChange,
  label,
  required,
}) {
  return (
    <div className="group">
      <input
        className="form-input"
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        label={label}
        required={required}
      />

      {label ? (
        <label className={`${value.length ? 'shrink' : ''} form-input-label`}>
          {label}
        </label>
      ) : null}
    </div>
  );
}
