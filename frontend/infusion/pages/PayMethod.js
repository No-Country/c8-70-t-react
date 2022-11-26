import Link from "next/link";
import React from "react";
import AddCartButton from "../components/AddCartButton";
import CheckedList from "../components/CheckedList";
import CheckedShipping from "../components/CheckedShipping";
import CheckedUser from "../components/CheckedUser";
import CheckoutFormUser from "../components/CheckoutFormUser";
import CheckoutList from "../components/CheckoutList";
import ShippingForm from "../components/ShippingForm";
import SumProductList from "../components/SumProductList";

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
      
      

      {/* aqui inicia la lista de productos */}
          <CheckedUser/>
          <CheckedShipping/>
      <div className="d-flex gap-3 flex-column flex-lg-row">
        <div className="col d-flex flex-column flex-sm-row mb-3 ms-2 ">
          {/* area ppal */}
          <div
            className="p-4 bg-light col-12"
            style={{
              // minWidth: "660px",
              // maxWidth: "1960px",
              // width:'220%',
              minHeight: "360px",
              fontSize: "14px",
            }}
          >
            {/* <CheckoutFormUser/> */}
            {/* <ShippingForm/> */}
          </div>
        </div>
        {/* aqui inicia resumen de la compra */}
        <div className="col col-md-auto d-flex flex-column flex-lg-row mb-3 mx-auto">
          <div
            className="p-4 bg-light h-75"
            style={{
              minWidth: "360px",
              maxWidth: "740px",
              // width: "700px",
              // width: "130%",
              minHeight: "360px",
              fontSize: "14px",
            }}
          >
            <CheckedList></CheckedList>
          </div>
        </div>
      </div>
      
    </div>
  );
}
