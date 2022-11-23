import React from "react";
import AddCartButton from "../components/AddCartButton";
import ProductCounter from "../components/ProductCounter";

export default function Cart() {
  return (
    <div>
      <div className="col col-md-auto d-flex flex-column flex-md-row mb-3 mx-auto">
        <div
          className="p-2 bg-light h-75"
          style={{
            minWidth: "360px",
            maxWidth: "460px",
            width: "90%",
            maxHeight: "260px",
            fontSize: "14px",
          }}
        >
          <div className="d-flex px-2">
            <div className="col text-center">
              <h5 className="my-3 mx-3" style={{ fontSize: "18px" }}>
                Resumen de la compra
              </h5>
            </div>
          </div>

          <div className="col">
            <div className="d-flex">
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
          <div className="d-flex">
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
            className="d-flex justify-content-around flex-column"
            style={{ minWidth: "300px" }}
          >
            <div className="m-auto mb-3 ">
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
                className="btn btn-info text-info px-4"
                style={{
                  borderRadius: "10px !important",
                  height: "40px",
                  backgroundColor: "transparent",
                }}
              >
                {"<--"} Continuar viendo productos
              </button>
            </div>
          </div>
        </div>

        {/* aqui iria el otro cajon */}
      </div>
    </div>
  );
}
