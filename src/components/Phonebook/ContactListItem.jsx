import PropTypes from 'prop-types';
import s from '../Phonebook/Phonebook.module.css';

const ContactListItem = ({ name, number, onDeleteContact, id }) => {
  return (
    <>
      <li>
        {`${name}: ${number}`}
        <button className={s.btn} onClick={() => onDeleteContact(id)}>
          Delete
        </button>
      </li>
    </>
  );
};

export default ContactListItem;

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func,
  id: PropTypes.string.isRequired,
};
