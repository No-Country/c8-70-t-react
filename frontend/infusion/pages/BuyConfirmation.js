import Link from "next/link";
import React from "react";
import AddCartButton from "../components/AddCartButton";
import CheckedList from "../components/CheckedList";
import CheckedPayment from "../components/CheckedPayment";
import CheckedShipping from "../components/CheckedShipping";
import CheckedUser from "../components/CheckedUser";
import CheckoutFormUser from "../components/CheckoutFormUser";
import ChoosePayment from "../components/ChoosePayment";
import LayoutMargin from "../components/LayoutMargin";
import ProgressCheckout from "../components/ProgressCheckout";
import ShippingForm from "../components/ShippingForm";

import styles from "../styles/ProgressBar.module.css";

export default function BuyConfirmation() {
  // const  [progress , setProgress] = useState(initialState = 0)

  return (
    <div>
      {/* aqui inicia el Header*/}
      <Link
        href="/Checkout"
        className="d-flex text-dark bg-none text-decoration-none ms-4 ps-3"
      >
        <i className="bi bi-arrow-left-short fs-3"></i>
        <p className="pt-2"> Volver a Checkout</p>{" "}
      </Link>

      {/* aqui inicia el componente steps */}
      <ProgressCheckout percent="99%"/>
      {/* aqui inicia la lista de productos */}
      <LayoutMargin>
        <div className="d-flex flex-column flex-lg-row flex-column-reverse gap-3">
          <div className="col d-flex gap-3 flex-column ">
            {/* area ppal */}
            <CheckedUser />
            <CheckedShipping />
            <CheckedPayment />
            <Link
              href="/"
              className="text-light text-decoration-none mb-5 mx-auto"
            >
              <button
                className="btn btn-info text-light px-5 text-wrap"
                style={{
                  borderRadius: "10px !important",
                  height: "40px",
                  backgroundColor: "#00A5D0",
                }}
                type="button"
              >
                Finalizar la Compra
              </button>
            </Link>
          </div>
          {/* aqui inicia resumen de la compra */}
          <CheckedList></CheckedList>
        </div>
      </LayoutMargin>
    </div>
  );
}
