import React, { useContext } from "react";
import ProductCounter from "../components/ProductCounter";
import Link from "next/link";
// import styles from "../styles/CheckoutList.module.css";
import { CartContext } from "../context/CartContext";

export default function SumProductList({ product, precio }) {
  const { totalCart } = useContext(CartContext);
  return (
    <>
      <div className="d-flex  pb-3">
        <div className="col text-center">
          <h5 className="my-3 mx-3" style={{ fontSize: "18px" }}>
            Resumen de la compra
          </h5>
        </div>
      </div>

      <div className="col">
        <div className="d-flex px-2 pb-2">
          <h5 className="me-auto" style={{ fontSize: "16px" }}>
            {" "}
            Subtotal
          </h5>
          <h5 className="" style={{ fontSize: "16px" }}>
            {" "}
            $ {totalCart}
          </h5>
        </div>
      </div>
      <hr
        className="border border-secondary border-1 opacity-75 m-auto"
        style={{ maxWidth: "95%" }}
      />
      <div className="d-flex px-2 pt-3">
        <h5 className=" me-auto" style={{ fontSize: "18px" }}>
          {" "}
          <strong>Total</strong>
        </h5>

        <h5 className="" style={{ fontSize: "18px" }}>
          {" "}
          <strong>$ {totalCart}</strong>
        </h5>
      </div>
      <div
        className="d-flex justify-content-around flex-column pt-5"
        style={{ minWidth: "300px" }}
      >
        <div className="m-auto mb-3 ">
          {/* al presionar este boton se guarda el estado de lista de cart */}
          <button
            className="btn btn-info text-light"
            style={{
              borderRadius: "10px !important",
              height: "40px",
              backgroundColor: "#00A5D0",
              minWidth: "310px",
            }}
          >
            <Link
              href="/PersonalData"
              className="text-light text-decoration-none mb-5"
            >
              Avanzar con la compra
            </Link>
          </button>
        </div>
        <div className="m-auto mb-3 ">
          <button
            className="btn btn-info text-info px-5"
            style={{
              borderRadius: "10px !important",
              height: "40px",
              backgroundColor: "transparent",
              color: "#34A5D0",
            }}
          >
            <Link
              href="/PersonalData"
              className="text-info text-decoration-none mb-5"
            >
              <i className="bi bi-arrow-left-short">
                Continuar viendo productos
              </i>
            </Link>
          </button>
          {/* <Link
            href="/Productos"
            className="text-decoration-none d-inline-flex align-items-center"
          >
            <button
              className="btn btn-outline-primary d-flex"
              style={{
                height: "40px",
                width: "260px",
              }}
            >
              <i
                className="bi bi-arrow-lefy-short fs-3"
                style={{
                  marginTop: "-0.325em",
                }}
              ></i>
              <span
                className=""
                // style={{
                //   verticalAlign: "middle",
                //   lineHeight: "25px",
                // }}
              >
                {" "}
                Continuar viendo productos
              </span>{" "}
            </button>
          </Link> */}
          {/* <Link
            className=" btn btn-ifo"
            href="/Productos"
            // className="d-flex text-info text-decoration-none justify-content-center mb-5"
            style={{}}
          >
            <button className=" btn d-flex text-info bg-light" style={{}}>
              <i
                className="bi bi-arrow-lefy-short fs-3"
                style={{
                  marginTop: "-0.325em",
                }}
              ></i>
              <span
                className=""
                // style={{
                //   verticalAlign: "middle",
                //   lineHeight: "25px",
                // }}
              >
                {" "}
                Continuar viendo productos
              </span>{" "}
              <i className="bi bi-arrow-left-short fs-3"></i>
              <p className="pt-2 "> Continuar viendo productos</p>{" "}
            </button>
          </Link> */}
        </div>
      </div>
    </>
  );
}
