import Image from "next/image";
import React from "react";

import styles from "../styles/ProgressBar.module.css";

const ProgressCheckout = ({ percent }) => {
  return (
    <>
      <div
        className={`${styles.container} container position-relative justify-content-center align-items-center bg-light mb-5 py-5`}
      >
        <div className="py-3 py-sm-1">
          <div className={`${styles.bar} progress`}>
            <div
              className="progress-bar progress-bar-striped progress-bar-animated bg-success"
              role="progressbar"
              aria-label="Basic example"
              style={{ width: percent }}
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <div
            className={`${styles.stepsGroup} d-flex`}
            // className="position-absolute d-flex justify-content-between mx-5"
          >
            <div className={`${styles.steps}`}>
              <p>PASO 1 </p>
              <div
                className={`${styles.circle} d-flex justify-content-center align-items-center `}
              >
                <Image
                  src={"/verificar-lista.svg"}
                  width={25}
                  height={25}
                ></Image>
              </div>
              <p className="text-wrap">Verificar Compra</p>
            </div>
            <div
              className={`${styles.steps} d-flex flex-column align-items-center`}
            >
              <p>PASO 2 </p>
              <div
                className={`${styles.circle} d-flex justify-content-center align-items-center`}
              >
                {/* <Image src={'/verificar-lista.svg'} width={25} height={25}></Image> */}
                <i className="bi bi-person-fill fs-2"></i>
              </div>
              <p>Datos personales</p>
            </div>
            <div
              className={`${styles.steps} d-flex flex-column align-items-center`}
            >
              <p>PASO 3 </p>
              <div
                className={`${styles.circle} d-flex justify-content-center align-items-center`}
              >
                <Image src={"/billing-icon.svg"} width={25} height={25}></Image>
              </div>
              <p>Facturación y entrega</p>
            </div>
            <div
              className={`${styles.steps} d-flex flex-column align-items-end`}
            >
              <p>PASO 4 </p>
              <div
                className={`${styles.circle} d-flex justify-content-center align-items-center`}
              >
                <Image src={"/payment-icon.svg"} width={25} height={25} style={{opacity:100, color: 'black'}}></Image>
              </div>
              <p className="">Método de pago</p>
            </div>
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
    </>
  );
};

export default ProgressCheckout;
