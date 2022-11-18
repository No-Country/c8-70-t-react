import React from "react";
import Link from "next/link";
import styles from "../styles/Footer.module.css"

export default function Footer() {
  return (
    <div>
      {/* <!-- Footer --> */}
      <footer className={`text-center text-lg-start bg-light text-muted ${styles.footer}`}  >
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
          <div className="container text-center text-md-start mt-5">
            {/* <!-- Grid row --> */}
            <div className="row mt-3">
              {/* <!-- Grid column --> */}
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                {/* <!-- Content --> */}
                <h6 className="text-uppercase fw-bold mb-4 text-uppercase">
                  <i className="fas fa-gem"></i>Infusion Diseño
                </h6>
                <p>
                  Empresa de diseño y marroquineria 
                </p>
              </div>
              {/* <!-- Grid column --> */}

              {/* <!-- Grid column --> */}
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* <!-- Links --> */}
                <h6 className="text-uppercase fw-bold mb-4 text-uppercase">Enlaces Rapidos</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Personalizables
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Sobre Nosotros
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Contacto
                  </a>
                </p>
              </div>
              {/* <!-- Grid column --> */}

              {/* <!-- Grid column --> */}
              <div className="col-md-3 col-lg-3 col-xl-3 mb-md-0 mb-4">
                {/* <!-- Links --> */}
                <h6 className="text-uppercase fw-bold mb-4 text-uppercase">Contacto</h6>
                <p>
                  <i className="fas fa-print "></i> +57 3137209263
                </p>
                <p>
                  <i className="fas fa-print "></i> infusion@gmail.com
                </p>
                <p>
                  <i className="fas fa-home "></i> Medellin - Colombia
                </p>
                <p>
                  <i className="fas fa-envelope"></i>
                  {/* info@example.com */}
                </p>
                
              </div>
              {/* <!-- Grid column --> */}

              {/* <!-- Grid column --> */}
              <div className="col-md-4 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* <!-- Links --> */}
                <h6 className="text-uppercase fw-bold mb-4 text-uppercase">Navegacion</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Politica de privacidad
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Politica de devoluciones
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    FAQ - Ayuda
                  </a>
                </p>
              </div>
              {/* <!-- Grid column --> */}
              {/* <!-- Grid column --> */}
              <div className="col-md-6 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* <!-- Links --> */}
                <h6 className="text-uppercase fw-bold mb-4 text-uppercase">Redes Sociales</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Politica de privacidad
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Politica de devoluciones
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    FAQ - Ayuda
                  </a>
                </p>
              </div>
              {/* <!-- Grid column --> */}
            </div>
            {/* <!-- Grid row --> */}
          </div>
        </section>
        {/* <!-- Section: Links  --> */}

        {/* <!-- Copyright --> */}
        <div
          className="text-center p-4"
          // style="background-color: rgba(0, 0, 0, 0.05);"
        >
          © Todos los derechos reservados - Infusion 2022
          
        </div>
        {/* <!-- Copyright --> */}
      </footer>
      {/* <!-- Footer --> */}
    </div>
  );
}
