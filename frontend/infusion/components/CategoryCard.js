import Image from "next/image";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function CategoryCard({ name, link, image }) {
  const ruta = useRouter();
  // console.log(ruta.query);
  return (
    <div className="col g-3">
      <div className="card">
        <Link href={link} className=" text-decoration-none text-dark">
          <div className="card border-0">
            {/* <div style={{minHeight:'300px'}}> */}
            <Image src={image} className="card-img-top" width={80} height={350} alt="..." />
            {/* </div> */}
            <div className="card-body">
              <h5 className="card-title text-center text-uppercase">{name}</h5>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
