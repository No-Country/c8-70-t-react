import { useRouter } from "next/router";
import { React, useState, useEffect } from "react";
import ProductCard from "./ProductCard";

export default function ProductList({ category }) {
  const ruta = useRouter();
  const q1 = ruta.query.categoryId;
  const q2 = ruta.query.categoryName;
  console.log("id", q1, "name", q2);

  const ProductData = [
    // {
    //   id: 1,
    //   name: "cartera bahamas",
    //   description: "lorem ipsum",
    //   category: "RIÑONERAS",
    //   colors: { color1: "#00000", color2: "#00000", color1: "#00000" },
    //   price: 75000,
    //   images: {
    //     img1: "/home-product-1.png",
    //     img2: "/home-product-1.png",
    //     img3: "/home-product-1.png",
    //     img4: "/home-product-1.png",
    //   },
    //   stock: 10,
    //   featured: true,
    // },
    {
      id: 1,
      name: "cartera bahamas",
      description: "lorem ipsum",
      category_id: 11,
      colors: { color1: "#00000", color2: "#00000", color1: "#00000" },
      price: 75000,
      images: {
        img1: "/home-product-1.png",
        img2: "/home-product-1.png",
        img3: "/home-product-1.png",
        img4: "/home-product-1.png",
      },
      stock: 10,
      featured: true,
    },
    {
      id: 2,
      name: "cartera bahamas",
      description: "lorem ipsum",
      category_id: 8,
      colors: { color1: "#00000", color2: "#00000", color1: "#00000" },
      price: 75000,
      images: {
        img1: "/home-product-1.png",
        img2: "/home-product-1.png",
        img3: "/home-product-1.png",
        img4: "/home-product-1.png",
      },
      stock: 10,
      featured: true,
    },
    {
      id: 3,
      name: "cartera bahamas",
      description: "lorem ipsum",
      category_id: 9,
      colors: { color1: "#00000", color2: "#00000", color1: "#00000" },
      price: 75000,
      images: {
        img1: "/home-product-1.png",
        img2: "/home-product-1.png",
        img3: "/home-product-1.png",
        img4: "/home-product-1.png",
      },
      stock: 10,
      featured: true,
    },
    ,
    {
      id: 4,
      name: "cartera bahamas",
      description: "lorem ipsum",
      category_id: 10,
      colors: { color1: "#00000", color2: "#00000", color1: "#00000" },
      price: 75000,
      images: {
        img1: "/home-product-1.png",
        img2: "/home-product-1.png",
        img3: "/home-product-1.png",
        img4: "/home-product-1.png",
      },
      stock: 10,
      featured: true,
    },
    ,
    {
      id: 5,
      name: "cartera bahamas",
      description: "lorem ipsum",
      category_id: 12,
      colors: { color1: "#00000", color2: "#00000", color1: "#00000" },
      price: 75000,
      images: {
        img1: "/home-product-1.png",
        img2: "/home-product-1.png",
        img3: "/home-product-1.png",
        img4: "/home-product-1.png",
      },
      stock: 10,
      featured: true,
    },
    ,
    {
      id: 6,
      name: "cartera bahamas",
      description: "lorem ipsum",
      category_id: 13,
      colors: { color1: "#00000", color2: "#00000", color1: "#00000" },
      price: 75000,
      images: {
        img1: "/home-product-1.png",
        img2: "/home-product-1.png",
        img3: "/home-product-1.png",
        img4: "/home-product-1.png",
      },
      stock: 10,
      featured: true,
    },
    ,
  ];

  const [products, setProducts] = useState([]);

  function filterData(category) {
    const filteredData = ProductData.filter(
      (item) => item.category_id == category
    );
    console.log("hola mundo", filteredData);
    setProducts(filteredData);
  }

  useEffect(() => {
    //     (async () => {
    //       const API_URL =
    //         "https://c8-70-t-react-production.up.railway.app/products";
    //       const data = await fetch(API_URL).then((response) => response.json());
    //       setProducts(data);
    setProducts(ProductData);
    //       console.log(data);
    //     })();
    if (q1) {
      filterData(q1);
    }
  }, [setProducts]);

  return (
    // hay que poner keys por item
    <div className="row row-cols-2 row-cols-md-2 row-cols-lg-3 g-2">
      {/* <div className="d-flex flex-column row-cols-2 row-cols-lg-3"> */}
      {products.map((item) => (
        <ProductCard
          key={item.id}
          name={item.name}
          image={item.image}
          price={item.price}
          path={`/Productos/${item.id}`}
          // etiqueta={item.etiqueta}
        ></ProductCard>
      ))}
    </div>
  );
}
