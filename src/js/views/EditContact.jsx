import React, { useContext, useState } from 'react';
import { Context } from '../store/appContext';
import { useParams } from 'react-router';

const EditContact = () => {
  const { actions } = useContext(Context);
  const params = useParams () //const {id}= useParams () esto es para usar el id 
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newData = {
      name: fullName,
      email: email,
      phone: phone,
      address: address
    };
    await actions.editContact(params.id, newData);
    // Limpiar las cajas después de editar
    setFullName('');
    setEmail('');
    setPhone('');
    setAddress('');
  };
 console.log(params);
  return (
    <div>
      <div className="container mx-auto py-3 px-3">
        <h1>Edit Contact</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="card p-4">
          <div className="mb-3">
            <label htmlFor="fullName" className="form-label">Full Name</label>
            <input type="text" className="form-control" id="fullName" placeholder="Edit Maria Swat" value={fullName} onChange={(event) => setFullName(event.target.value)} />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" placeholder="Edit name@example.com" value={email} onChange={(event) => setEmail(event.target.value)} />
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="form-label">Phone</label>
            <input type="text" className="form-control" id="phone" placeholder="Edit 567894213" value={phone} onChange={(event) => setPhone(event.target.value)} />
          </div>
          <div className="mb-3">
            <label htmlFor="address" className="form-label">Address</label>
            <input type="text" className="form-control" id="address" placeholder="P. Sherman, calle Wallaby, 42, Sydney" value={address} onChange={(event) => setAddress(event.target.value)} />
          </div>
          <button type="submit" className="btn btn-primary">Save Contact</button>
        </div>
      </form>
    </div>
  );
};

export default EditContact;

