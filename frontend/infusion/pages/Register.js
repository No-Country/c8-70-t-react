import React from "react";
import Link from "next/link";

export default function Register() {
  return (
    <>
      <div className="d-flex px-4 pt-3 ms-4">
        <p className="">Inicio</p>
        <p className="fw-bolder">/Registrarse</p>
      </div>
      <div className="mx-5">
        <div className="bg-light">
          <h3 className="mb-2 fw-bold ms-5 pt-5">Crear nueva cuenta</h3>
          <div className="d-flex ms-5">
            <h6 className="fw-light">¿Ya tienes una cuenta?</h6>
            <Link href="/Login" className=" fs-6 text-info ms-1">
              <p> Inicia sesión aqui</p>
            </Link>
          </div>
          <form className="d-flex bg-light px-5 pb-5 pt-3 mb-5">
            <div className="col-6">
              <p className="fw-bolder">Datos personales </p>
              <div className="col-12 my-3 w-75">
                <label for="firstName" className="form-label">
                  Nombre* <span className="text-muted"></span>
                </label>
                <input
                  type="text"
                  className="form-control bg-dark bg-opacity-10"
                  id="firstName"
                  placeholder="Ej. Laura"
                />
              </div>
              <div className="col-sm-12 my-3 w-75">
                <label for="lastName" className="form-label">
                  Apellido*
                </label>
                <input
                  type="email"
                  className="form-control bg-dark bg-opacity-10"
                  id="lastName"
                  placeholder="Ej. Guzman"
                  value=""
                  required=""
                />
              </div>

              <div className="col-sm-12 my-3 w-75">
                <label for="passaport" className="form-label">
                  Documento*
                </label>
                <input
                  type="text"
                  className="form-control bg-dark bg-opacity-10"
                  id="passaport"
                  placeholder="Ej. 12345678"
                  value=""
                  required=""
                />
              </div>
              <div className="mt-3">
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
            </div>

            <div className="col-6 ps-5">
              {" "}
              <p className="fw-bolder">Informacion de Inicio de sesión</p>
              <div className="col-12 my-3 w-75">
                <label for="email" className="form-label">
                  Email* <span className="text-muted"></span>
                </label>
                <input
                  type="text"
                  className="form-control bg-dark bg-opacity-10"
                  id="email"
                  placeholder="Ej. nombre@mail.com"
                />
              </div>
              <div className="col-sm-12 my-3 w-75">
                <label for="password" className="form-label">
                  Contraseña*
                </label>
                <input
                  type="email"
                  className="form-control bg-dark bg-opacity-10"
                  id="password"
                  placeholder="Abl123"
                  value=""
                  required=""
                />
              </div>
              <div className="col-sm-12 my-3 w-75">
                <label for="password2" className="form-label">
                  Confirmar contraseña*
                </label>
                <input
                  type="passwoord"
                  className="form-control bg-dark bg-opacity-10"
                  id="passward"
                  placeholder="Abl1234"
                  value=""
                  required=""
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
