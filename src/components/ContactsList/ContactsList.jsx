import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { PulseLoader } from "react-spinners";

import { fetchContacts } from "../../redux/operationsApi";
import { selectContacts, selectFilter, selectIsLoading } from "redux/selector"

import { NoContacts } from "./NoContacts";
import { ContactsListItem } from "./ContactsListItem";

import { Container, Info } from "./ContactsList.styled";


const ContactsList = () => {
    const contacts = useSelector(selectContacts);
    const filter = useSelector(selectFilter);
    const IsLoading = useSelector(selectIsLoading);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    const quantityContacts = contacts.length;

    const visibleContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    visibleContacts.sort((a, b) => {
        let nameA = a.name.toLowerCase(),
            nameB = b.name.toLowerCase();
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        return 0;
    });

    return (
        <>
            {!IsLoading && !quantityContacts ? (
                <NoContacts />
            ) : (
                <>
                    <Info>
                        Quantity yours contacts:
                        {IsLoading ? (
                            <span>
                                <PulseLoader color="#3f82b5" size={8} />
                            </span>
                        ) : (
                            quantityContacts
                        )}
                    </Info>
                    <Container>
                        {visibleContacts.map(contact => (
                            <ContactsListItem key={contact.id}{...contact} />
                        ))}
                    </Container>
                </>
            )}
        </>
    );
};

export default ContactsList;