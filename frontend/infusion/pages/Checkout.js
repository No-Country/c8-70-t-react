import Link from "next/link";
import React from "react";
import AddCartButton from "../components/AddCartButton";
import CheckedList from "../components/CheckedList";
import CheckedShipping from "../components/CheckedShipping";
import CheckedUser from "../components/CheckedUser";
import CheckoutFormUser from "../components/CheckoutFormUser";
import CheckoutList from "../components/CheckoutList";
import ShippingForm from "../components/ShippingForm";
import SumProductList from "../components/SumProductList";

import styles from "../styles/ProgressBar.module.css";

export default function Checkout() {
  // const  [progress , setProgress] = useState(initialState = 0)

  return (
    <div>
      {/* aqui inicia el Header*/}
      <Link
        href="/Productos"
        className="d-flex text-dark bg-none text-decoration-none ms-4 ps-3"
      >
        <i className="bi bi-arrow-left-short fs-3"></i>
        <p className="pt-2"> Volver a inicio</p>{" "}
      </Link>

      {/* aqui inicia el componente steps */}
      <div
        className={`${styles.container} container position-relative justify-content-center align-items-center bg-light mb-5 p-5`}
        // className="container justify-content-center align-items-center bg-light mb-5 p-5"
      >
        <div className="">
          <div className="progress mx-5">
            <div
              className="progress-bar"
              role="progressbar"
              aria-label="Basic example"
              style={{ width: "66%" }}
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
            <div></div>
          </div>
        </div>

        <div
          className={`${styles.stepsGroup} d-flex justify-content-between mx-5`}
          // className="position-absolute d-flex justify-content-between mx-5"
        >
          <div>
            <p>PASO 1 </p>
            <div className={`${styles.steps}`}></div>
            <p className="">Verificar Compra</p>
          </div>
          <div>
            <p>PASO 2 </p>
            <div className={`${styles.steps}`}></div>
            <p>Verificar Compra</p>
          </div>
          <div>
            <p>PASO 3 </p>
            <div className={`${styles.steps}`}></div>
            <p>Verificar Compra</p>
          </div>
          <div className="justify-self-end">
            <p>PASO 4 </p>
            <div className={`${styles.steps}`}></div>
            <p>Verificar Compra</p>
          </div>
        </div>
        {/* <div className={`${styles.progresses}`}>
          <div className={`${styles.steps}`}>
            <span>
              <i className="fa fa-check"></i>
            </span>
          </div>

          <span className={`${styles.line}`}></span>

          <div className={`${styles.steps}`}>
            <span>
              <i className="fa fa-check"></i>
            </span>
          </div>

          <span className="line"></span>

          <div className={`${styles.steps}`}>
            <span className="font-weight-bold">3</span>
          </div>
          <span className="line"></span>

          <div className={`${styles.steps}`}>
            <span className="font-weight-bold">4</span>
          </div>
        </div> */}
      </div>

      {/* aqui inicia la lista de productos */}
          
      <div className="d-flex gap-3 flex-column flex-lg-row">
        <div className="col d-flex flex-column flex-sm-row mb-3 ms-2 ">
          {/* area ppal */}
          <div
            className="p-4 bg-light col-12"
            style={{
              // minWidth: "660px",
              // maxWidth: "1960px",
              // width:'220%',
              minHeight: "360px",
              fontSize: "14px",
            }}
          >
            <CheckoutList />
            {/* <CheckoutFormUser/> */}
            {/* <ShippingForm/> */}
          </div>
        </div>
        {/* aqui inicia resumen de la compra */}
        <div className="col col-md-auto d-flex flex-column flex-lg-row mb-3 mx-auto">
          <div
            className="p-4 bg-light h-75"
            style={{
              minWidth: "360px",
              maxWidth: "740px",
              // width: "700px",
              // width: "130%",
              minHeight: "360px",
              fontSize: "14px",
            }}
          >
            <SumProductList></SumProductList>
            
          </div>
        </div>
      </div>
      {/* aqui empieza la lista checkeado, se deberia hacer conditional entre <checkedlist> y <>*/}
      {/* <div className="col d-flex flex-column flex-lg-row mb-3 mx-auto">
            <div
              className="p-4 bg-light h-75"
              style={{
                minWidth: "360px",
                maxWidth: "740px",
                // width: "700px",
                // width: "130%",
                minHeight: "360px",
                fontSize: "14px",
              }}
            >
              <CheckedList></CheckedList>
            </div>
          </div> */}
    </div>
  );
}
