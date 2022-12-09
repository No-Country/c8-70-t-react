import { React, useEffect, useState, useContext } from "react";
import CategoryCard from "./CategoryCard";
import { ProductContext } from "../context/ProductContext";

export default function CategoryList() {
  const { categoryList } = useContext(ProductContext);
  // console.log(categoryList);
  return (
    <>
      <div className="row row-cols-2 row-cols-md-3 row-cols-sm-2 g-1">
        {categoryList &&
          categoryList?.map((item) => (
            <CategoryCard
              key={item.id}
              name={item.name}
              image={item.thumbnail}
              link={`/Productos?categoryId=${item.id}&categoryName=${item.name}`}
            ></CategoryCard>
          ))}
      </div>
    </>
  );
}
