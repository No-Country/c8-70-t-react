import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
// import "bootstrap/dist/js/bootstrap";

import Layout from "../components/Layout";
import { useEffect } from "react";
import { CartFunction } from "../context/CartContext";
import { ProductFunction } from "../context/ProductContext";
import { FormFunction } from "../context/FormContext";

// import dynamic from "next/dynamic";

// const JsBoostrap = dynamic(
//   () => {
//     return import("../components/Scroll");
//   },
//   { ssr: false }
// );

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <>
      <ProductFunction>
        <FormFunction>
          <CartFunction>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </CartFunction>
        </FormFunction>
      </ProductFunction>
    </>
  );
}

export default MyApp;
