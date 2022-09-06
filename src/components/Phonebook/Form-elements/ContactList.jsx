import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import s from '../Phonebook.module.css';
import ConactListItem from './ContactListItem';

const ContactList = ({ contacts, removeContact }) => {
  return (
    <>
      <ul className={s.list}>
        {contacts?.map(contact => (
          <ConactListItem
            key={nanoid()}
            id={contact.id}
            name={contact.name}
            number={contact.number}
            removeContact={removeContact}
          />
        ))}
      </ul>
    </>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      removeContact: PropTypes.func,
      id: PropTypes.string,
    })
  ),
  onDeleteContact: PropTypes.func,
};
