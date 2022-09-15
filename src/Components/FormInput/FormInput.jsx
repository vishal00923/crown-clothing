import React from 'react';

import './styles.scss';

export default function FormInput({
  handleChange,
  type,
  name,
  value,
  label,
  required,
}) {
  return (
    <div className="group">
      <input
        className="form-input"
        onChange={handleChange}
        type={type}
        name={name}
        value={value}
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
