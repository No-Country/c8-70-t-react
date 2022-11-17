import React from "react";
import Link from "next/link";
import styles from "../styles/Header.module.css";

import user from "../public/icon/user.svg";

export default function Header() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-dark">
        <div class="container-fluid">
          <Link class="navbar-brand" href="/">
            LOGO
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link
                  class="nav-link active text-uppercase"
                  aria-current="page"
                  href="/"
                >
                  Inicio
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link text-uppercase" href="/Custom">
                  Personalizables
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class="nav-link text-uppercase"
                  href="/About"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  Sobre Nosotros
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class="nav-link text-uppercase"
                  href="/Contact"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  Contacto
                </Link>
              </li>
            </ul>
            <div class="d-flex">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <Link
                    class="nav-link text-uppercase"
                    href="/Register"
                    tabindex="-1"
                  >
                    Registrarse
                  </Link>
                </li>
                <li class="nav-item">
                  <Link
                    class="nav-link text-uppercase"
                    href="/Login"
                    tabindex="-1"
                  >
                    Iniciar Sesion
                  </Link>
                </li>
                <li class="nav-item">
                  <Link
                    class="nav-link text-uppercase"
                    href="/Login"
                    tabindex="-1"
                  >
                    <i class="bi bi-person-fill"></i>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link
                    class="nav-link text-uppercase"
                    href="/Cart"
                    tabindex="-1"
                  >
                    <i class="bi bi-bag-fill"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
