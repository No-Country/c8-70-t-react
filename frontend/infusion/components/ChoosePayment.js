import Image from "next/image";
import Link from "next/link";
import React from "react";
import ProductCounter from "../components/ProductCounter";
// import styles from "../styles/CheckoutList.module.css";

export default function ChoosePayment({ nombre, email, phone }) {
  return (
    <>
      <div className="d-flex flex-column flex-lg-row col-12">
        {/* <div className="col d-flex flex-column flex-sm-row mb-3 "> */}
        {/* area ppal */}
        <div
          className="p-4 bg-light col-12"
          style={{
            // minWidth: "660px",
            // maxWidth: "1960px",
            // width:'220%',
            // maxHeight: "260px",
            fontSize: "14px",
          }}
        >
          <h4 className="mb-3">Escoge un medio de pago</h4>
          <hr
            className="bg-black opacity-100"
            style={{ border: "1px black solid" }}
          ></hr>
          {/* <span className="fs-6">
            <strong>Nombre:</strong> Fulanito Guzmán
          </span>
          <br />
          <span className="fs-6">
            <strong>Email:</strong> Fulanito@Guzman.com
          </span>
          <br />
          <span className="fs-6">
            <strong>Telefono:</strong> 3133455567
          </span> */}
          <br />
          <ul class="list-group">
            <li class="list-group-item" aria-current="true">
              <div class="form-check d-flex justify-content-between p-2">
                <label class="form-check-label" for="flexRadioDefault1">
                  <strong>Contra Entrega</strong>
                </label>
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
              </div>
            </li>
            <li class="list-group-item">
              <div class="form-check  d-flex justify-content-between align-content-end p-2">
                {/* <label class="form-check-label" for="flexRadioDefault1">
                  <strong>Nequi</strong>
                </label> */}
                  <Image src="/nequi-2.svg" width={80} height={30}></Image>
                  {/* <img src="/nequi-logo.svg" width={200} height={30}></img> */}
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
              </div>
            </li>
            <li class="list-group-item">
              <div class="form-check  d-flex justify-content-between p-2">
                {/* <label class="form-check-label" for="flexRadioDefault1">
                  <strong>Daviplata</strong>
                </label> */}
                  <Image src="/daviplata-logo.png" width={100} height={30}></Image>
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
              </div>
            </li>
          </ul>
          {/* <h5 className="mb-3">Telefono:</h5> */}
        <Link
          href="/BuyConfirmation"
          className="text-light text-decoration-none mb-5"
        >
          <button
            className="btn btn-info text-light px-5 mt-4"
            style={{
              borderRadius: "10px !important",
              height: "40px",
              backgroundColor: "#00A5D0",
            }}
            type="button"
          >
            Finalizar la compra
          </button>
        </Link>
        </div>
        {/* </div> */}
      </div>
    </>
  );
}
