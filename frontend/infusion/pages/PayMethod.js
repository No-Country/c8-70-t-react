import Link from "next/link";
import React from "react";
import AddCartButton from "../components/AddCartButton";
import CheckedList from "../components/CheckedList";
import CheckedShipping from "../components/CheckedShipping";
import CheckedUser from "../components/CheckedUser";
import CheckoutFormUser from "../components/CheckoutFormUser";
import ChoosePayment from "../components/ChoosePayment";
import ProgressCheckout from "../components/ProgressCheckout";
import ShippingForm from "../components/ShippingForm";

import styles from "../styles/ProgressBar.module.css";

export default function PayMethod() {
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
      <div className="d-flex gap-3 flex-column flex-lg-row flex-column-reverse">
        <div className="col d-flex flex-column gap-3 mb-3">
          {/* area ppal */}
          <CheckedUser />
          <CheckedShipping />
          <ChoosePayment/>
          
        </div>
        {/* aqui inicia resumen de la compra */}
        <CheckedList></CheckedList>
      </div>
    </div>
  );
}
