import React, { useContext } from "react";
import { Context } from "../store/appContext"; // trae los contactos que ya estan en la API desde el store 
import {useNavigate} from "react-router-dom"


const Home = () => {
  const { store, actions } = useContext(Context);   // Asi ya podemos utilizar store 
  console.log(store.contacts);
  const navigate = useNavigate();


  const handleRemove= (id) => {
    actions.deletecontact(id)
  }

  return (
    <div className= "bg-info">
    <div className="container">
      {store.contacts.map((contact) => {  // el map se renderiza con un return que serian los contactos 
        return (
          <div key= {contact.id}
          className="card mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src="https://www.nj.com/resizer/iqV2J-QFgh0227ybHBor4exTVBk=/800x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg"
                  className="img-fluid rounded-start"
                  alt="..."
                />
              </div>
              <div className="col-md-6">
                <div className="card-body ">
                  <h5 className="card-title">
                    {contact.full_name}</h5>
                  <p className="card-text">
                    <i class="fas fa-envelope"></i> {contact.email}
                  </p>
                  <p className="card-text">
                    
                    <i class="fas fa-mobile-alt"></i> {contact.phone}
                         
                  </p>
                  <p className="card-text">
                    <i class="fas fa-map-marker-alt"></i> {contact.address}
                  </p>
                </div>
              </div>
              <div className="col-md-2">
                <div className="card-options d-flex p-3">
                  
                  <button onClick= {() => navigate(`/contact/${contact.id}`)}
                    type="button"
                    className="btn btn-light"
                  
                  >
                    <i class="fas fa-pencil-alt"></i>
                  </button>

                  <button
                    type="button"
                    className="btn btn-light"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    <i class="fas fa-trash"></i>
                  </button>

                  <div
                    className="modal fade"
                    id="exampleModal"
                    tabindex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h1
                            className="modal-title fs-5"
                            id="exampleModalLabel"
                          >
                            Are You Sure?
                          </h1>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div className="modal-body">If you do this thing the entire universe will go down!</div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                          >
                            Oh No! 
                          </button>
                          <button onClick= {()=> handleRemove(contact.id)} type="button" className="btn btn-primary" data-bs-dismiss="modal">
                            Yes Baby!
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
    </div>
  );
};

export default Home;
