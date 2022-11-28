import React from "react";
import ProductList from "../../components/ProductList";
import styles from "../../styles/ProductIndex.module.css";

export default function Productos() {
  return (
    <>
      <div>
        <div className="d-flex p-4 text-dark bg-white align-items-center">
          <p className="me-auto p-2 ms-5">Categoria/Mochilas</p>
          <p className=" me-2">Ordenar por:</p>
          <div className="dropdown d-flex me-5">
            <button
              className={`${styles.header} btn-lg bg-white text-dark h-100 w-100 mb-3 p-2 me-5`}
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <div className="d-flex">
                <div className="me-5 ms-3">Mayor a menor precio</div>
                <div>
                  <i className="bi bi-chevron-down ms-5 me-3"></i>
                </div>
              </div>
            </button>
            <ul className="dropdown-menu">
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
            </ul>
          </div>
        </div>
        <div className=" mx-5 px-5">
          <div className="mt-5 mb-5">
            <ProductList />
          </div>
        </div>
      </div>
    </>
  );
}
