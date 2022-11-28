import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../styles/ProductCard.module.css";

export default function ProductCard({ nombre, precio, image, detalle }) {
  return (
    <>
      <div className="col">
        <Link href={detalle} className="card h-100 border-0 position-relative text-decoration-none text-black">
          <img src={image} className="card-img-top" alt="..." />
          <div className="card-body ms-4 my-3">
            <h5 className="card-title ">{nombre}</h5>
            <p className="card-text text-uppercase ">{precio}</p>
          </div>
          <p className={`${styles.customBtn} fs-6 mt-4  p-4`}>Personalizable</p>
          <button className={`${styles.cartBtn}`}>
            <i className="bi bi-cart-fill"></i>
          </button>
        </Link>
      </div>
    </>
  );
}
