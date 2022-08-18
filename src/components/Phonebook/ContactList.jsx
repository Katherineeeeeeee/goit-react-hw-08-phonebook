import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import ConactListItem from './ContactListItem';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <>
      <ul>
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
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func,
};
