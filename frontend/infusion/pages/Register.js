import React from "react";
import Link from "next/link";
import LayoutMargin from "../components/LayoutMargin";

export default function Register() {
  return (
    <div className="my-5 py-5">
      <div className="d-flex px-4 pt-3 ms-4">
        <p className="">Inicio</p>
        <p className="fw-bolder">/Registrarse</p>
      </div>
      <LayoutMargin>
        <div className="bg-light ">
          <h3 className="mb-2 fw-bold ms-5 pt-5 ps-4">Crear nueva cuenta</h3>
          <div className="d-flex ms-5 ps-4">
            <h6 className="fw-light">¿Ya tienes una cuenta?</h6>
            <Link href="/Login" className=" fs-6 text-info ms-1">
              <p> Inicia sesión aqui</p>
            </Link>
          </div>
          <form className="mb-5 pb-5">
            <div className="d-flex flex-column flex-md-row bg-light px-5  pt-3 ">
              <div className="col-12  col-md-6 p-4">
                <p className="fw-bolder">Datos personales </p>
                <div className="col-12 col-md-12 my-3">
                  <label htmlFor="firstName" className="form-label">
                    Nombre* <span className="text-muted"></span>
                  </label>
                  <input
                    type="text"
                    className="form-control bg-dark bg-opacity-10"
                    id="firstName"
                    placeholder="Ej. Laura"
                  />
                </div>
                <div className="col-sm-12 my-3">
                  <label htmlFor="lastName" className="form-label">
                    Apellido*
                  </label>
                  <input
                    type="email"
                    className="form-control bg-dark bg-opacity-10"
                    id="lastName"
                    placeholder="Ej. Guzman"
                    // value=""
                    required=""
                  />
                </div>
              
                <div className="col-sm-12 my-3">
                  <label htmlFor="passport" className="form-label">
                    Documento*
                  </label>
                  <input
                    type="text"
                    className="form-control bg-dark bg-opacity-10"
                    id="passport"
                    placeholder="Ej. 12345678"
                    // value=""
                    required=""
                  />
                </div>
              </div>
              <div className="col-12 col-md-6 ps-md-5 p-4">
                {" "}
                <p className="fw-bolder">Informacion de Inicio de sesión</p>
                <div className="col-12 my-3">
                  <label htmlFor="email" className="form-label">
                    Email* <span className="text-muted"></span>
                  </label>
                  <input
                    type="text"
                    className="form-control bg-dark bg-opacity-10"
                    id="email"
                    placeholder="Ej. nombre@mail.com"
                  />
                </div>
                <div className="col-sm-12 my-3">
                  <label htmlFor="password" className="form-label">
                    Contraseña*
                  </label>
                  <input
                    type="password"
                    className="form-control bg-dark bg-opacity-10"
                    id="password"
                    placeholder="Abl123"
                    // value=""
                    required=""
                  />
                </div>
                <div className="col-sm-12 my-3">
                  <label htmlFor="password2" className="form-label">
                    Confirmar contraseña*
                  </label>
                  <input
                    type="password"
                    className="form-control bg-dark bg-opacity-10"
                    id="password2"
                    placeholder="Abl1234"
                    // value=""
                    required=""
                  />
                </div>
              </div>
            </div>

            {/* boton */}
            <div className="ms-5 ps-4">
              <Link
                href="/RegisterMessage"
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
                  Crear cuenta
                </button>
              </Link>
            </div>
          </form>
        </div>
        </LayoutMargin>
    </div>
  );
}
