import ContactList from "../views/ContactList.jsx";
import CreateAContact from "../views/CreateAContact.jsx";
import EditContact from "../views/EditContact.jsx"
import DeleteContact from "../views/DeleteContact.jsx";


const getState = ({ getStore, getActions, setStore }) => {
	return {
		store:{
			contactList: [],
		},
		actions: {
			getContact: async () => {
				try {
					const response = await fetch ("https://playground.4geeks.com/contact/agendas/ValentinaM")
					if(!response.ok) {
						throw new Error ("hay un erorr");
						}	
						const data = await response.json();
						setStore ({contactList:data});
					} catch (error)
					 {
						Console.log(error);
				}
			},
			addContact: async () => {},
			editContact: async () => {},
			deleteContact: async () => {},
		},
	};
};

export default getState;
