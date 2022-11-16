import './styles.scss';

export default function Input({
  name,
  type,
  label,
  value,
  required,
  handleChange,
}) {
  return (
    <div className='input'>
      <input
        className='inputFeild'
        onChange={handleChange}
        type={type}
        name={name}
        value={value}
        required={required}
      />

      {label ? (
        <label className={`${value.length ? 'shrink' : ''} label`}>
          {label}
        </label>
      ) : null}
    </div>
  );
}
