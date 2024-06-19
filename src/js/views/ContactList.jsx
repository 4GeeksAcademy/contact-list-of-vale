import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import { Link } from "react-router-dom";

const ContactList = () => {
    const { store, actions } = useContext(Context);

    const handleDeleteContact = async (id) => {
        console.log(id);
        try {
            await actions.deleteContact(id);
            console.log("Contact deleted successfully.");
        } catch (error) {
            console.error("Error deleting contact:", error);
        }
    };

    return (
        <div>
            {store.contactList.length > 0 ?
                <div className="container p-auto">
                    {store.contactList.map(contact => (
                        <div className='card mb-3' key={contact.id}>
                            <div className='card-body row'>
                                <div className='col-md-4'>
                                    <img className="rounded-circle" src={`https://picsum.photos/id/${contact.id}/200/300`} />
                                </div>
                                <div className='col-md-6'>
                                    <h2 className='fw-bold font-monospace mb-4 fs-2'>{contact.name}</h2>
                                    <p className='fs-4'><i className="fas fa-map-marker-alt"></i>  {contact.address}</p>
                                    <p className='fs-4'><i className="fas fa-phone"></i>  {contact.phone}</p>
                                    <p className='fs-4'><i className="fas fa-envelope"></i>  {contact.email}</p>
                                </div>

                                <div className='col-md-2'>
                                    <Link to={"/editContact/" + contact.id} className="btn m-1">
                                        <i className="fas fa-pencil-alt"></i>
                                    </Link>

                                    <button type="button" className="btn" data-bs-toggle="modal" data-bs-target={`#deleteModal${contact.id}`}>
                                        <i className="fas fa-trash-alt"></i>
                                    </button>

                                    <div className="modal fade" id={`deleteModal${contact.id}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div className="modal-dialog">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h1 className="modal-title fs-5" id="exampleModalLabel">Are you sure about this?</h1>
                                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div className="modal-body">
                                                    If you delete this, the world will collapse.
                                                </div>
                                                <div className="modal-footer">
                                                    <button type="button" className="btn btn-dark" data-bs-dismiss="modal">No</button>
                                                    <button type="button" className="btn btn-dark" data-bs-dismiss="modal" onClick={() => handleDeleteContact(contact.id)}>Yes Baby</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                :
                <div className="text-center mt-5">
                    <h3 className='fw-bold'>
                        No contacts.
                    </h3>
                    <p className='text-secondary'>
                        Contacts you've added will appear here.
                    </p>
                </div>
            }
        </div>
    );
};

export default ContactList;

