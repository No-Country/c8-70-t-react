import { React, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import ProductCounter from "../../components/ProductCounter";
import AddCartButton from "../../components/AddCartButton";
import LayoutMargin from "../../components/LayoutMargin";
import { ProductData } from "../../components/ProductList";

const Detail = () => {
  // const ProductData = {
  //   id: 1,
  //   name: "cartera bahamas",
  //   description: "lorem ipsum",
  //   category_id: 11,
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
  // };
  const route = useRouter();
  const filtro = ProductData.filter(
    (item) => item.id == parseInt(route.query.productId)
  );
  const selected = filtro[0];

  console.log("este es el selesccionado", selected);
  // const [selected, setSelected] = useState(null);
  const [count, setCount] = useState(0);

  const onAdd = (count) => {
    setCount(count);
  };

  return (
    //!arreglar los margenes
    <div className="my-5 py-5">
      <LayoutMargin>
        <div className="d-flex px-4 pt-3 ms-4">
          <p className="">Inicio</p>
          <p className="fw-bolder">/Productos</p>
        </div>
        <div className="mb-5 d-flex flex-column flex-lg-row ">
          <div className="d-flex col-lg-8 flex-column-reverse flex-xl-row ">
            <div className="row d-flex flex-row flex-xl-column ">
              <div className="p-2 " style={{ maxWidth: "150px" }}>
                <img
                  src="/home-product-1.png"
                  style={{ maxWidth: "150px" }}
                ></img>
              </div>
              <div className="p-2" style={{ maxWidth: "150px" }}>
                <img
                  src="/home-product-1.png"
                  style={{ maxWidth: "150px" }}
                ></img>
              </div>
              <div className="p-2" style={{ maxWidth: "150px" }}>
                <img
                  src="/home-product-1.png"
                  style={{ maxWidth: "150px" }}
                ></img>
              </div>
            </div>
            <div className="col row-cols-1 row-cols-sm-1 col-md-3 justify-content-center mx-auto w-100 me-3 ms-xl-5 flex-fill">
              {/* <img src="/home-product-1.png" className="img-fluid"></img> */}
              <Image
                // src={images.img1}
                src="/home-product-1.png"
                className="img-fluid mx-auto"
                alt="lalal"
                width={500}
                height={500}
              ></Image>
            </div>
          </div>
          <div className="col justify-content-center w-100 d-flex flex-column flex-md-row mt-3 mt-lg-0 align-items-lg-start align-items-sm-center ps-lg-4">
            <div
              className="p-2 bg-light"
              style={{
                minWidth: "320px",
                maxWidth: "560px",
                width: "100%",
                maxHeight: "260px",
                fontSize: "14px",
              }}
            >
              <div className="d-flex px-2">
                <div className="col">
                  <h5 className="my-3 mx-3" style={{ fontSize: "18px" }}>
                    {selected?.name}
                  </h5>
                </div>
                <div className="col">
                  <h5
                    className="text-end my-3 mx-3"
                    style={{ fontSize: "18px" }}
                  >
                    {" "}
                    $ {selected?.price}
                  </h5>
                </div>
              </div>
              <div className="m-auto" style={{ maxWidth: "300px" }}>
                <p className="text-break text-start fs-10 lh-4">
                  {selected?.description}
                </p>
              </div>
              <hr
                className="border border-secondary border-1 opacity-75 m-auto"
                style={{ maxWidth: "85%" }}
              />
              <div className="d-flex mt-3 mx-3">
                <p className=" px-2 fs-10" style={{ fontSize: "14px" }}>
                  <label htmlFor="choose-color">
                    <strong>Color</strong>: Negro{" "}
                  </label>
                  <input
                    type={"radio"}
                    style={{
                      accentColor: "black",
                      height: "24px",
                      width: "24px",
                    }}
                    name={"choose-color"}
                  />
                  <input
                    type={"radio"}
                    style={{
                      accentColor: "white",
                      height: "24px",
                      width: "24px",
                    }}
                    name={"choose-color"}
                  />
                </p>
              </div>
              <div
                className="d-flex justify-content-around"
                style={{ minWidth: "300px" }}
              >
                <ProductCounter onAdd={onAdd} />
                <AddCartButton count={count} productData={selected} />
              </div>
            </div>
          </div>
        </div>
      </LayoutMargin>
    </div>
  );
};

export default Detail;
