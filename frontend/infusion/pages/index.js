import styles from "../styles/Home.module.css";
import Link from "next/link";
import ProductCard from "../components/ProductCard";
import CategoryCard from "../components/CategoryCard";

const CategoryList = [
  {
    category: 'Carteras',
    link:'/Productos',
    image:"/home-product-1.png"
  },
  {
    category: 'Mochilas',
    link:'/Productos',
    image:"/home-product-3.png"
  },
  {
    category: 'Manos Libres',
    link:'/Productos',
    image:"/home-product-2.png"
  },
  {
    category: 'Bandoleras',
    link:'/Productos',
    image:"/home-product-2.png"
  },
  {
    category: 'Billeteras',
    link:'/Productos',
    image:"/home-product-2.png"
  },
  {
    category: 'Monederos',
    link:'/Productos',
    image:"/home-product-2.png"
  }
]

export default function Home() {
  return (
    <>
      <br />
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
      <div className="mt-5 mb-5">
        <p className="card-text text-center fs-3 fw-lighter">
          {" "}
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.{" "}
        </p>
      </div>
      <br />
      <div className="row row-cols-1 row-cols-md-3 row-cols-sm-2  g-4">
        {CategoryList.map((item) => <CategoryCard category={item.category} image={item.image} link={item.link}></CategoryCard>)}
      </div>
      <br />
      
      <br />
      <ProductCard className={'shadow-5'}></ProductCard>
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
