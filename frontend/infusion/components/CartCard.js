import Link from "next/link";
import React from "react";
import ProductCounter from "./ProductCounter";

export default function CartCard({ title, price, colors }) {
  return (
    <>
      <div className="d-flex mb-3 gap-2">
        <div className="w-50">
          <img src="/home-product-1.png" width={150}></img>
        </div>
        <div className="d-flex flex-column ">
          <div className="col">
            <h5 className="text-start" style={{ fontSize: "18px" }}>
              {title}
            </h5>
          </div>
          <div className="col">
            <h5 className="text-start" style={{ fontSize: "18px" }}>
              $ {price}
            </h5>
            <p className="" style={{ fontSize: "14px" }}>
              <strong>Color</strong>: {colors}
            </p>
          </div>
          <ProductCounter></ProductCounter>
        </div>
      </div>
    </>
  );
}
