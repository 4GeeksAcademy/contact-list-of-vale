import React, { useContext, useState } from 'react';
import { Context } from '../store/appContext';

const CreateAContact = () => {
    const { actions } = useContext(Context);
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const newContact = {
            name: fullName,
            email: email,
            phone: phone,
            address: address
        };
        actions.addContact(newContact);

        // limpia las caja de texto 

        setFullName('');
        setEmail('');
        setPhone('');
        setAddress('');
    };

    return (
        <div>
            <div className="container mx-auto py-3 px-3">
                <h1>Create a Contact</h1>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="card p-4">
                    <div className="mb-3">
                        <label htmlFor="fullName" className="form-label">Full Name</label>
                        <input type="text" className="form-control" id="fullName" placeholder="Dory" value={fullName} onChange={(event) => setFullName(event.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" placeholder="nadaremosenelmar@nemo.com" value={email} onChange={(event) => setEmail(event.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="phone" className="form-label">Phone</label>
                        <input type="text" className="form-control" id="phone" placeholder="17052016" value={phone} onChange={(event) => setPhone(event.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="address" className="form-label">Address</label>
                        <input type="text" className="form-control" id="address" placeholder="P. Sherman, calle Wallaby, 42, Sydney" value={address} onChange={(event) => setAddress(event.target.value)} />
                    </div>
                    <button type="submit" className="btn btn-primary">Create Contact</button>
                </div>
            </form>
        </div>
    );
};

export default CreateAContact;
