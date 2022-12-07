import React, { useState, useEffect } from "react";

const ProductContext = React.createContext();

const ProductFunction = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [loading2, setLoading2] = useState(true);
  const [products, setProducts] = useState([]);
  const [categoryList, setcategoryList] = useState([]);
  const [productsByCategory, seProductByCategory] = useState([]);
  const [oneProduct, setOneProduct] = useState({});
  const filter = '{"offset": 6,"fields": {"created": false,"modified": false}}';

  useEffect(() => {
    (async () => {
      const API_URL =
        "https://c8-70-t-react-production.up.railway.app/products?filter="+filter;
      const data = await fetch(API_URL).then((response) => response.json());
      setProducts(data);
      setLoading(false);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const API_URL =
        "https://c8-70-t-react-production.up.railway.app/categories";
      const data = await fetch(API_URL).then((response) => response.json());
      setcategoryList(data);
      setLoading2(false);
    })();
  }, []);

  function filterProductCategory(categoryId) {
    // console.log("hola category", typeof categoryId);
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
