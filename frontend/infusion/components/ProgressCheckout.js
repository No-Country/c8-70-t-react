import React from "react";

import styles from "../styles/ProgressBar.module.css";

const ProgressCheckout = () => {
  return (
    <>
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
    </>
  );
};

export default ProgressCheckout;
