import PropTypes from 'prop-types';
import s from '../Phonebook/Phonebook.module.css';

const Filter = ({ value, onChange }) => {
  return (
    <input
      className={s.filter}
      value={value}
      onChange={onChange}
      type="text"
      name="filter"
    />
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
