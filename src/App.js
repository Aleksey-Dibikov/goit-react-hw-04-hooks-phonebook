import { useState, useEffect } from 'react';
import './App.css';
import { v4 as uuidv4 } from 'uuid';
import { ContactList } from './components/ContactList/ContactList';
import { ContactsForm } from './components/ContactsForm/ContactsForm';
import { Filter } from './components/Filter/Filter';

function App() {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');

  const idContact = uuidv4();

  useEffect(() => {
    const parsedContacts = JSON.parse(localStorage.getItem('contacts'));
    if (parsedContacts) {
      setContacts(parsedContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = ({ name, number }) => {
    const searchName = contacts.map(contact => contact.name).includes(name);

    if (searchName) {
      alert(`${name} is already in contacts`);
    } else if (name.length === 0) {
      alert('Fields must be filled!');
    } else {
      const contact = {
        id: idContact,
        name,
        number,
      };
      setContacts([...contacts, contact]);
    }
  };

  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  const changeFilter = event => {
    setFilter(event.target.value);
  };

  const visibleContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase()),
  );
  // class App extends Component {
  //   state = {
  //     contacts: [
  //       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  //     ],
  //     filter: '',
  //   };

  //   componentDidMount() {
  //     const contacts = localStorage.getItem('contacts');
  //     const parsedContacts = JSON.parse(contacts);

  //     if (parsedContacts) {
  //       this.setState({ contacts: parsedContacts });
  //     }
  //   }
  // componentDidUpdate(prevProps, prevState) {
  //   if (this.state.contacts !== prevState.contacts) {
  //     localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  //   }
  // }

  // addContact = event => {
  //   const searchName = this.state.contacts
  //     .map(contact => contact.name)
  //     .includes(event.name);

  //   if (searchName) {
  //     alert(`${event.name} is already in contacts`);
  //   } else if (event.name.length === 0) {
  //     alert('Fields must be filled!');
  //   } else {
  //     const contact = {
  //       ...event,
  //       id: uuidv4(),
  //     };

  //     this.setState(({ contacts }) => ({
  //       contacts: [...contacts, contact],
  //     }));
  //   }
  // };

  // deleteContact = contactId => {
  //   this.setState(prevState => ({
  //     contacts: prevState.contacts.filter(contact => contact.id !== contactId),
  //   }));
  // };

  // changeFilter = filter => {
  //   this.setState({ filter });
  // };

  // getVisibleContacts = () => {
  //   const { contacts, filter } = this.state;

  //   return contacts.filter(contacts =>
  //     contacts.name.toLowerCase().includes(filter.toLowerCase()),
  //   );
  // };
  return (
    <div className="App">
      <h1>Phonebook</h1>
      <ContactsForm onAddContact={addContact} />

      <h2>Contacts</h2>

      {visibleContacts.length >= 1 && (
        <Filter value={filter} onChangeFilter={changeFilter} />
      )}

      <ContactList contacts={visibleContacts} onDeleteContact={deleteContact} />
    </div>
  );
}

export default App;
