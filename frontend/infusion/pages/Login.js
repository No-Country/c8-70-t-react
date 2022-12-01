import Link from "next/link";
import React from "react";
import LayoutMargin from "../components/LayoutMargin";

const Login = () => {
  return (
    <>
      <div className="d-flex p-4 text-dark bg-white align-items-center ">
        <div className="col-12 ">
          <p className="ms-5">Inicio/Perfil</p>
        </div>
        
      </div>
      <LayoutMargin>
        <div
          className="p-4 bg-light col-10 mx-auto my-5"
          style={{
            // minWidth: "660px",
            // maxWidth: "1960px",
            // width:'220%',
            minHeight: "360px",
            fontSize: "14px",
          }}
        >
          <div>
            {/* para mostrar con condicional */}
            {/* <h2 className="mb-3">¡Tu cuenta se ha creado con éxito!</h2> */}
            <h2 className="mb-3">Iniciar sesión</h2>
            <form className="needs-validation" novalidate="">
              <div className="row flex-column g-3 ">
                <div className="col-12 col-lg-6">
                  <label for="email" className="form-label">
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

                <div className="col-12 col-lg-6">
                  <label for="firstName" className="form-label">
                    Clave
                  </label>
                  <input
                    type="password"
                    className="form-control bg-dark bg-opacity-10"
                    id="firstName"
                    placeholder="password"
                    required=""
                  />
                  <div className="invalid-feedback">
                    Valid first name is required.
                  </div>
                </div>
              </div>

              <div className="m-auto mt-5">
                {/* al presionar este boton se hace peticion al server para inicar sesion */}
                <Link
                  href="/Profile"
                  className="text-light text-decoration-none mb-5"
                >
                  <button
                    className="btn btn-info text-light px-5 "
                    style={{
                      borderRadius: "10px !important",
                      minWidth: "30%",
                      height: "40px",
                      backgroundColor: "#00A5D0",
                    }}
                    type="button"
                  >
                    Iniciar sesión
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </LayoutMargin>
    </>
  );
};

export default Login;
