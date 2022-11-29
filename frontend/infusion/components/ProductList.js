import React from "react";
import ProductCard from "./ProductCard";

export default function ProductList() {
  const ProductData = [
    {
      nombre: "Cartera Bahamas",
      precio: "$75000 COP",
      image: "/home-product-1.png",
      detalle: "/Productos/1"
    },
    {
      nombre: "Cartera Bahamas",
      precio: "$75000 COP",
      image: "/home-product-1.png",
      detalle: "/Productos/2"
    },
    {
      nombre: "Cartera Bahamas",
      precio: "$75000 COP",
      image: "/home-product-1.png",
      detalle: "/Productos/3"
    },
    {
      nombre: "Cartera Bahamas",
      precio: "$75000 COP",
      image: "/home-product-1.png",
      detalle: "/Productos/4"
    },
    {
      nombre: "Cartera Bahamas",
      precio: "$75000 COP",
      image: "/home-product-1.png",
      detalle: "/Productos/5"
    },
    {
      nombre: "Cartera Bahamas",
      precio: "$75000",
      image: "/home-product-1.png",
      detalle: "/Productos/6"
    },
  ];

  return (
    // hay que poner keys por item
    <div className="row row-cols-2 row-cols-md-2 row-cols-lg-3 g-4">
      {ProductData.map((item) => (
        <ProductCard
          nombre={item.nombre}
          image={item.image}
          precio={item.precio}
          detalle={item.detalle}
        ></ProductCard>
      ))}
    </div>
  );
}
