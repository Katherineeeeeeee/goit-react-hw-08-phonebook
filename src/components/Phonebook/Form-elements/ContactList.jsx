import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import s from '../Phonebook.module.css';
import ConactListItem from './ContactListItem';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <>
      <ul className={s.list}>
        {contacts?.map(contact => (
          <ConactListItem
            key={nanoid()}
            id={contact.id}
            name={contact.name}
            number={contact.number}
            onDeleteContact={onDeleteContact}
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
      onDeleteContact: PropTypes.func,
      id: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func,
};
