import PropTypes from 'prop-types';
import s from '../Phonebook/Phonebook.module.css';

const ContactListItem = ({ name, number, onDeleteContact }) => {
  return (
    <>
      <li>
        {`${name}: ${number}`}
        <button className={s.btn} onClick={() => onDeleteContact()}>
          Delete
        </button>
      </li>
    </>
  );
};

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  // onDeleteContact: PropTypes.func.isRequired,
};

export default ContactListItem;
