import React, { useContext } from "react";
import ProductCounter from "../components/ProductCounter";
import { FormContext } from "../context/FormContext";
// import styles from "../styles/CheckoutList.module.css";

export default function CheckedShipping({ nombre, email, phone }) {
  const { shippingData } = useContext(FormContext);
  // const shippingData = JSON.parse(shippingData);

  // console.log(typeof shippingData, shippingData);

  return (
    <>
      {/* <div className="d-flex gap-3 flex-column flex-lg-row mb-3 col-9">
        <div className="col d-flex flex-column flex-sm-row mb-3 ms-2 ">
          
          <div
            className="p-4 bg-light col-12"
            style={{
              // minWidth: "660px",
              // maxWidth: "1960px",
              // width:'220%',
              minHeight: "360px",
              fontSize: "14px",
            }}
          >
            <h4 className="mb-3">Datos de Entrega</h4>
            <hr
              className="bg-black opacity-100"
              style={{ border: "1px black solid" }}
            ></hr>
            <h4 className="mb-3">A entregar en: Av. Palacios 27</h4>
            <h4 className="mb-3">Ciudad: Medellín</h4>
            <h4 className="mb-3">Tiempo estimado: 15 días hábiles</h4>
          </div>
        </div>
      </div> */}
      <div className="d-flex gap-3 flex-column flex-lg-row mb-3 col-12 col-lg-12">
        {/* <div className="col d-flex flex-column flex-sm-row mb-3  "> */}
        {/* area ppal */}
        <div
          className="p-4 bg-light col-12"
          style={{
            // minWidth: "660px",
            // maxWidth: "1960px",
            // width:'220%',
            // minHeight: "260px",
            fontSize: "14px",
          }}
        >
          <h4 className="mb-3">2 FACTURACIÓN Y ENTREGA</h4>
          <hr
            className="bg-black opacity-100"
            style={{ border: "1px black solid" }}
          ></hr>
          <span className="fs-6">
            <strong>A entregar en: </strong> {shippingData.direccion}{" "}
            {shippingData.numero}
          </span>
          <br />
          <span className="fs-6">
            <strong>Ciudad:</strong> {shippingData.ciudad}
          </span>
          <br />
          <span className="fs-6">
            <strong>Tiempo estimado:</strong> 15 días hábiles
          </span>
          <br />
          {/* <h5 className="mb-3">Telefono:</h5> */}
        </div>
        {/* </div> */}
      </div>
    </>
  );
}
