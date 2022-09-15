import PropTypes from 'prop-types';
import s from '../Phonebook.module.css';

export default function ContactListItem({ name, number, removeContact, id }) {
  return (
    <>
      <li className={s.item}>
        {`${name} : ${number}`}

        <button className={s.btn} onClick={() => removeContact(id)}>
          Delete
        </button>
      </li>
    </>
  );
}

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  removeContact: PropTypes.func,
  id: PropTypes.string,
};
