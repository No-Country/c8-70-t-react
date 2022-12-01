import React from "react";
import Link from "next/link";
import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <div>
      
      <footer
        className={`text-center text-lg-start bg-light text-muted ${styles.footer} mt-5`}
      >
        {/* <!-- Section: Social media --> */}
        {/* <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"> */}
        {/* <!-- Left --> */}
        {/* <div className="me-5 d-none d-lg-block" >
            <span>Get connected with us on social networks:</span>
          </div> */}
        {/* <!-- Left --> */}

        {/* <!-- Right --> */}
        <div>
          <a href="" className="me-4 text-reset">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="" className="me-4 text-reset">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="" className="me-4 text-reset">
            <i className="fab fa-google"></i>
          </a>
          <a href="" className="me-4 text-reset">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="" className="me-4 text-reset">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="" className="me-4 text-reset">
            <i className="fab fa-github"></i>
          </a>
        </div>
        {/* <!-- Right --> */}
        {/* </section> */}
        {/* <!-- Section: Social media --> */}

        {/* <!-- Section: Links  --> */}
        <section className="">
          <div className="container text-center text-md-start mt-5 mb-5">
            {/* <!-- Grid row --> */}
            <div className="row mt-3">
              {/* <!-- Grid column --> */}
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                {/* <!-- Content --> */}
                <h6 className="text-uppercase fw-bold mb-2 text-uppercase">
                  <i className="fas fa-gem"></i>Infusion Diseño
                </h6>
                <p className="lh-1">Empresa de diseño y marroquineria</p>
              </div>
              {/* <!-- Grid column --> */}

              {/* <!-- Grid column --> */}
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* <!-- Links --> */}
                <h6 className="text-uppercase fw-bold mb-2 text-uppercase">
                  Enlaces Rapidos
                </h6>
                <p className="lh-1">
                  <a href="#!" className="text-reset text-decoration-none">
                    Personalizables
                  </a>
                </p>
                <p className="lh-1">
                  <a href="#!" className="text-reset text-decoration-none">
                    Sobre Nosotros
                  </a>
                </p>
                <p className="lh-1">
                  <a href="#!" className="text-reset text-decoration-none">
                    Contacto
                  </a>
                </p>
              </div>
              {/* <!-- Grid column --> */}

              {/* <!-- Grid column --> */}
              <div className="col-md-3 col-lg-2 col-xl-2 mb-md-0 mb-4">
                {/* <!-- Links --> */}
                <h6 className="text-uppercase fw-bold mb-2 text-uppercase">
                  Contacto
                </h6>
                <p className="lh-1">
                  <i className="fas fa-print "></i> +57 3137209263
                </p>
                <p className="lh-1">
                  <i className="fas fa-print "></i> infusion@gmail.com
                </p>
                <p className="lh-1">
                  <i className="fas fa-home "></i> Medellin - Colombia
                </p>
                <p className="lh-1">
                  <i className="fas fa-envelope"></i>
                  {/* info@example.com */}
                </p>
              </div>
              {/* <!-- Grid column --> */}

              {/* <!-- Grid column --> */}
              <div className="col-md-4 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* <!-- Links --> */}
                <h6 className="text-uppercase fw-bold mb-2 text-uppercase">
                  Navegacion
                </h6>
                <p className="lh-1">
                  <a href="#!" className="text-reset text-decoration-none">
                    Politica de privacidad
                  </a>
                </p>
                <p className="lh-1">
                  <a href="#!" className="text-reset text-decoration-none">
                    Politica de devoluciones
                  </a>
                </p>
                <p className="lh-1">
                  <a href="#!" className="text-reset text-decoration-none">
                    FAQ - Ayuda
                  </a>
                </p>
              </div>
              {/* <!-- Grid column --> */}
              {/* <!-- Grid column --> */}
              <div className="col-md-6 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* <!-- Links --> */}
                <h6 className="text-uppercase fw-bold mb-2 text-uppercase">
                  Redes Sociales
                </h6>
                <div className="justify-content-md-start justify-content-center d-flex">
                  <p className="mx-2">
                    <a href="#!" className="text-reset text-decoration-none">
                      <i className="bi bi-twitter"></i>
                    </a>
                  </p>
                  <p className="mx-2">
                    <a href="#!" className="text-reset text-decoration-none">
                      <i className="bi bi-instagram"></i>
                    </a>
                  </p>
                  <p className="mx-2">
                    <a href="#!" className="text-reset text-decoration-none">
                      <i className="bi bi-whatsapp"></i>
                    </a>
                  </p>
                </div>
              </div>
              {/* <!-- Grid column --> */}
            </div>
            {/* <!-- Grid row --> */}
          </div>
        </section>
        {/* <!-- Section: Links  --> */}

        {/* <!-- Copyright --> */}
        <div
          className="text-center p-4 bg-light text-dark"
        >
          © Todos los derechos reservados - Infusion 2022
        </div>
        {/* <!-- Copyright --> */}
      </footer>
    </div>
  );
}
