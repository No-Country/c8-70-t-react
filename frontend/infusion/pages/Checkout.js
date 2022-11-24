import Link from "next/link";
import React from "react";
import AddCartButton from "../components/AddCartButton";
import ProductCounter from "../components/ProductCounter";

export default function Checkout() {
  return (
    <div>
      <Link
        href="/Productos"
        className="d-flex text-dark bg-none text-decoration-none ms-4 ps-3"
      >
        <i className="bi bi-arrow-left-short fs-3"></i>
        <p className="pt-2"> Volver a inicio</p>{" "}
      </Link>

      {/* aqui inicia el componente steps */}
      {/* aqui inicia la lista de productos */}
      <div className="d-flex gap-3 flex-column flex-lg-row">
        <div className="col d-flex flex-column flex-sm-row mb-3 ms-2 ">
          <div
            className="p-4 bg-light col-12"
            style={{
              // minWidth: "660px",
              // maxWidth: "1960px",
              // width:'220%',
              minHeight: "360px",
              fontSize: "14px",
            }}
          >
            <div class="table-responsive table-striped">
              <table class="table align-middle">
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
                    <th>
                      <h5 className=""> Eliminar</h5>
                    </th>
                  </tr>
                </thead>
                <tbody class="table-group-divider">
                  <tr>
                    <th scope="row">
                      <div className=" d-flex flex-column flex-md-row">
                        <img src="/home-product-1.png" width={150}></img>
                        <div className="col-4 ">
                          <h5
                            className="text-start "
                            style={{ fontSize: "18px" }}
                          >
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
                    <td><ProductCounter scale={'scale(1)'} style={{position:'relative',left:'50px'}}></ProductCounter></td>
                    <td>$ 75000</td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <div className=" d-flex flex-column flex-md-row">
                        <img src="/home-product-1.png" width={150}></img>
                        <div className="col-4 ">
                          <h5
                            className="text-start "
                            style={{ fontSize: "18px" }}
                          >
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
                    <td><ProductCounter scale={'scale(1)'} style={{position:'relative',left:'50px'}}></ProductCounter></td>
                    <td>$ 75000</td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <div className=" d-flex flex-column flex-md-row">
                        <img src="/home-product-1.png" width={150}></img>
                        <div className="col-4 ">
                          <h5
                            className="text-start "
                            style={{ fontSize: "18px" }}
                          >
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
                    <td><ProductCounter scale={'scale(1)'} style={{position:'relative',left:'50px'}}></ProductCounter></td>
                    <td>$ 75000</td>
                  </tr>
                  {/* <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td colspan="2">Larry the Bird</td>
                    <td>@twitter</td>
                  </tr> */}
                </tbody>
              </table>
            </div>
                  {/* intento con flexbox */}
            {/* <div className="col">
              <div className="col-10 d-flex px-2 pb-2 gap-5 fw-bold flex-column flex-sm-row">
                <div className="col ">
                  <h5 className="" style={{ fontSize: "16px" }}>
                    {" "}
                    Producto
                  </h5>
                </div>
                <h5 className="" style={{ fontSize: "16px" }}>
                  {" "}
                  Precio Unitario
                </h5>
                <h5 className="" style={{ fontSize: "16px" }}>
                  {" "}
                  Cantidad
                </h5>
                <h5 className="" style={{ fontSize: "16px" }}>
                  {" "}
                  Subtotal
                </h5>
                <h5 className="" style={{ fontSize: "16px" }}>
                  {" "}
                  Editar
                </h5>
              </div>
            </div>
            <hr
              className="border border-secondary border-1 opacity-75 m-auto "
              style={{ maxWidth: "95%" }}
            />
            <div className="d-flex pt-3 ">
              <div className=" px-1">
                <img src="/home-product-1.png" width={100}></img>
              </div>
              <div className="d-flex gap-3 align-content-end">
                <div className="col-4 text-break " >
                  <h5 className="text-start " style={{ fontSize: "18px" }}>
                    Morral Bahamas
                  </h5>
                  <p className="" style={{ fontSize: "14px" }}>
                    Descripcion larga del bolso a mostrar
                    <strong> Color</strong>: Negro{" "}
                  </p>
                </div>
                <div className="col">
                <h5 className="text-start" style={{ fontSize: "18px" }}>
                  {" "}
                  $ 75.000
                </h5>
                </div>
                <ProductCounter scale={'scale(0.7)'}></ProductCounter>
                <h5 className="text-start" style={{ fontSize: "18px" }}>
                  {" "}
                  $ 75.000
                </h5>
                <div>
                  <input type={'checkbox'}style={{width:'50px',transform:'scale(1.5)'}}></input>
                </div>
              </div>
            </div> */}
          </div>
        </div>
        {/* aqui inicia resumen de la compra */}
        <div className="col col-md-auto d-flex flex-column flex-lg-row mb-3 mx-auto">
          <div
            className="p-4 bg-light h-75"
            style={{
              minWidth: "360px",
              maxWidth: "740px",
              // width: "700px",
              // width: "130%",
              minHeight: "360px",
              fontSize: "14px",
            }}
          >
            <div className="d-flex px-2 pb-3">
              <div className="col text-center">
                <h5 className="my-3 mx-3" style={{ fontSize: "18px" }}>
                  Resumen de la compra
                </h5>
              </div>
            </div>

            <div className="col">
              <div className="d-flex px-2 pb-2">
                <h5 className="me-auto" style={{ fontSize: "16px" }}>
                  {" "}
                  Subtotal
                </h5>
                <h5 className="" style={{ fontSize: "16px" }}>
                  {" "}
                  $ 75.000
                </h5>
              </div>
            </div>
            <hr
              className="border border-secondary border-1 opacity-75 m-auto"
              style={{ maxWidth: "95%" }}
            />
            <div className="d-flex px-2 pt-3">
              <h5 className=" me-auto" style={{ fontSize: "18px" }}>
                {" "}
                <strong>Total</strong>
              </h5>

              <h5 className="" style={{ fontSize: "18px" }}>
                {" "}
                <strong>$ 75.000</strong>
              </h5>
            </div>
            <div
              className="d-flex justify-content-around flex-column pt-5"
              style={{ minWidth: "300px" }}
            >
              <div className="m-auto mb-3 ">
                {/* al presionar este boton se guarda el estado de lista de cart */}
                <button
                  className="btn btn-info text-light px-5"
                  style={{
                    borderRadius: "10px !important",
                    height: "40px",
                    backgroundColor: "#00A5D0",
                  }}
                >
                  Avanzar con la compra
                </button>
              </div>
              <div className="m-auto mb-3 ">
                <button
                  className="btn btn-info text-info "
                  style={{
                    borderRadius: "10px !important",
                    height: "40px",
                    width: "260px",
                    // position:"relative",
                    backgroundColor: "transparent",
                  }}
                >
                  <Link
                    href="/Productos"
                    className="d-flex text-info text-decoration-none justify-content-center"
                    style={{
                      borderRadius: "10px !important",
                      // height: "40px",
                      // position:"absolute",
                      // top:"0px",
                      backgroundColor: "transparent",
                    }}
                  >
                    <i className="bi bi-arrow-left-short fs-3"></i>
                    <p className="pt-1 text-nowrap">
                      {" "}
                      Continuar viendo productos
                    </p>{" "}
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
