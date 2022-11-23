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
      <header
        className={
          ruta === "/"
            ? `${styles.headerHome} navbar-brand text-uppercase fw-lighter fw-normal`
            : `${styles.headerLayout}`
        }
      >
        <nav className="navbar navbar-expand-lg navbar-light align-items-center">
          <div className="container-fluid ms-5 me-5 mt-3 g-5">
            <Link
              className="navbar-brand text-uppercase fw-lighter fw-normal"
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
                    className={
                      ruta === "/"
                        ? " nav-link text-uppercase fw-lighter fw-normal text-light"
                        : " nav-link text-uppercase fw-lighter fw-normal text-dark"
                    }
                    aria-current="page"
                    href="/"
                  >
                    Inicio
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={
                      ruta === "/"
                        ? " nav-link text-uppercase fw-lighter fw-normal text-light"
                        : " nav-link text-uppercase fw-lighter fw-normal text-dark"
                    }
                    href="/Custom"
                  >
                    Personalizables
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={
                      ruta === "/"
                        ? " nav-link text-uppercase fw-lighter fw-normal text-light"
                        : " nav-link text-uppercase fw-lighter fw-normal text-dark"
                    }
                    href="/About"
                    aria-disabled="true"
                  >
                    Sobre Nosotros
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={
                      ruta === "/"
                        ? " nav-link text-uppercase fw-lighter fw-normal text-light"
                        : " nav-link text-uppercase fw-lighter fw-normal text-dark"
                    }
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
                      className={
                        ruta === "/"
                          ? " nav-link text-uppercase fw-lighter fw-normal text-light"
                          : " nav-link text-uppercase fw-lighter fw-normal text-dark"
                      }
                      href="/Register"
                    >
                      Registrarse
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className={
                        ruta === "/"
                          ? " nav-link text-uppercase fw-lighter fw-normal text-light"
                          : " nav-link text-uppercase fw-lighter fw-normal text-dark"
                      }
                      href="/Login"
                    >
                      Iniciar Sesion
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className={
                        ruta === "/"
                          ? " nav-link text-uppercase fw-lighter fw-normal text-light"
                          : " nav-link text-uppercase fw-lighter fw-normal text-dark"
                      }
                      href="/Login"
                    >
                      <i className="bi bi-person-fill fs-4"></i>
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
                      className={
                        ruta === "/"
                          ? " nav-link text-uppercase fw-lighter fw-normal text-light"
                          : " nav-link text-uppercase fw-lighter fw-normal text-dark"
                      }
                      href="/Cart"
                    >
                      <i className="bi bi-bag-fill fs-4"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <CartMenu />
    </>
  );
}
