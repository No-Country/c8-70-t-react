import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <div className="me-5 ms-5">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}
