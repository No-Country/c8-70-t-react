import React, { useState, useEffect } from "react";

const ProductContext = React.createContext();

const ProductFunction = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [loading2, setLoading2] = useState(true);
  const [products, setProducts] = useState([]);
  const [categoryList, setcategoryList] = useState([]);
  const [productsByCategory, seProductByCategory] = useState([]);
  const [oneProduct, setOneProduct] = useState({});

  useEffect(() => {
    (async () => {
      const API_URL =
        "https://c8-70-t-react-production.up.railway.app/products?filter=%7B%0A%20%20%22offset%22%3A%206%2C%0A%20%20%22fields%22%3A%20%7B%0A%20%20%20%20%22id%22%3A%20true%2C%0A%20%20%20%20%22name%22%3A%20true%2C%0A%20%20%20%20%22description%22%3A%20true%2C%0A%20%20%20%20%22user_id%22%3A%20true%2C%0A%20%20%20%20%22category_id%22%3A%20true%2C%0A%20%20%20%20%22colors%22%3A%20true%2C%0A%20%20%20%20%22price%22%3A%20true%2C%0A%20%20%20%20%22images%22%3A%20true%2C%0A%20%20%20%20%22stock%22%3A%20true%2C%0A%20%20%20%20%22label%22%3A%20true%2C%0A%20%20%20%20%22featured%22%3A%20true%2C%0A%20%20%20%20%22created%22%3A%20true%2C%0A%20%20%20%20%22modified%22%3A%20true%0A%20%20%7D%0A%7D";
      const data = await fetch(API_URL).then((response) => response.json());
      setProducts(data);
      setLoading(false);
    })();
  }, []);

  const filter = '{"fields": {"created": false,"modified": false}}';
  useEffect(() => {
    (async () => {
      const API_URL =
        "https://c8-70-t-react-production.up.railway.app/categories";
      const data = await fetch(API_URL).then((response) => response.json());
      setcategoryList(data);
      setLoading2(false);

      // console.log(data);
    })();
  }, []);

  function filterProductCategory(categoryId) {
    console.log("hola category", typeof categoryId);
    const filteredData = products.filter(
      (item) => item.category_id == parseInt(categoryId)
    );
    seProductByCategory(filteredData);
  }

  function filterOneProduct(productId) {
    const filtro = products.filter((item) => item.id == parseInt(productId));
    setOneProduct(filtro[0]);
  }

  //   const CategoryList = () => {};

  return (
    <ProductContext.Provider
      value={{
        products,
        categoryList,
        filterProductCategory,
        productsByCategory,
        filterOneProduct,
        oneProduct,
        loading,
        loading2,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export { ProductContext, ProductFunction };
