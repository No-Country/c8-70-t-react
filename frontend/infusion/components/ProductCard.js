import Image from "next/image";
import React from "react";

export default function ProductCard() {
  return (
    <>
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
    </>
  );
}
