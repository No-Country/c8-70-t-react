import Reac, { useContext } from "react";
import ProductCounter from "../components/ProductCounter";
// import styles from "../styles/CheckoutList.module.css";
import { CartContext } from "../context/CartContext";

export default function CheckedList({ nombre, precio, image, detalle }) {
  const { cart, totalCart } = useContext(CartContext);

  return (
    <>
      <div className="col col-md-auto d-flex flex-column flex-lg-row mb-3 mx-auto">
        <div
          className="p-4 bg-light"
          style={{
            // minWidth: "360px",
            // maxWidth: "740px",
            // width: "700px",
            // width: "130%",
            // minHeight: "360px",
            fontSize: "14px",
          }}
        >
          <div className=" text-center">
            <h5 className="my-2 mx-3" style={{ fontSize: "18px" }}>
              Resumen de la compra
            </h5>
          </div>
          <hr
            className="bg-black opacity-100"
            style={{ border: "1px black solid" }}
          ></hr>
          {cart.map((item) => (
            <div className="d-flex ">
              <div className="">
                <img src="/home-product-1.png" width={80} height={80}></img>
              </div>
              <div className="d-flex flex-column ms-1">
                <div className="col ">
                  <h5 className="text-start" style={{ fontSize: "14px" }}>
                    {item.name}
                  </h5>
                </div>
                <div className="col">
                  <h5 className="text-start" style={{ fontSize: "14px" }}>
                    Cantidad: {item.quantity}
                  </h5>
                </div>
                <div className="col">
                  <h5 className="text-start" style={{ fontSize: "14px" }}>
                    {" "}
                    $ {item.price}
                  </h5>
                  <p className="" style={{ fontSize: "14px" }}>
                    {/* Color: Negro{" "} */}
                  </p>
                </div>
              </div>
            </div>
          ))}

          <div className="col mt-4">
            <div className="d-flex">
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
          <div className="col">
            <div className="d-flex">
              <h5 className="me-auto" style={{ fontSize: "16px" }}>
                {" "}
                Costo de Envio
              </h5>
              <h5 className="" style={{ fontSize: "16px" }}>
                {" "}
                $ 00.000
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
                <strong>$ {totalCart}</strong>
              </h5>
            </div>
            <p className="" style={{ fontSize: "14px" }}>
              <strong>Tasas y envios calculadas en el carrito</strong>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
