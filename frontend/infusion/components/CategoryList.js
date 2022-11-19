import React from "react";
import CategoryCard from "./CategoryCard";

export default function CategoryList() {
  const CategoryData = [
    {
      category: "Carteras",
      link: "/Productos",
      image: "/home-product-1.png",
    },
    {
      category: "Mochilas",
      link: "/Productos",
      image: "/home-product-3.png",
    },
    {
      category: "Manos Libres",
      link: "/Productos",
      image: "/home-product-2.png",
    },
    {
      category: "Bandoleras",
      link: "/Productos",
      image: "/home-product-2.png",
    },
    {
      category: "Billeteras",
      link: "/Productos",
      image: "/home-product-2.png",
    },
    {
      category: "Monederos",
      link: "/Productos",
      image: "/home-product-2.png",
    },
  ];
  return (
    <div className="row row-cols-1 row-cols-md-3 row-cols-sm-2  g-4">
      {CategoryData.map((item) => (
        <CategoryCard
          category={item.category}
          image={item.image}
          link={item.link}
        ></CategoryCard>
      ))}
    </div>
  );
}
