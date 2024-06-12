import React, { useContext, useState } from 'react';
import { Context } from '../store/appContext';

const CreateAContact = () => {
    const { actions } = useContext(Context);
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newContact = {
            name: fullName,
            email: email,
            phone: phone,
            address: address
        };
        actions.addContact(newContact);
        
        setFullName('');
        setEmail('');
        setPhone('');
        setAddress('');
    };

    return (
        <div>
            <div className="container mx-auto">
                <h1>Create a Contact</h1>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="card">
                    <div className="mb-3">
                        <label htmlFor="fullName" className="form-label">Full Name</label>
                        <input type="text" className="form-control" id="fullName" placeholder="Maria Swat" value={fullName} onChange={(e) => setFullName(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" placeholder="name@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="phone" className="form-label">Phone</label>
                        <input type="text" className="form-control" id="phone" placeholder="567894213" value={phone} onChange={(e) => setPhone(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="address" className="form-label">Address</label>
                        <input type="text" className="form-control" id="address" placeholder="P.hahahah" value={address} onChange={(e) => setAddress(e.target.value)} />
                    </div>
                    <button type="submit" className="btn btn-primary">Create Contact</button>
                </div>
            </form>
        </div>
    );
};

export default CreateAContact;
