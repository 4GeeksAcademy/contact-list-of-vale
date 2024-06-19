import ContactList from "../views/ContactList.jsx";
import CreateAContact from "../views/CreateAContact.jsx";
import EditContact from "../views/EditContact.jsx";


const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      contactList: [],
    },
    actions: {
      getAllUsers: async () => {
        try {
          let response = await fetch("https://playground.4geeks.com/contact/agendas/ValentinaM/contacts");
          let data = await response.json();
          setStore({ contactList: data.contacts })
        } catch (error) {
          console.error(error);
        }
      },
      addContact: async (dataContact) => {
        const actions = getActions()
        let response = await fetch("https://playground.4geeks.com/contact/agendas/ValentinaM/contacts", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(
            dataContact
          ),
        })
        //es para crear un contacto cuando el se elimina. 
        if (response.status === 404) {
          actions.handleCreateUser()
          actions.addContact(dataContact)
        }
        if (response.ok) { actions.getAllUsers() }
      },

      editContact: async (editId, newData) => {
        const store = getStore();
        const actions = getActions();
        try {
          const response = await fetch(`https://playground.4geeks.com/contact/agendas/ValentinaM/contacts/${editId}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newData),
          });
          const data = await response.json();
          if (response.ok) { actions.getAllUsers(); }
        } catch (error) {
          console.error(" Error editing contact:( ", error);
        }
      },

      deleteContact: async (id) => {
        console.log(id);
        const actions = getActions()
        try {
          await fetch(`https://playground.4geeks.com/contact/agendas/ValentinaM/contacts/${id}`, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          });
          await actions.getAllUsers();
          console.log("Contact deleted :)");
        } catch (error) {
          console.error("not deleted", error);
        }
      },


      handleCreateUser: async () => {
        await fetch("https://playground.4geeks.com/contact/agendas/ValentinaM", {
          method: "POST",
        })
      },
    },
  };
};

export default getState;
