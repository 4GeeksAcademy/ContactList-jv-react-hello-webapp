const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      apiURL: "https://playground.4geeks.com/apis/fake/contact/",
      contacts: [], // Guardar data dentro de contacts
    },
    actions: {
      getApiContacts: async () => {
        const store = getStore();
        const response = await fetch(`${store.apiURL}agenda/jvalbuena`);
        const data = await response.json();
        setStore({ contacts: data });
      },

      newContact: async (contact) => {
        const store = getStore(); // Acceso al store info
        const actions = getActions(); // Tengo que utilizarla para poder aceder a las funciones del action
        const response = await fetch(store.apiURL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            full_name: contact.name,
            email: contact.email, // name, email viene del use state del addcontcat
            agenda_slug: "jvalbuena",
            address: contact.address,
            phone: contact.phone,
          }),
        });
        console.log(contact);
        actions.getApiContacts(); // esto es para que se actualize de una cuando se agrege el nuevo contact
      },

      updateContact: async (contact, id) => {
        const store = getStore();
        const actions = getActions();
        const response = await fetch(`${store.apiURL}${id}`, {
          method: "PUT",
          body: JSON.stringify({
            full_name: contact.name,
            email: contact.email, // name, email viene del use state del addcontcat
            agenda_slug: "jvalbuena",
            address: contact.address,
            phone: contact.phone,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });
        actions.getApiContacts();
      },

      deletecontact: async (id) => {
        const store = getStore();
        const actions = getActions();
        const response = await fetch(`${store.apiURL}${id}`, {
          method: "DELETE",
        });
        actions.getApiContacts()
        const data = await response.json();
      },
    },
  };
};

export default getState;
