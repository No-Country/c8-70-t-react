import Link from "next/link";
import React from "react";
import AddCartButton from "../components/AddCartButton";
import CheckedList from "../components/CheckedList";
import CheckedShipping from "../components/CheckedShipping";
import CheckedUser from "../components/CheckedUser";
import CheckoutFormUser from "../components/CheckoutFormUser";
import CheckoutList from "../components/CheckoutList";
import ProgressCheckout from "../components/ProgressCheckout";
import ShippingForm from "../components/ShippingForm";
import SumProductList from "../components/SumProductList";

import styles from "../styles/ProgressBar.module.css";

export default function Shipping() {
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
      <ProgressCheckout />
      {/* aqui inicia la lista de productos */}
      {/* <CheckedShipping/> */}
      <div className="d-flex gap-3 flex-column flex-lg-row flex-column-reverse mb-5">
        <div className="col d-flex flex-column gap-3">
          <CheckedUser />
          {/* area ppal */}

          {/* <CheckoutList /> */}
          {/* <CheckoutFormUser/> */}
          <ShippingForm />
        </div>
        {/* aqui inicia resumen de la compra */}
        <div className="col col-md-auto d-flex flex-column flex-lg-row mb-3 mx-auto">
          <CheckedList></CheckedList>
        </div>
      </div>
    </div>
  );
}
