import React from "react";
import ProductCounter from "../components/ProductCounter";
// import styles from "../styles/CheckoutList.module.css";

export default function CheckoutList({ nombre, precio, image, detalle }) {
  return (
    <>
      <div className="table-responsive table-hover">
        <table className="table table-responsive table-hover align-middle">
          <thead>
            <tr>
              <th>
                <h5 className=""> Producto</h5>
              </th>
              <th>
                <h5 className=""> Precio Unitario</h5>
              </th>
              <th>
                <h5 className="text-center me-3"> Cantidad</h5>
              </th>
              <th>
                <h5 className=""> Subtotal</h5>
              </th>
              <th>{/* <h5 className=""> Eliminar</h5> */}</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            <tr>
              <th scope="row">
                <div className=" d-flex flex-column flex-md-row">
                  <img src="/home-product-1.png" width={100} height={100} />
                  <div className="col ms-1">
                    <h5 className="text-start" style={{ fontSize: "18px" }}>
                      Morral Bahamas
                    </h5>
                    <p className="" style={{ fontSize: "14px" }}>
                      Descripcion larga del bolso a mostrar
                      <strong> Color</strong>: Negro{" "}
                    </p>
                  </div>
                </div>
              </th>
              <td>$ 75000</td>
              <td>
                <ProductCounter scale={"scale(0.8)"}></ProductCounter>
              </td>
              <td>$ 75000</td>
              <td>
                <i
                  className="bi bi-x fs-4 text-danger"
                  style={{ cursor: "pointer" }}
                ></i>
              </td>
            </tr>
            <tr>
              <th scope="row">
                <div className=" d-flex flex-column flex-md-row">
                  <img src="/home-product-1.png" width={100} height={100}></img>
                  <div className="col ms-1">
                    <h5 className="text-start " style={{ fontSize: "18px" }}>
                      Morral Bahamas
                    </h5>
                    <p className="" style={{ fontSize: "14px" }}>
                      Descripcion larga del bolso a mostrar
                      <strong> Color</strong>: Negro{" "}
                    </p>
                  </div>
                </div>
              </th>
              <td>$ 75000</td>
              <td>
                <ProductCounter
                  scale={"scale(0.8)"}
                  style={{ position: "relative", left: "50px" }}
                ></ProductCounter>
              </td>
              <td>$ 75000</td>
              <td>
                <i
                  className="bi bi-x fs-4 text-danger"
                  style={{ cursor: "pointer" }}
                ></i>
              </td>
            </tr>
            <tr>
              <th scope="row">
                <div className=" d-flex flex-column flex-md-row">
                  <img src="/home-product-1.png" width={100} height={100}></img>
                  <div className="col ms-1">
                    <h5 className="text-start " style={{ fontSize: "18px" }}>
                      Morral Bahamas
                    </h5>
                    <p className="" style={{ fontSize: "14px" }}>
                      Descripcion larga del bolso a mostrar
                      <strong> Color</strong>: Negro{" "}
                    </p>
                  </div>
                </div>
              </th>
              <td>$ 75000</td>
              <td>
                <ProductCounter
                  scale={"scale(0.8)"}
                  style={{ position: "relative", left: "50px" }}
                ></ProductCounter>
              </td>
              <td>$ 75000</td>
              <td>
                <i
                  className="bi bi-x fs-4 text-danger"
                  style={{ cursor: "pointer" }}
                ></i>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
