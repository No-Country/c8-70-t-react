import React, { useState, useEffect } from "react";
import CategoryList from "../components/CategoryList";
import { ProductData } from "../components/fakeData";
import { CategoryData } from "../components/fakeData";

const ProductContext = React.createContext();

const ProductFunction = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [loading2, setLoading2] = useState(true);
  const [products, setProducts] = useState([]);
  const [categoryList, setcategoryList] = useState([]);
  const [productsByCategory, seProductByCategory] = useState([]);
  const [oneProduct, setOneProduct] = useState({});
  const filter =
    '?filter={"offset": 12,"fields": {"created": false,"modified": false}}';

  useEffect(() => {
    const fetchData = async () => {
      const API_URL =
        "https://c8-70-t-react-production.up.railway.app/products";
      const data = await fetch(API_URL)
        .then((res) => res.json())
        // .then((res) => setData([res]))
        .catch((e) => console.error(e));
      setProducts(data);
      setLoading(false);
    }; 
    
    const timer = setTimeout(() => {
      fetchData();
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const fetchData2 = async () => {
      const API_URL =
         "https://c8-70-t-react-production.up.railway.app/categories";
      const data = await fetch(API_URL)
        .then((res) => res.json())
        // .then((res) => setData([res]))
        .catch((e) => console.error(e));
        setcategoryList(data);
        setLoading2(false);
    }; 

    const timer = setTimeout(() => {
      fetchData2();
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  // useEffect(() => {
  //   (async () => {
  //     const API_URL =
  //       "https://c8-70-t-react-production.up.railway.app/categories";
  //     const data = await fetch(API_URL).then((response) => response.json());
  //     setcategoryList(data);
  //     setLoading2(false);
  //   })();
  // }, []);

  function filterProductCategory(categoryId) {
    const filteredData = products.filter(
      (item) => item.category_id == parseInt(categoryId)
      );
      console.log("hola category", filteredData);
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
