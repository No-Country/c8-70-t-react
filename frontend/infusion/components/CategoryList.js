import { React, useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";

export default function CategoryList() {
  const [categoryList, setcategoryList] = useState([]);

  useEffect(() => {
    (async () => {
      const API_URL =
        "https://c8-70-t-react-production.up.railway.app/categories";
      const data = await fetch(API_URL).then((response) => response.json());
      setcategoryList(data);

      // console.log(data);
    })();
  }, []);

  // const CategoryData = [
  //   {
  //     category: "Carteras",
  //     link: "/Productos",
  //     image: "/home-product-1.png",
  //   },
  //   {
  //     category: "Mochilas",
  //     link: "/Productos",
  //     image: "/home-product-3.png",
  //   },
  //   {
  //     category: "Manos Libres",
  //     link: "/Productos",
  //     image: "/home-product-2.png",
  //   },
  //   {
  //     category: "Bandoleras",
  //     link: "/Productos",
  //     image: "/home-product-2.png",
  //   },
  //   {
  //     category: "Billeteras",
  //     link: "/Productos",
  //     image: "/home-product-2.png",
  //   },
  //   {
  //     category: "Monederos",
  //     link: "/Productos",
  //     image: "/home-product-2.png",
  //   },
  // ];
  return (
    <div className="row row-cols-2 row-cols-md-3 row-cols-sm-2 g-1">
      {categoryList.map((item) => (
        <CategoryCard
          key={item.id}
          name={item.name}
          image={"/home-product-3.png"}
          link={`/Productos?categoryId=${item.id}&categoryName=${item.name}`}
        ></CategoryCard>
      ))}
    </div>
  );
}
