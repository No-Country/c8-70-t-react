import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <br />
      <div className="card mb-3 border-0">
        <div className="row">
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
          <div className={`${styles.img} col-6`}>
            <img
              className="img-fluid ms-4"
              src="/image-home-2.svg"
              alt="..."
              width={1000}
              height={1000}
            ></img>
          </div>
        </div>
      </div>
      <br />
      <div className="mt-5 mb-5">
        <p className="card-text text-center fs-3 fw-lighter">
          {" "}
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.{" "}
        </p>
      </div>
      <br />
      <div className="row row-cols-1 row-cols-md-4 row-cols-sm-2  g-4">
        <div className="col">
          <div className="card border-0">
            <img src="/home-product-3.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-center text-uppercase">
                Mochilas
              </h5>
            </div>
          </div>
        </div>
        <div className="col">
          {/* Luego cambiar a Links todos los cards */}
          <Link href="/About" className=" text-decoration-none text-dark">
            <div className="card border-0">
              <img
                src="/home-product-1.png"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title text-center text-uppercase">
                  Carteras
                </h5>
              </div>
            </div>
          </Link>
        </div>

        <div className="col">
          <div className="card border-0">
            <img src="/home-product-2.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-center text-uppercase">
                Billeteras
              </h5>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card border-0">
            <img src="/home-product-3.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-center text-uppercase">
                Monederos
              </h5>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col">
          <div class="card border-0">
            <div class="card-body p-5">
              <h5 class="card-title text-uppercase">Productos Artesanales</h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card border-0">
            <div class="card-body p-5">
              <h5 class="card-title text-uppercase">Envios Gratis</h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card border-0">
            <div class="card-body p-5">
              <h5 class="card-title text-uppercase">Sitio Seguro</h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="mt-5 mb-5">
        <h1 className="text-center text-uppercase">Los mas populares</h1>
        <p className="card-text text-center fs-3 fw-lighter">
          {" "}
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.{" "}
        </p>
      </div>
      <br />
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col">
          <div class="card h-100 border-0">
            <img src="/home-product-4.png" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title text-uppercase">Cartera bahamas</h5>
              <p class="card-text text-uppercase">$75.0000 cop</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100 border-0">
            <img src="/home-product-4.png" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title text-uppercase">Cartera bahamas</h5>
              <p class="card-text text-uppercase">$75.0000 cop</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100 border-0">
            <img src="/home-product-4.png" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title text-uppercase">Cartera bahamas</h5>
              <p class="card-text text-uppercase">$75.0000 cop</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100 border-0">
            <img src="/home-product-4.png" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title text-uppercase">Cartera bahamas</h5>
              <p class="card-text text-uppercase">$75.0000 cop</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100 border-0">
            <img src="/home-product-4.png" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title text-uppercase">Cartera bahamas</h5>
              <p class="card-text text-uppercase">$75.0000 cop</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100 border-0">
            <img src="/home-product-4.png" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title text-uppercase">Cartera bahamas</h5>
              <p class="card-text text-uppercase">$75.0000 cop</p>
            </div>
          </div>
        </div>
      </div>
      <br />
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
