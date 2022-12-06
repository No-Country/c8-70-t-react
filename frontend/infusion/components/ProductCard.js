import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../styles/ProductCard.module.css";

export default function ProductCard({
  name,
  price,
  image,
  description,
  path,
  etiqueta,
}) {
  return (
    <>
      <div className="card position-relative mb-5">
        <Link href={path} className=" text-decoration-none text-black">
          <img src={image.img1} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text text-uppercase">$ {price} COP</p>
          </div>
          {etiqueta && (
            <p className={`${styles.customBtn} fs-6 mt-4 p-4`}>{etiqueta}</p>
          )}
          <button className={`${styles.cartBtn}`}>
            <i className="bi bi-cart-fill fs-1"></i>
          </button>
        </Link>
      </div>
    </>
  );
}
