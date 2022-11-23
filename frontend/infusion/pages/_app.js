import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
// import "bootstrap/dist/js/bootstrap";

import Layout from "../components/Layout";
import { useEffect } from "react";

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
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
