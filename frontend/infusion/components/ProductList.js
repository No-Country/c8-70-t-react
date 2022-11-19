import React from "react";
import ProductCard from "./ProductCard";

export default function ProductList() {
  const ProductData = [
    {
      nombre: "Cartera Bahamas",
      precio: "$75000 COP",
      image: "/home-product-1.png",
    },
    {
      nombre: "Cartera Bahamas",
      precio: "$75000 COP",
      image: "/home-product-1.png",
    },
    {
      nombre: "Cartera Bahamas",
      precio: "$75000 COP",
      image: "/home-product-1.png",
    },
    {
      nombre: "Cartera Bahamas",
      precio: "$75000 COP",
      image: "/home-product-1.png",
    },
    {
      nombre: "Cartera Bahamas",
      precio: "$75000 COP",
      image: "/home-product-1.png",
    },
    {
      nombre: "Cartera Bahamas",
      precio: "$75000",
      image: "/home-product-1.png",
    },
  ];

  return (
    <div class="row row-cols-1 row-cols-md-3 g-4">
      {ProductData.map((item) => (
        <ProductCard
          nombre={item.nombre}
          image={item.image}
          precio={item.precio}
        ></ProductCard>
      ))}
    </div>
  );
}
