import PropTypes from 'prop-types';
import s from '../Phonebook/Phonebook.module.css';

export default function Filter({ value, onChange }) {
  return (
    <input
      className={s.filter}
      value={value}
      onChange={onChange}
      type="text"
      name="filter"
      placeholder="Search"
    />
  );
}

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
