import Image from "next/image";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function CategoryCard({ category, link, image }) {
  const ruta = useRouter()
  console.log(ruta.query)
  return (
    <>
      <div className="card">
        <Link href={link} className=" text-decoration-none text-dark">
          <div className="card border-0">
            <img src={image} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-center text-uppercase">
                {category}
              </h5>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}
