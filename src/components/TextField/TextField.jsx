import PropTypes from 'prop-types';
import { useMemo } from 'react';
import { nanoid } from 'nanoid';
import s from './TextField.module.css';

export default function TextField({
  label,
  name,
  value,
  onChange,
  type,
  placeholder,
  required,
}) {
  const id = useMemo(() => nanoid(), []);

  return (
    <div>
      {label && <label htmlFor={id}>{label}</label>}
      <input
        className={s.input}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
}

TextField.defaultProps = {
  type: 'text', //propTypes
  required: false,
};

TextField.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
};
