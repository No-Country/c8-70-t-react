import React, { useContext } from "react";
import ProductCounter from "../components/ProductCounter";
// import styles from "../styles/CheckoutList.module.css";
import { CartContext } from "../context/CartContext";

export default function CheckoutList({ nombre, precio, image, detalle }) {
  const { cart, deleteItem } = useContext(CartContext);
  console.log(cart);

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
            {cart.map((item) => (
              <tr>
                <th scope="row">
                  <div className=" d-flex flex-column flex-md-row">
                    <img
                      src="/home-product-1.png"
                      width={100}
                      height={100}
                      alt="asd"
                    />
                    <div className="col ms-1">
                      <h5 className="text-start" style={{ fontSize: "18px" }}>
                        {item.name}
                      </h5>
                      <p className="" style={{ fontSize: "14px" }}>
                        {item.description}
                        <strong> Color</strong>: Negro{" "}
                      </p>
                    </div>
                  </div>
                </th>
                <td>$ {item.price}</td>
                <td>
                  <ProductCounter
                    scale={"scale(0.8)"}
                    quantity={item.quantity}
                  ></ProductCounter>
                </td>
                <td>$ {item.subTotal}</td>
                <td>
                  {/* <i
             className="bi bi-x fs-4 text-danger"
             style={{ cursor: "pointer" }}
           ></i> */}

                  <i
                    className="bi bi-trash-fill fs-5 text-danger"
                    style={{ cursor: "pointer" }}
                    onClick={() => deleteItem(item.id)}
                  ></i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
