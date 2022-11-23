import Link from "next/link";
import React from "react";
import ProductCounter from "./ProductCounter";

export default function CartMenu() {
  return (
    <>
      <div
        className="offcanvas offcanvas-end border-5"
        style={{ border: "3px black solid" }}
        tabindex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header ">
          <h5 className="offcanvas-title" id="offcanvasRightLabel">
            Mi compra
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <hr
          className="bg-black opacity-100"
          style={{ border: "1px black solid" }}
        ></hr>
        <div className="offcanvas-body scroll">
          <div className="d-flex ">
            <div className="w-50">
              <img src="/home-product-1.png" width={150}></img>
            </div>
            <div className="d-flex flex-column">
              <div className="col">
                <h5 className="text-start" style={{ fontSize: "18px" }}>
                  Morral Bahamas
                </h5>
              </div>
              <div className="col">
                <h5 className="text-start" style={{ fontSize: "18px" }}>
                  {" "}
                  $ 75.000
                </h5>
                <p className="" style={{ fontSize: "14px" }}>
                  <strong>Color</strong>: Negro{" "}
                </p>
              </div>
              <ProductCounter></ProductCounter>
            </div>
          </div>
        </div>
        <hr
          className="bg-black opacity-100 w-100"
          style={{ border: "1px black solid" }}
        ></hr>
        <div className="d-flex flex-column px-4">
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
          <div className="col">
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
            <p className="" style={{ fontSize: "14px" }}>
              <strong>Tasas y envios calculadas en el carrito</strong>
            </p>
          </div>
        </div>
        <div className="m-auto mb-3 ">
          <Link href="/Checkout">
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
          </Link>
        </div>
      </div>
    </>
  );
}
