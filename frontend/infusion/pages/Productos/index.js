import { useRouter } from "next/router";
import { React, useEffect, useState } from "react";
import LayoutMargin from "../../components/LayoutMargin";
import ProductList from "../../components/ProductList";
import styles from "../../styles/ProductIndex.module.css";

export default function Productos({ value }) {
  const ruta = useRouter();

  return (
    <>
      <div className="my-5 py-5">
        <div className="d-flex flex-column flex-md-row p-4 text-dark justify-content-between align-items-center ">
          {/* <div className="text-start me-5"> */}
          <div className="d-flex px-4 pt-3 ms-4">
            {/* <p className="ms-5">/Mochilas</p> */}
            {ruta.query.categoryName ? (
              <>
                <p className="">Categoria</p>
                <p className="fw-bolder">{"/" + ruta.query.categoryName}</p>
              </>
            ) : (
              <p className="">Todo</p>
            )}
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
                  ACCESORIOS
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  BOLSO DE MANO
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  BANDOLERA - MANOS LIBRES
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  MOCHILAS
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  RIÑONERAS
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  BOLSO TULA
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
