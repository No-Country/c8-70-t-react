import Link from "next/link";
import React, { useContext } from "react";
import CartCard from "./CartCard";
import { CartContext } from "../context/CartContext";

export default function CartMenu() {
  const { cart, addItem } = useContext(CartContext);

  const updateQuantity = () => {
    // cart.map((item) => {
    //   item.quantity;
    // });
    // console.log("id", id, "name", name, "price", price, "count", count);
  };

  return (
    <>
      <div
        className="offcanvas offcanvas-end border-5"
        style={{ border: "3px black solid" }}
        tabIndex="-1"
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
          {cart.map((item) => (
            <CartCard
              title={item.name}
              // colors={item.color}
              quantity={item.quantity}
              price={item.price}
              productId={item.id}
              key={item.id}
            ></CartCard>
          ))}
        </div>
        <hr
          className="bg-black opacity-100 w-100"
          style={{ border: "1px black solid" }}
        ></hr>
        <div className="d-flex flex-column px-4">
          <div className="col">
            <div className="d-flex">
              <h5 className="me-auto" style={{ fontSize: "16px" }}>
                {" "}
                Subtotal
              </h5>
              <h5 className="" style={{ fontSize: "16px" }}>
                {" "}
                $ 75.000
              </h5>
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
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              style={{
                borderRadius: "10px !important",
                height: "40px",
                backgroundColor: "#00A5D0",
              }}
              onClick={updateQuantity}
            >
              Avanzar con la compra
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
