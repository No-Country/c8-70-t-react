import Link from "next/link";
import React from "react";
import CheckoutFormUser from "../components/CheckoutFormUser";

const Profile = () => {
  function handleClick() {
    // console.log('presionado el a')
  }
  return (
    <div className="d-flex flex-column flex-sm-row my-5 py-5">
      <div className="d-flex px-4 pt-3 ms-4">
        <p className="">Inicio</p>
        <p className="fw-bolder">/Perfil</p>
      </div>
      <div
        className="p-4 bg-light col-3 mx-auto my-5 "
        style={{
          minWidth: "300px",
          // maxWidth: "1960px",
          // width:'220%',
          minHeight: "360px",
          fontSize: "14px",
        }}
      >
        <h2 className="mb-5 fw-bolder">Perfil</h2>
        <div className="d-flex flex-row flex-sm-column flex-wrap gap-3">
          <a className="text-decoration-none" onClick={handleClick}>
            <h5 className="mb-5">Mis Datos</h5>
          </a>
          <a className="text-decoration-none" onClick={handleClick}>
            <h5 className="mb-5">Mis Pedidos</h5>
          </a>
          <a className="text-decoration-none" onClick={handleClick}>
            <h5 className="mb-5">Direccion de envio</h5>
          </a>
          <a className="text-decoration-none" onClick={handleClick}>
            <h5 className="mb-5">Direccion de facturacion</h5>
          </a>
          <a className="text-decoration-none" onClick={handleClick}>
            <h5 className="mb-5">Cerrar sesion</h5>
          </a>
        </div>

        {/* <div className="m-auto mt-5">
                <Link
                  href="/"
                  className="text-light text-decoration-none mb-5"
                >
                  <button
                    className="btn btn-info text-light px-5 "
                    style={{
                      borderRadius: "10px !important",
                      minWidth:"30%",
                      height: "40px",
                      backgroundColor: "#00A5D0",
                    }}
                    type="button"
                  >
                    Iniciar sesión
                  </button>
                </Link>
              </div> */}
      </div>
      <div
        className="p-4 bg-light col-7 mx-auto my-5"
        style={{
          minWidth: "300px",
          // maxWidth: "1960px",
          // width:'220%',
          minHeight: "360px",
          fontSize: "14px",
        }}
      >
        <h2 className="mb-5 fw-bolder">Resumen</h2>

        <div className="row g-sm-1 g-lg-5">
          <div className="col-12 col-sm-6">
            <label htmlFor="firstName" className="form-label">
              Nombre
            </label>
            <input
              type="text"
              className="form-control bg-dark bg-opacity-10"
              id="firstName"
              placeholder=""
              //   value=""
              required=""
            />
            <div className="invalid-feedback">
              Valid first name is required.
            </div>
          </div>

          <div className="col-12 col-sm-6">
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
            <div className="invalid-feedback">Valid last name is required.</div>
          </div>

          <div className="col-12 col-sm-6">
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

          <div className="col-12  col-sm-6">
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

          <div className="col-12 col-md-6">
            <label htmlFor="firstName" className="form-label">
              Cambiar clave
            </label>
            <input
              type="password"
              className="form-control bg-dark bg-opacity-10"
              id="firstName"
              placeholder="********"
              required=""
            />
            <div className="invalid-feedback">
              Valid first name is required.
            </div>
          </div>
        </div>

        <div className="m-auto mt-5">
          {/* al presionar este boton se guarda el estado y enviar cambio de datos al servidor */}
          <Link href="/" className="text-light text-decoration-none mb-5">
            <button
              className="btn btn-info text-light px-5"
              style={{
                borderRadius: "10px !important",
                height: "40px",
                backgroundColor: "#00A5D0",
              }}
              type="button"
            >
              Editar Datos
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;
