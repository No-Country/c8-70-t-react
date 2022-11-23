import React from "react";
import Link from "next/link";
import styles from "../styles/Header.module.css";
import ProductCounter from "./ProductCounter";

export default function Header() {
  return (
    <>
      <header className={`${styles.header}`}>
        <nav className="navbar navbar-expand-lg navbar-light bg-none">
          <div className="container-fluid ms-5 me-5 mt-3 g-5">
            <Link
              className="navbar-brand text-uppercase fw-lighter text-light fw-normal"
              href="/"
            >
              Logo
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo02"
              aria-controls="navbarTogglerDemo02"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    className="nav-link active text-uppercase fw-lighter text-light fw-normal"
                    aria-current="page"
                    href="/"
                  >
                    Inicio
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link text-uppercase fw-lighter text-light fw-normal"
                    href="/Custom"
                  >
                    Personalizables
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link text-uppercase fw-lighter text-light fw-normal"
                    href="/About"
                    aria-disabled="true"
                  >
                    Sobre Nosotros
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link text-uppercase fw-lighter text-light fw-normal"
                    href="/Contact"
                    aria-disabled="true"
                  >
                    Contacto
                  </Link>
                </li>
              </ul>
              <div className="d-flex">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link
                      className="nav-link text-uppercase fw-lighter text-light fw-normal"
                      href="/Register"
                    >
                      Registrarse
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link text-uppercase fw-lighter text-light fw-normal"
                      href="/Login"
                    >
                      Iniciar Sesion
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link text-uppercase fw-lighter text-light"
                      href="/Login"
                    >
                      <i className="bi bi-person-fill"></i>
                    </Link>
                  </li>
                  <li className="nav-item">
                    {/* tal vez sea necesario convertirlo en boton ya que bootstrap lo necesita para funcionar bien */}
                    {/* https://getbootstrap.com/docs/5.2/components/offcanvas/#usage */}
                    <Link
                      // type="button"
                      data-bs-toggle="offcanvas"
                      data-bs-target="#offcanvasRight"
                      aria-controls="offcanvasRight"
                      className="nav-link text-uppercase fw-lighter text-light"
                      href="/Cart"
                    >
                      <i className="bi bi-bag-fill"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <div
        className="offcanvas offcanvas-end border-5"
        style={{ border: "3px black solid" }}
        tabindex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header ">
          <h5 className="offcanvas-title" id="offcanvasRightLabel">
            Mi compra
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <hr
          className="bg-black opacity-100"
          style={{ border: "1px black solid" }}
        ></hr>
        <div className="offcanvas-body scroll">
          <div className="d-flex ">
            <div className="w-50">
              <img src="/home-product-1.png" width={150}></img>
            </div>
            <div className="d-flex flex-column">
              <div className="col">
                <h5 className="text-start" style={{ fontSize: "18px" }}>
                  Morral Bahamas
                </h5>
              </div>
              <div className="col">
                <h5 className="text-start" style={{ fontSize: "18px" }}>
                  {" "}
                  $ 75.000
                </h5>
                <p className="" style={{ fontSize: "14px" }}>
                  <strong>Color</strong>: Negro{" "}
                </p>
              </div>
              <ProductCounter></ProductCounter>
            </div>
          </div>
        </div>
        <hr
          className="bg-black opacity-100 w-100"
          style={{ border: "1px black solid" }}
        ></hr>
        <div className="d-flex flex-column px-4">
          <div className="col">
            <div className="d-flex">
              <h8 className="me-auto" style={{ fontSize: "16px" }}>
                {" "}
                Subtotal
              </h8>
              <h8 className="" style={{ fontSize: "16px" }}>
                {" "}
                $ 75.000
              </h8>
            </div>
          </div>
          <div className="col">
            <div className="d-flex">
              
                <h5 className=" me-auto" style={{ fontSize: "18px" }}>
                  {" "}
                  <strong>Total</strong>
                </h5>

                <h5 className="" style={{ fontSize: "18px" }}>
                  {" "}
                  <strong>$ 75.000</strong>
                  
                </h5>
              
            </div>
            <p className="" style={{ fontSize: "14px" }}>
              <strong>Tasas y envios calculadas en el carrito</strong>
            </p>
          </div>
        </div>
        <div className="m-auto mb-3 ">
          <button
            className="btn btn-info text-light px-5"
            style={{
              borderRadius: "10px !important",
              height: "40px",
              backgroundColor: "#00A5D0",
            }}
          >
            Avanzar con la compra
          </button>
        </div>
      </div>
    </>
  );
}
