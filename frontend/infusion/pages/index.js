import styles from "../styles/Home.module.css";
import Link from "next/link";
import Title from "../components/Title";
import CategoryList from "../components/CategoryList";
import ProductList from "../components/ProductList";
import LayoutMargin from "../components/LayoutMargin";

export default function Home() {
  return (
    <>
      <Title title="Nuestros productos son elaborados artesanalmente" />
      {/* <div className="mx-5 px-5"> */}
      <LayoutMargin>
        <div className="card mb-3 border-0">
          <div className=" d-flex flex-column flex-lg-row justify-content-center align-content-center">
            <div className="col-lg-6 row text-center">
              <div className="card-body m-5 ps-5 pe-5 text-wrap">
                <h5 className="card-title display-6 text-uppercase fw-normal mb-4">
                  Lorem ipsum
                </h5>
                <p className="card-text fs-4 fw-lighter">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                  saepe, illum exercitationem temporibus nesciunt adipisci quia
                  ullam sequi nam necessitatibus consectetur explicabo quaerat
                  quas dolorem similique ad cum aspernatur repellat.
                </p>
              </div>
            </div>
            <div className={`${styles.img} col-6 col-lg-5 my-auto mx-auto`}>
              <img
                className="img-fluid mx-auto"
                src="/image-home-2.svg"
                alt="..."
                width={1000}
                height={1000}
              ></img>
            </div>
          </div>
        </div>
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
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
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
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
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
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
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
      {/* </div> */}
    </>
  );
}
