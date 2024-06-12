import ContactList from "../views/ContactList.jsx";
import CreateAContact from "../views/CreateAContact.jsx";
import EditContact from "../views/EditContact.jsx";
import DeleteContact from "../views/DeleteContact.jsx";

const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            apiURL: "https://playground.4geeks.com/contact/docs",
            contactList: [],
        },
        actions: {
            getContactlist: async () => {
                const { apiURL } = getStore().store;
                try {
                    const response = await fetch(apiURL, {
                        method: "GET",
                        headers: { "Content-Type": "application/json" }
                    });
                    if (!response.ok) {
                        throw new Error("There was an error fetching contacts");
                    }
                    const data = await response.json();
                    setStore({ contactList: data });
                } catch (error) {
                    console.error(error);
                }
            },
            addContact: async (contact) => {
               addCreateaContact: async () => {
				const 
			   }
            },
            editContact: async (contactId, updatedContact) => {
                
            },
            deleteContact: async (contactId) => {
           
            },
        },
    };
};

export default getState;
