import PropTypes from 'prop-types';
import s from '../Phonebook.module.css';

const ContactListItem = ({ name, number, onDeleteContact, id }) => {
  return (
    <>
      <li className={s.item}>
        {`${name} : ${number}`}
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
  id: PropTypes.string,
};
