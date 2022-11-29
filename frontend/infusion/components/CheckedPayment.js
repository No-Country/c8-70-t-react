import Image from "next/image";
import Link from "next/link";
import React from "react";
import ProductCounter from "../components/ProductCounter";
// import styles from "../styles/CheckoutList.module.css";

export default function CheckedPayment({ nombre, email, phone }) {
  return (
    <>
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
            <h4 className="mb-3">Datos de Entrega</h4>
            <hr
              className="bg-black opacity-100"
              style={{ border: "1px black solid" }}
            ></hr>
            <span className="fs-6">
            <strong>A entregar en: </strong> Av. Palacios 27</span>
            <br/>
            <span className="fs-6">
            <strong>Ciudad:</strong> Medellín</span>
            <br/>
            <span className="fs-6">
            <strong>Tiempo estimado:</strong>  15 días hábiles</span>
            <br/>
            {/* <h5 className="mb-3">Telefono:</h5> */}
          </div>
        {/* </div> */}
      </div>
    </>
  );
}
