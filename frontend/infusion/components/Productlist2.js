// Import Swiper React components
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRouter } from "next/router";
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

// Import Swiper styles

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { ProductData } from "./ProductList";

export default function Productlist2(props) {
  const { products, filterProductByCategory, loading } =
    useContext(ProductContext);
  console.log(products);

  const ruta = useRouter();
  const q1 = ruta.query.categoryId;
  const q2 = ruta.query.categoryName;
  console.log("id", q1, "name", q2);

  // const [products, setProducts] = useState([]);

  // function filterData(category) {
  //   const filteredData = ProductData.filter(
  //     (item) => item.category_id == category
  //   );
  //   console.log("hola mundo", filteredData);
  //   setProducts(filteredData);
  // }

  // useEffect(() => {
  //   (async () => {
  //     const API_URL =
  //       "https://c8-70-t-react-production.up.railway.app/products?filter=%7B%0A%20%20%22offset%22%3A%206%2C%0A%20%20%22fields%22%3A%20%7B%0A%20%20%20%20%22id%22%3A%20true%2C%0A%20%20%20%20%22name%22%3A%20true%2C%0A%20%20%20%20%22description%22%3A%20true%2C%0A%20%20%20%20%22user_id%22%3A%20true%2C%0A%20%20%20%20%22category_id%22%3A%20true%2C%0A%20%20%20%20%22colors%22%3A%20true%2C%0A%20%20%20%20%22price%22%3A%20true%2C%0A%20%20%20%20%22images%22%3A%20true%2C%0A%20%20%20%20%22stock%22%3A%20true%2C%0A%20%20%20%20%22label%22%3A%20true%2C%0A%20%20%20%20%22featured%22%3A%20true%2C%0A%20%20%20%20%22created%22%3A%20true%2C%0A%20%20%20%20%22modified%22%3A%20true%0A%20%20%7D%0A%7D";
  //     const data = await fetch(API_URL).then((response) => response.json());
  //     setProducts(data);
  //     setProducts(ProductData);
  //           console.log(data);
  //   })();
  //   if (q1) {
  //     filterData(q1);
  //   }
  // }, [setProducts]);

  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={30}
      slidesPerGroup={3}
      loop={true}
      loopFillGroupWithBlank={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className=""
    >
      {loading == false ? (
        <div>
          {products && products?.map((oneProduct) => (
            <>
              <SwiperSlide key={oneProduct.id} className="">
                <>
                  {/* className="row row-cols-2 row-cols-md-2 row-cols-lg-3" */}
                  {/* <div className="d-flex flex-column row-cols-2 row-cols-lg-3"> */}

                  <ProductCard
                    key={oneProduct.id}
                    name={oneProduct.name}
                    image={oneProduct.images}
                    price={oneProduct.price}
                    path={`/Productos/${oneProduct.id}`}
                    // etiqueta={item.etiqueta}
                  ></ProductCard>
                </>
              </SwiperSlide>
            </>
          ))}
        </div>
      ) : (
        <div> cargando ...</div>
      )}
    </Swiper>
  );
}
