import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function LayoutMargin({ children }) {
  return (
    <>
      <div className="mx-sm-5 px-sm-5" >
        {children}
      </div>
    </>
  );
}
