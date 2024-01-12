import React, { useContext , useState} from "react";
import { useParams, Link} from "react-router-dom";
import { usenavigate } from "react-router-dom";
import { Context } from "../store/appContext";


const EditContact = () => {
  const [updateContact, setUpdateContact] = useState(); // esta es la que se utiliza para los IDs que se van a modificar
  const { actions } = useContext(Context);

  const {id} = useParams(); // id que se recibe por la URL dinamica
  console.log(id); // No creo que esto esta bien


  const handleSubmitted = (e) => {
    //save
    e.preventDefault();
    actions.updateContact(updateContact, id); // Porque params.id? porque manda los cambios a ese ID?
  };

   const handleChange = (e) => {          //escribe en los input
      setUpdateContact({...updateContact,[e.target.name]:e.target.value}) 
    }

  return (
    <div className="container bg-light mt-5">
      <h1> Edit contact</h1>
      <form onSubmit={handleSubmitted}>
        <div className="mb-3">
          <label htmlFor="exampleInputName" className="form-label">
            Update Full Name
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
            Update Email
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
            Update Phone
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
            Update Address
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
          Go back to contact
        </Link>
      </div>
    </div>
  );
};

export default EditContact;
