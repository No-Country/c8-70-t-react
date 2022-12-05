import { React, useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function AddCartButton({ count, productData }) {
  const { addItem, cart } = useContext(CartContext);

  const onAddToCart = () => {
    console.log(productData);
    addItem({
      id: productData.id,
      name: productData.name,
      price: productData.price,
      quantity: count,
    });
    // console.log("id", id, "name", name, "price", price, "count", count);
    console.log("este es cart", cart);
  };

  return (
    <div className="">
      <button
        className="btn btn-info text-light px-3"
        style={{
          borderRadius: "10px !important",
          height: "40px",
          backgroundColor: "#00A5D0",
        }}
        onClick={onAddToCart}
        count={count}
      >
        Agregar al carrito
      </button>
    </div>
  );
}
