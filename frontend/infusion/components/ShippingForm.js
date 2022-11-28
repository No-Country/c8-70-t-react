import Link from "next/link";
import React from "react";
import ProductCounter from "../components/ProductCounter";
// import styles from "../styles/CheckoutList.module.css";

export default function ShippingForm({ nombre, precio, image, detalle }) {
  return (
    <>
      <h4 className="mb-3">Facturacion y Entrega</h4>
      <hr
        className="bg-black opacity-100"
        style={{ border: "1px black solid" }}
      ></hr>
      <form className="needs-validation" novalidate="">
        <div className="row g-3">
          <div className="col-6">
            <label for="email" className="form-label">
              Ciudad <span className="text-muted"></span>
            </label>
            <input
              type="email"
              className="form-control bg-dark bg-opacity-10"
              id="email"
              placeholder="Medellin"
            />
            <div className="invalid-feedback">
              Please enter a valid email address for shipping updates.
            </div>
          </div>

          <div className="col-6 col-sm-3 col-lg-3">
            <label for="firstName" className="form-label">
              Codigo Postal
            </label>
            <input
              type="text"
              className="form-control bg-dark bg-opacity-10"
              id="firstName"
              placeholder="0525"
              value=""
              required=""
            />
            <div className="invalid-feedback">
              Valid first name is required.
            </div>
          </div>

          <div className="col-12 col-sm-3 col-lg-3 mt-3 mt-sm-5 flex-wrap">
            <a
              href="https://visor.codigopostal.gov.co/472/visor/?lang=es"
              target="_blank"
              rel="noopener noreferrer"
              for="firstName"
              className="form-label"
            >
              ¿No sabes tu código postal?
            </a>
            {/* <div className="invalid-feedback">
                Valid first name is required.
              </div> */}
          </div>

          {/* ¿No sabes tu código postal? */}
          <label for="direccion" className="form-label">
            Direccion
          </label>

          <div className="col-4 col-sm-4">
            <label for="calle" className="form-label">
              Calle
            </label>
            <input
              type="text"
              className="form-control bg-dark bg-opacity-10"
              id="lastName"
              placeholder="CLL - KR"
              value=""
              required=""
            />
            <div className="invalid-feedback">Valid last name is required.</div>
          </div>

          <div className="col-4 col-sm-4 ">
            <label for="numerocalle" className="form-label">
              Numero
            </label>
            <input
              type="text"
              className="form-control bg-dark bg-opacity-10"
              id="address"
              placeholder="36"
              required=""
            />
            <div className="invalid-feedback">
              Please enter your shipping address.
            </div>
          </div>

          <div className="col-4 col-sm-4 ">
            <label for="numerocasa" className="form-label">
              # residencia
            </label>
            <input
              type="text"
              className="form-control bg-dark bg-opacity-10"
              id="zip"
              placeholder="#35-22"
              required=""
            />
            <div className="invalid-feedback">Zip code required.</div>
          </div>

          <div className="col-12 col-sm-6">
            <label for="nombrereceptor" className="form-label">
              Nombre de quien recibe el paquete
            </label>
            <input
              type="text"
              className="form-control bg-dark bg-opacity-10"
              id="nombre"
              placeholder="Fulanito Guzmán"
              required=""
            />
            <div className="invalid-feedback">
              Please enter your shipping address.
            </div>
          </div>
        </div>
        <div className="m-auto mt-5">
          {/* al presionar este boton se guarda el estado de lista de cart */}
          <Link
            href="/PayMethod"
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
    </>
  );
}
