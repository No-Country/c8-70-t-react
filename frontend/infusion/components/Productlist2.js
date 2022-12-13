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

export default function Productlist2(props) {
  const { products, filterProductByCategory, loading } =
    useContext(ProductContext);
  // console.log(products);

  const ruta = useRouter();
  const q1 = ruta.query.categoryId;
  const q2 = ruta.query.categoryName;
  // console.log("id", q1, "name", q2);

  return (
    <Swiper
      breakpoints={{
        // when window width is >= 640px
        540: {
          width: 640,
          slidesPerView: 1,
        },
        // when window width is >= 768px
        768: {
          width: 768,
          slidesPerView: 2,
        },
      }}
      slidesPerView={2}
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
          {products &&
            products?.map((oneProduct) => (
              <SwiperSlide key={oneProduct.id} className="">
                {/* className="row row-cols-2 row-cols-md-2 row-cols-lg-3" */}
                {/* <div className="d-flex flex-column row-cols-2 row-cols-lg-3"> */}
                <ProductCard
                  // key={oneProduct.id}
                  // testid={oneProduct.id}
                  name={oneProduct.name}
                  image={oneProduct.images}
                  price={oneProduct.price}
                  path={`/Productos/${oneProduct.id}`}
                  // etiqueta={item.etiqueta}
                ></ProductCard>
              </SwiperSlide>
            ))}
        </div>
      ) : (
        <div> cargando ...</div>
      )}
    </Swiper>
  );
}
