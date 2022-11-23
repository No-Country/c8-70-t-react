import Link from "next/link";
import React from "react";
import AddCartButton from "../components/AddCartButton";
import ProductCounter from "../components/ProductCounter";

export default function Checkout() {
  return (
    <div>
      <Link
        href="/Productos"
        className="d-flex text-dark bg-none text-decoration-none ms-4 ps-3"
      >
        <i className="bi bi-arrow-left-short fs-3"></i>
        <p className="pt-2"> Volver a inicio</p>{" "}
      </Link>
      
      {/* aqui inicia el componente steps */}
      {/* aqui inicia la lista de productos */}
      <div className="d-flex gap-3">
        <div className="col col-md-auto d-flex flex-column flex-md-row mb-3 mx-auto ">
        <div
            className="p-4 bg-light h-75"
            style={{
              minWidth: "560px",
              maxWidth: "360px",
              // width: "",
              minHeight: "360px",
              fontSize: "14px",
            }}
          ></div>
        </div>
        {/* aqui inicia resumen de la compra */}
        <div className="col col-md-auto d-flex flex-column flex-md-row mb-3 mx-auto">
          <div
            className="p-4 bg-light h-75"
            style={{
              minWidth: "360px",
              maxWidth: "360px",
              width: "90%",
              minHeight: "360px",
              fontSize: "14px",
            }}
          >
            <div className="d-flex px-2 pb-3">
              <div className="col text-center">
                <h5 className="my-3 mx-3" style={{ fontSize: "18px" }}>
                  Resumen de la compra
                </h5>
              </div>
            </div>
        
            <div className="col">
              <div className="d-flex px-2 pb-2">
                <h8 className="me-auto" style={{ fontSize: "16px" }}>
                  {" "}
                  Subtotal
                </h8>
                <h8 className="" style={{ fontSize: "16px" }}>
                  {" "}
                  $ 75.000
                </h8>
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
                <strong>$ 75.000</strong>
              </h5>
            </div>
            <div
              className="d-flex justify-content-around flex-column pt-5"
              style={{ minWidth: "300px" }}
            >
              <div className="m-auto mb-3 ">
                {/* al presionar este boton se guarda el estado de lista de cart */}
                <button 
                  className="btn btn-info text-light px-5"
                  style={{
                    borderRadius: "10px !important",
                    height: "40px",
                    backgroundColor: "#00A5D0",
                  }}
                >
                  Avanzar con la compra
                </button>
              </div>
              <div className="m-auto mb-3 ">
                <button
                  className="btn btn-info text-info "
                  style={{
                    borderRadius: "10px !important",
                    height: "40px",
                    width:"260px",
                    // position:"relative",
                    backgroundColor: "transparent",
                  }}
                >
                  <Link
                    href="/Productos"
                    className="d-flex text-info text-decoration-none justify-content-center"
                    style={{
                      borderRadius: "10px !important",
                      // height: "40px",
                      // position:"absolute",
                      // top:"0px",
                      backgroundColor: "transparent",
                    }}
                  >
                    <i className="bi bi-arrow-left-short fs-3"></i>
                    <p className="pt-1 text-nowrap"> Volver a Productos</p>{" "}
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
