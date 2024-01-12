import React from "react";
import { Link } from "react-router-dom";  // este link va al add new contact //cambia button por link 

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary bg-info">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          
        </a>
        <div className="d-flex" role="search">
          <Link to="/addcontact"   className="btn btn-outline-dark" type="submit"> 
            <strong>Add New Contact</strong>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
