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
            <h4 className="mb-3">3 MÉTODO DE PAGO</h4>
            <hr
              className="bg-black opacity-100"
              style={{ border: "1px black solid" }}
            ></hr>
            <span className="fs-6">
            <strong>A pagar: </strong> $85.000 en Rapi Pagol (Solo sucursales abiertas)</span>
            <br/>
            <span className="fs-6">
            <strong>Datos para tu factura:</strong> Fulanito Guzmán 34987765</span>
            <br/>
            
            {/* <h5 className="mb-3">Telefono:</h5> */}
          </div>
          
        {/* </div> */}
      </div>
    </>
  );
}
