import React from "react";
import Link from "next/link";
import styles from "../styles/Header.module.css";

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
                    <Link
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
    </>
  );
}
