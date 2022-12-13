import Image from "next/image";
import React from "react";
import LayoutMargin from "../components/LayoutMargin";

export default function Contact() {
  return (
    <div className="my-5 py-5">
      <div className="d-flex px-4 pt-3 ms-4">
        <p className="">Inicio</p>
        <p className="fw-bolder">/Contactanos</p>
      </div>
      <LayoutMargin>
        <div className="bg-light container-fluid p-5">
          {/* <!--Section: Contact v.2--> */}
          <section className="mb-4">
            {/* <!--Section heading--> */}
            <h2 className="h1-responsive font-weight-bold text-center my-4">
              Contactanos
            </h2>
            {/* <!--Section description--> */}
            <p className="text-center w-responsive mx-auto mb-5">
              tienes alguna pregunta? No dudes en contactarnos
              directamente.nuestro equipo esta listo para ayudarte
            </p>
            {/* <p className="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
        a matter of hours to help you.</p> */}

            <div className="row">
              {/* <!--Grid column--> */}
              <div className="col-md-9 mb-md-0 mb-5">
                <form
                  id="contact-form"
                  name="contact-form"
                  action="mail.php"
                  method="POST"
                >
                  {/* <!--Grid row--> */}
                  <div className="row">
                    {/* <!--Grid column--> */}
                    <div className="col-md-6">
                      <div className="md-form mb-0">
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className="form-control bg-dark bg-opacity-10"
                        />
                        <label for="name" className="">
                          Nombre
                        </label>
                      </div>
                    </div>
                    {/* <!--Grid column--> */}

                    {/* <!--Grid column--> */}
                    <div className="col-md-6">
                      <div className="md-form mb-0">
                        <input
                          type="text"
                          id="email"
                          name="email"
                          className="form-control bg-dark bg-opacity-10"
                          
                        />
                        <label for="email" className="">
                          Email
                        </label>
                      </div>
                    </div>
                    {/* <!--Grid column--> */}
                  </div>
                  {/* <!--Grid row--> */}

                  {/* <!--Grid row--> */}
                  <div className="row">
                    <div className="col-md-12">
                      <div className="md-form mb-0">
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          className="form-control bg-dark bg-opacity-10"
                        />
                        <label for="subject" className="">
                          Tema principal
                        </label>
                      </div>
                    </div>
                  </div>
                  {/* <!--Grid row--> */}

                  {/* <!--Grid row--> */}
                  <div className="row">
                    {/* <!--Grid column--> */}
                    <div className="col-md-12">
                      <div className="md-form">
                        <textarea
                          type="text"
                          id="message"
                          name="message"
                          rows="2"
                          className="form-control md-textarea bg-dark bg-opacity-10"
                        ></textarea>
                        <label for="message">Tu mensaje</label>
                      </div>
                    </div>
                  </div>
                  {/* <!--Grid row--> */}
                </form>

                <div className="text-center text-md-left">
                  <a
                    className="btn btn-primary"
                    onclick="document.getElementById('contact-form').submit();"
                  >
                    Enviar
                  </a>
                </div>
                <div className="status"></div>
              </div>
              {/* <!--Grid column--> */}

              {/* <!--Grid column--> */}
              <div className="col-md-3 text-center">
                <ul className="list-unstyled mb-0">
                  <li>
                    <i className="fas fa-map-marker-alt fa-2x"></i>
                    <p>Medellin colombia</p>
                  </li>

                  <li>
                    <i className="fas fa-phone mt-4 fa-2x"></i>
                    <p>+57 313 720 9263</p>
                  </li>

                  <li>
                    <i className="fas fa-envelope mt-4 fa-2x"></i>
                    <p>contacto@infusion.com</p>
                  </li>
                </ul>
              </div>
              {/* <!--Grid column--> */}
            </div>
          </section>
          {/* <!--Section: Contact v.2--> */}
        </div>
      </LayoutMargin>
    </div>
  );
}
