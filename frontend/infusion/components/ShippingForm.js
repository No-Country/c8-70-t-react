import Link from "next/link";
import React, { useContext, useState } from "react";
import ProductCounter from "../components/ProductCounter";
// import styles from "../styles/CheckoutList.module.css";
import { FormContext } from "../context/FormContext";

import { useForm } from "react-hook-form";

export default function ShippingForm({ nombre, precio, image, detalle }) {
  const { shippingData, setShippingData } = useContext(FormContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [data, setData] = useState("");
  const onSubmit = (data) => setShippingData(data);

  console.log(errors);
  // console.log("dataShipping", data);
  console.log("shippingData", shippingData);

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
        <h4 className="mb-3">Facturacion y Entrega</h4>
        <hr
          className="bg-black opacity-100"
          style={{ border: "1px black solid" }}
        ></hr>
        <form
          onSubmit={handleSubmit((data) =>
            setShippingData(JSON.stringify(data))
          )}
        >
          <div className="row g-3">
            <div className="col-6">
              <label htmlFor="email" className="form-label">
                Ciudad <span className="text-muted"></span>
              </label>

              <input
                className="form-control bg-dark bg-opacity-10"
                defaultValue="Medellin"
                type="text"
                placeholder="Medellin"
                {...register("ciudad")}
              />
              <div className="invalid-feedback">
                Please enter a valid email address for shipping updates.
              </div>
            </div>

            <div className="col-6 col-sm-3 col-lg-3">
              <label htmlFor="firstName" className="form-label">
                Codigo Postal
              </label>

              <input
                className="form-control bg-dark bg-opacity-10"
                defaultValue="0525"
                type="text"
                placeholder="0525"
                {...register("codigoPostal")}
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
                htmlFor="firstName"
                className="form-label"
              >
                ¿No sabes tu código postal?
              </a>
              {/* <div className="invalid-feedback">
                Valid first name is required.
              </div> */}
            </div>

            {/* ¿No sabes tu código postal? */}

            <div className="col-4 col-sm-4">
              <label htmlFor="direccion" className="form-label">
                Direccion
              </label>

              <input
                className="form-control bg-dark bg-opacity-10"
                defaultValue="Av. Palacios"
                type="text"
                placeholder="Av. Palacios"
                {...register("direccion")}
              />

              <div className="invalid-feedback">
                Valid last name is required.
              </div>
            </div>

            <div className="col-4 col-sm-4 ">
              <label htmlFor="numerocalle" className="form-label">
                Numero
              </label>

              <input
                className="form-control bg-dark bg-opacity-10"
                defaultValue="36"
                type="number"
                placeholder="36"
                {...register("numero")}
              />
              <div className="invalid-feedback">
                Please enter your shipping address.
              </div>
            </div>

            <div className="col-4 col-sm-4 ">
              <label htmlFor="numerocasa" className="form-label">
                # Residencia
              </label>

              <input
                className="form-control bg-dark bg-opacity-10"
                defaultValue="#35-22"
                type="number"
                placeholder="#35-22"
                {...register("residencia")}
              />
              <div className="invalid-feedback">Zip code required.</div>
            </div>

            <div className="col-12 col-sm-6">
              <label htmlFor="nombrereceptor" className="form-label">
                Nombre de quien recibe el paquete
              </label>

              <input
                className="form-control bg-dark bg-opacity-10"
                defaultValue="Laura Guzman"
                type="text"
                placeholder="Laura Guzman"
                {...register("quienRecibe")}
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
            <input
              value="Confirmar Datos"
              type="submit"
              className="btn btn-info text-light px-5"
              style={{
                borderRadius: "10px !important",
                height: "40px",
                backgroundColor: "#00A5D0",
              }}
            />
          </div>
        </form>
      </div>
    </>
  );
}
