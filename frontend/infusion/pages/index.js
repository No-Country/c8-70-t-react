import styles from "../styles/Home.module.css";
import Link from "next/link";
import ProductCard from "../components/ProductCard";
import Title from "../components/Title";
import CategoryList from "../components/CategoryList";
import ProductList from "../components/ProductList";

export default function Home() {
  return (
    <>
      <Title title="Nuestros productos son elaborados artesanalmente" />
      <div className="card mb-3 border-0">
        <div className="row d-flex flex-column flex-md-row justify-content-md-center justify-content-center">
          <div className="col-6 row justify-content-center align-items-center">
            <div className="card-body m-5 ps-5 pe-5">
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
          <div className={`${styles.img} col-10 col-lg-5 my-auto`}>
            <img
              className="img-fluid ms-auto"
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
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <div className="card border-0">
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
        <div className="col">
          <div className="card border-0">
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
        <div className="col">
          <div className="card border-0">
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
      <div className="mt-5 mb-5 d-flex justify-content-center border-secondary bg-white">
        <Link
          href="/About"
          className="text-decoration-none fs-3 border-dark border-1 text-dark"
        >
          {" "}
          Ver mas
        </Link>
      </div>
    </>
  );
}
