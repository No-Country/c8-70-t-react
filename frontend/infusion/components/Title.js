import React from "react";

export default function Title({ title, subtitle }) {
  return (
    <div className="my-5">
      <h1 className="text-center text-uppercase">{title}</h1>
      {subtitle && (
        <p className="card-text text-center fs-3 fw-lighter">{subtitle}</p>
      )}
    </div>
  );
}
