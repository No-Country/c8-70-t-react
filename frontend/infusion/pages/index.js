import styles from "../styles/Home.module.css";
import Link from "next/link";
import Title from "../components/Title";
import CategoryList from "../components/CategoryList";
import ProductList from "../components/ProductList";
import LayoutMargin from "../components/LayoutMargin";
import Slider from "../components/Slider";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const ruta = router.pathname;
  console.log(ruta);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      const API_URL =
        "https://c8-70-t-react-production.up.railway.app/products";
      const data = await fetch(API_URL).then((response) => response.json());
      setProducts(data);
      console.log(data);
    })();
  }, []);
  return (
    <>
      <div className="my-5 py-5">
        {/* <Title title="Nuestros productos son elaborados artesanalmente" /> */}
        {/* <div className="mx-5 px-5"> */}
        <Slider />
        <LayoutMargin>
          <br />
          <Title
            title="Categorias"
            subtitle="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
          />
          <br />
          <CategoryList />
          <br />
          <div className="row row-cols-1 row-cols-lg-3 row-cols-sm-1 mt-4 g-4">
            <div className="col mt-5">
              <div className="card border-0">
                <button className={`${styles.icon + " " + styles.artesanal}`}>
                  {/* <i className={`${styles.n} bi bi-cart-fill`}></i> */}
                  <img src="/handmade.svg" alt="handmade"></img>
                </button>
                <div className="card-body p-5">
                  <h5 className="card-title text-uppercase">
                    Productos Artesanales
                  </h5>
                  <p className="card-text">
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </p>
                </div>
              </div>
            </div>
            <div className="col mt-5">
              <div className="card border-0">
                <button className={`${styles.icon + " " + styles.gratis}`}>
                  {/* <i className={` bi bi-cart-fill`}></i> */}
                  <img src="/envios.svg" alt="envios"></img>
                </button>
                <div className="card-body p-5">
                  <h5 className="card-title text-uppercase">Envios Gratis</h5>
                  <p className="card-text">
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </p>
                </div>
              </div>
            </div>
            <div className="col mt-5">
              <div className="card border-0">
                <button className={`${styles.icon + " " + styles.seguro}`}>
                  {/* <i className={` bi bi-cart-fill`}></i> */}
                  <img src="/seguro.svg" alt="seguro"></img>
                </button>
                <div className="card-body p-5">
                  <h5 className="card-title text-uppercase">Sitio Seguro</h5>
                  <p className="card-text">
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <br />
          <Title
            title="Los mas populares"
            subtitle="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
          />
          <br />
          <br />
          <ProductList />
          <div className="d-flex justify-content-center">
            <div className="mt-5 mb-5 justify-content-center btn btn-secondary bg-white w-25">
              <Link
                href="/About"
                className="text-decoration-none fs-4 border-dark border-1 text-dark m-2 m-auto"
              >
                {/* {" "} */}
                Ver mas
              </Link>
            </div>
          </div>
        </LayoutMargin>
      </div>
      {/* </div> */}
    </>
  );
}
