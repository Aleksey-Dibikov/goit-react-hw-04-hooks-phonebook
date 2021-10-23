import PropTypes from 'prop-types';
// import React, { Component } from 'react';
import s from './ContactList.module.css';

export function ContactList({ contacts, onDeleteContact }) {
  return (
    <ul className={s.TaskList}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={s.TaskList_item}>
          {name} : {number}
          <button
            className={s.TaskList_button}
            onClick={() => onDeleteContact(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
// class ContactList extends Component {
//   render() {
//     const { contacts, onDeleteContact } = this.props;
//     return (
//       <ul className={s.TaskList}>
//         {contacts.map(contact => (
//           <li key={contact.id} className={s.TaskList_item}>
//             {contact.name} : {contact.number}
//             <button
//               className={s.TaskList_button}
//               onClick={() => onDeleteContact(contact.id)}
//             >
//               Удалить
//             </button>
//           </li>
//         ))}
//       </ul>
//     );
//   }
// }

ContactList.propTypes = {
  onDeleteContact: PropTypes.func,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    }),
  ),
};

// export default ContactList;
