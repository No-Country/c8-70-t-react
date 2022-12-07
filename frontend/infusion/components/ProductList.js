import { loadGetInitialProps } from "next/dist/shared/lib/utils";
import { useRouter } from "next/router";
import React, { useState, useEffect, useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import ProductCard from "./ProductCard";

export default function ProductList({}) {
  const ruta = useRouter();
  const q1 = ruta.query.categoryId;
  const q2 = ruta.query.categoryName;
  const { productsByCategory, filterProductCategory, loading } =
    useContext(ProductContext);

  useEffect(() => {
    if (q1) {
      filterProductCategory(q1);
    }
  }, [q1]);

  return (
    <>
      {loading == false ? (
        <div className="row row-cols-2 row-cols-md-2 row-cols-lg-3">
          {productsByCategory.map((item) => (
            <ProductCard
              className="mx-2 my-2"
              key={item.id}
              name={item.name}
              image={item.images}
              price={item.price}
              path={`/Productos/${item.id}`}
            ></ProductCard>
          ))}
        </div>
      ) : (
        <div> cargando</div>
      )}
    </>
  );
}
