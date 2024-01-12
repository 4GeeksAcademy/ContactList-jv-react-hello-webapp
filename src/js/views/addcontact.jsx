import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const Addcontact = () => {
  const { store, actions } = useContext(Context); // Aqui estan guardados los contactos actualmente
  const [formInput, setInput] = useState({
    name: "",
    address: "",
    email: "",
    phone: "",
  }); // Estado para el formulario

  const handleSubmitted = (e) => {
    //save
    e.preventDefault(); /// es solo para los submit
    actions.newContact(formInput);
  };

  const handleChange = (e) => {
    //escribe en los input
    setInput({ ...formInput, [e.target.name]: e.target.value });
  };

  return (
    <div className="container bg-light mt-5">
      <h1> Add a new contact</h1>
      <form onSubmit={handleSubmitted}>
        <div className="mb-3">
          <label htmlFor="exampleInputName" className="form-label">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            className="form-control"
            id="exampleInputName"
            onChange={handleChange}
            placeholder="Full Name"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email
          </label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPhone" className="form-label">
            Phone
          </label>
          <input
            type="text"
            name="phone"
            className="form-control"
            id="exampleInputPhone"
            placeholder="Enter phone"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputAddress" className="form-label">
            Address
          </label>
          <input
            type="text"
            name="address"
            className="form-control"
            id="exampleInputAddress"
            placeholder="Enter address"
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Save
        </button>
      </form>
      <div className="d-flex" role="search">
        <Link to="/" type="submit">
          Go back to contacts
        </Link>
      </div>
    </div>
  );
};

export default Addcontact;
