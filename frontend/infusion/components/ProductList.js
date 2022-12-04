import { useRouter } from "next/router";
import { React, useState, useEffect } from "react";
import ProductCard from "./ProductCard";

export default function ProductList() {
  // const Product = useRouter();
  // const route = Product.pathname;
  // console.log(route);

  const ProductData = [
    {
      id: 1,
      nombre: "Cartera Bahamas",
      precio: "$75000 COP",
      image: "/home-product-1.png",

      category: "mochilas",
    },
    {
      id: 2,
      nombre: "Cartera Bahamas",
      precio: "$75000 COP",
      image: "/home-product-1.png",

      category: "mochilas",
    },
    {
      id: 3,
      nombre: "Cartera Bahamas",
      precio: "$75000 COP",
      image: "/home-product-1.png",

      category: "mochilas",
    },
    {
      id: 4,
      nombre: "Cartera Bahamas",
      precio: "$75000 COP",
      image: "/home-product-1.png",

      category: "mochilas",
    },
    {
      id: 5,
      nombre: "Cartera Bahamas",
      precio: "$75000 COP",
      image: "/home-product-1.png",

      category: "mochilas",
    },
    {
      id: 6,
      nombre: "Cartera Bahamas",
      precio: "$75000",
      image: "/home-product-1.png",

      category: "mochilas",
    },
  ];

  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      const API_URL =
        "https://c8-70-t-react-production.up.railway.app/products";
      const data = await fetch(API_URL).then((response) => response.json());
      setProducts(data);
      console.log(data);
    })();
  }, [setProducts]);

  return (
    // hay que poner keys por item
    <div className="row row-cols-2 row-cols-md-2 row-cols-lg-3 g-2">
      {/* <div className="d-flex flex-column row-cols-2 row-cols-lg-3"> */}
      {ProductData.map((item) => (
        <ProductCard
          key={item.id}
          nombre={item.nombre}
          image={item.image}
          precio={item.precio}
          path={`/Productos/${item.id}`}
        ></ProductCard>
      ))}
    </div>
  );
}
