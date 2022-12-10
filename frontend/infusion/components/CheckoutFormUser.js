import Link from "next/link";
import React, { useState, useContext } from "react";
import ProductCounter from "../components/ProductCounter";
import { FormContext } from "../context/FormContext";

import { useForm } from "react-hook-form";
import CartCard from "./CartCard";
import { useRouter } from "next/router";

export default function CheckoutFormUser({}) {
  const { setPersonalData, personalData } = useContext(FormContext);
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // const [data, setData] = useState("");
  // const onSubmit = (data) => setPersonalData(data);
  console.log(errors);
  // console.log("datapersonal", data);
  console.log("personalData", personalData);

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
        <form
          onSubmit={handleSubmit((data) =>
            setPersonalData(data)
          )}
        >
          <div className="row g-3">
            <div className="col-12">
              <label htmlFor="email" className="form-label">
                E-Mail <span className="text-muted"></span>
              </label>
              <input
                className="form-control bg-dark bg-opacity-10"
                defaultValue="prueba@micorreo.com"
                type="text"
                placeholder="tuemail@example.com"
                {...register("Email", {
                  required: true,
                  maxLength: 100,
                  pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i,
                })}
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
                className="form-control bg-dark bg-opacity-10"
                defaultValue="Laura"
                type="text"
                placeholder="Nombre"
                {...register("nombre")}
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
                className="form-control bg-dark bg-opacity-10"
                defaultValue="Guzman"
                type="text"
                placeholder="Apellido"
                {...register("apellido")}
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
                className="form-control bg-dark bg-opacity-10"
                defaultValue="40234456"
                type="text"
                placeholder="Documento de Identidad"
                {...register("documento")}
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
                className="form-control bg-dark bg-opacity-10"
                defaultValue="57"
                type="number"
                placeholder="+57"
                {...register("codArea")}
              />
              <div className="invalid-feedback">Zip code required.</div>
            </div>

            <div className="col-12 col-sm-4">
              <label htmlFor="address" className="form-label">
                Celular
              </label>
              <input
                className="form-control bg-dark bg-opacity-10"
                defaultValue="114567882"
                type="number"
                placeholder="Celular"
                {...register("celular")}
              />
              <div className="invalid-feedback">
                Please enter your shipping address.
              </div>
            </div>
          </div>

          <div className="m-auto mt-5">
          
              <input
                value="Avanzar con la compra"
                type="submit"
                className="btn btn-info text-light px-5"
                style={{
                  borderRadius: "10px !important",
                  height: "40px",
                  backgroundColor: "#00A5D0",
                }}
                onClick={() => router.push('/Shipping')}
              />
            
          </div>
        </form>
      </div>
    </>
  );
}
