import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import ConactListItem from './ContactListItem';

const ContactList = ({ contacts }) => {
  return (
    <>
      <ul>
        {contacts?.map(contact => (
          <ConactListItem
            key={nanoid()}
            name={contact.name}
            number={contact.number}
          />
        ))}
      </ul>
    </>
  );
};

export default ContactList;

ContactList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
