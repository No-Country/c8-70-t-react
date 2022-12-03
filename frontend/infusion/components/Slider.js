import Link from "next/link";
import React from "react";
import styles from "../styles/Slider.module.css";

const Slider = () => {
  return (
    <>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators mb-5 pb=5">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div>
              <img
                src="/image-home-1.svg"
                className="d-block w-100"
                alt="..."
              />

              <div
                className={`${styles.caption} carousel-caption d-none d-md-block text-start`}
              >
                <h2>Elaborados a mano</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                  doloribus minus earum quos? Ut itaque voluptate nam ex
                  accusamus earum quo quisquam, consequatur officiis explicabo,
                  velit accusantium sit rerum magni?
                </p>
                <Link href="">
                  <button>Conoce mas</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div>
              <img
                src="/image-home-1.svg"
                className="d-block w-100"
                alt="..."
              />
              <div class="carousel-caption d-none d-md-block">
                <h2>First slide label</h2>
                <p>
                  Some representative placeholder content for the first slide.
                </p>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Slider;
