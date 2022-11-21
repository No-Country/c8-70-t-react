import React from "react";

export default function AddCartButton() {
  return (
    <div className="">
      <button
        className="btn btn-info text-light px-3"
        style={{
          borderRadius: "10px !important",
          height: "40px",
          backgroundColor: "#00A5D0",
        }}
      >
        Agregar al carrito
      </button>
    </div>
  );
}
