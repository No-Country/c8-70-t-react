import { useRouter } from "next/router";
import { React, useEffect, useState } from "react";
import LayoutMargin from "../../components/LayoutMargin";
import ProductList from "../../components/ProductList";
import styles from "../../styles/ProductIndex.module.css";

export default function Productos({ value }) {
  // const [products, setProducts] = useState([]);
  const ruta = useRouter();

  // useEffect(() => {
  //   (async () => {
  //     const API_URL =
  //       "https://c8-70-t-react-production.up.railway.app/products";
  //     const data = await fetch(API_URL).then((response) => response.json());
  //     setProducts(data);
       // console.log(data);
  //   })();
  // }, [setProducts]);
  // console.log(products.category);

  return (
    <>
      <div className="my-5 py-5">
        <div className="d-flex flex-column flex-md-row p-4 text-dark justify-content-between align-items-center ">
          {/* <div className="text-start me-5"> */}
          <div className="d-flex px-4 pt-3 ms-4">
            {/* <p className="ms-5">/Mochilas</p> */}
            <p className="">Categoria</p>
            <p className="fw-bolder">{"/" + ruta.query.categoryName}</p>
          </div>
          {/* </div> */}
          <div className="dropdown d-flex flex-column flex-sm-row align-items-center me-md-5">
            <p className="me-2">Ordenar por:</p>
            <button
              className={`${styles.header} btn-lg bg-white text-dark h-100 w-100 mb-3 p-2 border-dark`}
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <div className="d-flex ">
                <div className="me-5 ms-3">Mayor a menor precio</div>
                <div>
                  <i className="bi bi-chevron-down fw-bolder ms-5 me-3"></i>
                </div>
              </div>
            </button>
            <ul className="dropdown-menu border-dark">
              <li>
                <a className="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Mochilas
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-5">
          {/* quitar margenes en version movil */}
          <LayoutMargin>
            <ProductList category={ruta.query.category} />
          </LayoutMargin>
        </div>
      </div>
    </>
  );
}
