import ContactForm from './ContactForm/ContactForm';
import ContactsList from './ContactsList/ContactsList';
import Filter from './Filter/Filter';

import { selectError } from 'redux/selector';
import { useSelector } from 'react-redux';
import { Container, Title, TitleContacts } from './App.styled';
import { errorServes } from './ErrorPage/error';


function App() {
  const error = useSelector(selectError);
  return (
    <Container>
      {error && errorServes()}
      <Title>Phonebook</Title>
      <ContactForm />
      <TitleContacts>Contacts</TitleContacts>
      <Filter />
      <ContactsList />
    </Container>
  );
}

export default App;
