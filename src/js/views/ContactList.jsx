import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import { Link } from "react-router-dom";

const ContactList = () => {
    const { store, actions } = useContext(Context);

    const handleDeleteContact = async (contactId) => {
        try {
            await actions.deleteContact(contactId);
            console.log("Contact deleted successfully.");
        } catch (error) {
            console.error("Error deleting contact:", error);
        }
    };

    return (
        <div className="container mx-auto">
            {store.contactList.map(contact => (
                <div className='card' key={contact.id}>
                    <div className='card-body'>
                        <h2>{contact.name}</h2>
                        <p>{contact.email}</p>
                        <p>{contact.phone}</p>
                        <p>{contact.address}</p>
                    </div>
                    <div className='card-footer'>
                        <Link to="/EditContact" className="btn btn-success">
                            Edit the contact
                        </Link>
                        <button className="btn btn-danger btn-lg" onClick={() => handleDeleteContact(contact.id)}>
                            <i className="fas fa-backspace"></i>
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ContactList;

