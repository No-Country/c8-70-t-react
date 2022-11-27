import React from "react";
import ProductCounter from "../components/ProductCounter";
// import styles from "../styles/CheckoutList.module.css";

export default function CheckedUser({ nombre, email, phone }) {
  return (
    <>
      <div className="d-flex flex-column flex-lg-row col-12">
        {/* <div className="col d-flex flex-column flex-sm-row mb-3 "> */}
          {/* area ppal */}
          <div
            className="p-4 bg-light col-12"
            style={{
              // minWidth: "660px",
              // maxWidth: "1960px",
              // width:'220%',
              // maxHeight: "260px",
              fontSize: "14px",
            }}
          >
            <h4 className="mb-3">Datos Personales</h4>
            <hr
              className="bg-black opacity-100"
              style={{ border: "1px black solid" }}
            ></hr>
            <span className="fs-6">
            <strong>Nombre:</strong> Fulanito Guzmán</span>
            <br/>
            <span className="fs-6">
            <strong>Email:</strong> Fulanito@Guzman.com</span>
            <br/>
            <span className="fs-6">
            <strong>Telefono:</strong> 3133455567</span>
            <br/>
            {/* <h5 className="mb-3">Telefono:</h5> */}
          </div>
        {/* </div> */}
      </div>
    </>
  );
}
