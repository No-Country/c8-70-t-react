import Image from "next/image";
import React from "react";
import Link from "next/link";

export default function CategoryCard({category,link,image}) {
  return (
    <>
      
        {/* <div className="col">
          <div className="card border-0">
            <img src="/home-product-3.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-center text-uppercase">
                Mochilas
              </h5>
            </div>
          </div>
        </div> */}
        <div className="col">
          {/* Luego cambiar a Links todos los cards */}
          <Link href={link} className=" text-decoration-none text-dark">
            <div className="card border-0">
              <img
                src={image}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-titl text-center text-uppercase">
                  {category}
                </h5>
              </div>
            </div>
          </Link>
        </div>

        {/* <div className="col">
          <div className="card border-0">
            <img src="/home-product-2.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-center text-uppercase">
                Billeteras
              </h5>
            </div>
          </div>
        </div> */}
        {/* <div className="col">
          <div className="card border-0">
            <img src="/home-product-3.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-center text-uppercase">
                Monederos
              </h5>
            </div>
          </div>
        </div> */}
    </>
  );
}
