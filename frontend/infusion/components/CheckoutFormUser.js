import Link from "next/link";
import React from "react";
import ProductCounter from "../components/ProductCounter";
// import styles from "../styles/CheckoutList.module.css";

export default function CheckoutFormUser({ nombre, precio, image, detalle }) {
  return (
    <>
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
        <h4 className="mb-3">Datos Personales</h4>
        <form className="needs-validation" noValidate="">
          <div className="row g-3">
            <div className="col-12">
              <label htmlFor="email" className="form-label">
                E-Mail <span className="text-muted"></span>
              </label>
              <input
                type="email"
                className="form-control bg-dark bg-opacity-10"
                id="email"
                placeholder="fulanito@example.com"
              />
              <div className="invalid-feedback">
                Please enter a valid email address for shipping updates.
              </div>
            </div>

            <div className="col-sm-6">
              <label htmlFor="firstName" className="form-label">
                Nombre
              </label>
              <input
                type="text"
                className="form-control bg-dark bg-opacity-10"
                id="firstName"
                placeholder=""
                // value=""
                required=""
              />
              <div className="invalid-feedback">
                Valid first name is required.
              </div>
            </div>

            <div className="col-sm-6">
              <label htmlFor="lastName" className="form-label">
                Apellidos
              </label>
              <input
                type="text"
                className="form-control bg-dark bg-opacity-10"
                id="lastName"
                placeholder=""
                // value=""
                required=""
              />
              <div className="invalid-feedback">
                Valid last name is required.
              </div>
            </div>

            <div className="col-6 ">
              <label htmlFor="address" className="form-label">
                Documento de Identidad
              </label>
              <input
                type="text"
                className="form-control bg-dark bg-opacity-10"
                id="address"
                placeholder="1234 Main St"
                required=""
              />
              <div className="invalid-feedback">
                Please enter your shipping address.
              </div>
            </div>

            <div className="col-5 col-sm-2">
              <label htmlFor="zip" className="form-label">
                Cod Area
              </label>
              <input
                type="text"
                className="form-control bg-dark bg-opacity-10"
                id="zip"
                placeholder="+57"
                required=""
              />
              <div className="invalid-feedback">Zip code required.</div>
            </div>

            <div className="col-12 col-sm-4">
              <label htmlFor="address" className="form-label">
                Celular
              </label>
              <input
                type="text"
                className="form-control bg-dark bg-opacity-10"
                id="address"
                placeholder="305679129"
                required=""
              />
              <div className="invalid-feedback">
                Please enter your shipping address.
              </div>
            </div>

            {/* <div className="col-md-5">
              <label htmlFor="country" className="form-label">Country</label>
              <select className="form-select" id="country" required="">
                <option value="">Choose...</option>
                <option>United States</option>
              </select>
              <div className="invalid-feedback">
                Please select a valid country.
              </div>
            </div> */}

            {/* <div className="col-md-4">
              <label htmlFor="state" className="form-label">State</label>
              <select className="form-select" id="state" required="">
                <option value="">Choose...</option>
                <option>California</option>
              </select>
              <div className="invalid-feedback">
                Please provide a valid state.
              </div>
            </div> */}
          </div>

          {/* <hr className="my-4"/> */}

          {/* <div className="form-check">
            <input type="checkbox" className="form-check-input" id="same-address"/>
            <label className="form-check-label" htmlFor="same-address">Shipping address is the same as my billing address</label>
          </div>
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="save-info"/>
            <label className="form-check-label" htmlFor="save-info">Save this information htmlFor next time</label>
          </div> */}
          {/* <hr className="my-4"/> */}
          <div className="m-auto mt-5">
            {/* al presionar este boton se guarda el estado de lista de cart */}
            <Link
              href="/Shipping"
              className="text-light text-decoration-none mb-5"
            >
              <button
                className="btn btn-info text-light px-5"
                style={{
                  borderRadius: "10px !important",
                  height: "40px",
                  backgroundColor: "#00A5D0",
                }}
                type="button"
              >
                Avanzar con la compra
              </button>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}
