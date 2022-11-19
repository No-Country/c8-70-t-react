import Image from "next/image";
import React from "react";

export default function ProductCard({ nombre, precio, image }) {
  return (
    <>
      <div class="col">
        <div class="card h-100 border-0">
          <img src={image} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title text-uppercase">{nombre}</h5>
            <p class="card-text text-uppercase">{precio}</p>
          </div>
        </div>
      </div>
      {/* <div class="col">
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
        </div> */}
    </>
  );
}
