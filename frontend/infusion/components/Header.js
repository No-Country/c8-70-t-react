import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "../styles/Header.module.css";
import ProductCounter from "./ProductCounter";
import CartMenu from "./CartMenu";

export default function Header() {
  const router = useRouter();
  const ruta = router.pathname;
  console.log(ruta);
  return (
    <>
      <header className="navbar-brand text-uppercase fw-lighter fw-normal bg-light">
        {router.pathname === "/Checkout" ||
        router.pathname === "/PersonalData" ||
        router.pathname === "/Shipping" ||
        router.pathname === "/PayMethod" ? (
          <div className="d-flex pt-3 ms-4 ps-4 text-dark bg-white align-items-center">
            <p className="text-wrap">
              Atención al cliente | +54 3122693369 de Lunes a Viernes 9:00 AM
              hasta 20:00 PM
            </p>
          </div>
        ) : (
          <nav className="navbar fixed-top navbar-expand-lg navbar-light align-items-center bg-light">
            <div className="container-fluid mx-5 my-2 g-5">
              <Link
                className="navbar-brand text-uppercase fw-lighter fw-normal"
                href="/"
              ></Link>
              <Link
                className=" text-uppercase fw-lighter fw-normal text-dark me-auto"
                aria-current="page"
                href="/"
              >
                <img
                  src="../LOGO.svg"
                  alt="infusion"
                  height={20}
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarToggler"
                />
              </Link>
              <span className="d-lg-none">
                {/* data-bs-toggle, data-bs-target is necesary to bootstrap 5 to use JS */}
                <Link
                  // type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasRight"
                  aria-controls="offcanvasRight"
                  className=" nav-link text-uppercase fw-lighter fw-normal text-dark"
                  href="/Cart"
                >
                  <i className="bi bi-bag-fill fs-4"></i>
                  [5]
                </Link>
              </span>
              <button
                className="navbar-toggler ms-4"
                type="button"
                data-bs-toggle="collapse"
                data-bs-dismiss="collapse"
                data-bs-target="#navbarToggler"
                aria-controls="navbarToggler"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse " id="navbarToggler">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item"></li>
                  <li className="nav-item">
                    <Link
                      className=" nav-link text-uppercase fw-lighter fw-normal text-dark"
                      href="/Custom"
                    >
                      <p
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarToggler"
                      >
                        Personalizables
                      </p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className=" nav-link text-uppercase fw-lighter fw-normal text-dark"
                      href="/About"
                      aria-disabled="true"
                    >
                      <p
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarToggler"
                      >
                        Sobre Nosotros
                      </p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className=" nav-link text-uppercase fw-lighter fw-normal text-dark"
                      href="/Contact"
                      aria-disabled="true"
                    >
                      <p
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarToggler"
                      >
                        Contacto
                      </p>
                    </Link>
                  </li>
                </ul>
                <div className="d-flex ">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-1">
                    <li className="nav-item">
                      <Link
                        className=" nav-link text-uppercase fw-lighter fw-normal text-dark"
                        href="/Register"
                      >
                        <p
                          data-bs-toggle="collapse"
                          data-bs-target="#navbarToggler"
                        >
                          Registrarse
                        </p>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className=" nav-link text-uppercase fw-lighter fw-normal text-dark"
                        href="/Login"
                      >
                        <p
                          data-bs-toggle="collapse"
                          data-bs-target="#navbarToggler"
                        >
                          Iniciar Sesion
                        </p>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className=" nav-link text-uppercase fw-lighter fw-normal text-dark"
                        href="/Login"
                      >
                        <p
                          data-bs-toggle="collapse"
                          data-bs-target="#navbarToggler"
                        >
                          <i className="bi bi-person-fill fs-4"></i>
                        </p>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        // type="button"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasRight"
                        aria-controls="offcanvasRight"
                        className=" nav-link text-uppercase fw-lighter fw-normal text-dark "
                        href="/Cart"
                      >
                        <i className="bi bi-bag-fill fs-4"></i>[5]
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        )}
      </header>
      <CartMenu />
    </>
  );
}
