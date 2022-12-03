import React from "react";
import Link from "next/link";
import LayoutMargin from "../components/LayoutMargin";

const RegisterMessage = () => {
  return (
    <>
      <div className="my-5 py-5">
        <LayoutMargin>
          <div className="d-flex px-4 pt-3 ms-4">
            <p className="">Inicio</p>
            <p className="fw-bolder">/Registrarse</p>
          </div>
          <div className=" bg-light mx-5 mb-5">
            <div className="px-5">
              <h3 className="mb-2 fw-bold  pt-5">
                Estas a un paso de crear tu cuenta.
              </h3>
              <p className=" fw-light">
                ¡Compra mas rapido y lleva el control de tus pedidos en un solo
                lugar!
              </p>

              <p className="mt-5 fw-light">
                {" "}
                Te enviamos un link a nancy@gmail.com para que valides tu mail.
              </p>
              <div className="d-flex">
                <h6 className="fw-light">¿Todavia no lo recibiste? </h6>
                <Link href="/Login" className=" fs-6 text-info ms-1">
                  <p> Enviar link de nuevo</p>
                </Link>
              </div>
            </div>
          </div>
        </LayoutMargin>
      </div>
    </>
  );
};

export default RegisterMessage;
