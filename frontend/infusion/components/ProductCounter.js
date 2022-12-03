import React, { useEffect, useState } from "react";

export default function ProductCounter({ scale }) {
  const defaultValue = 1;
  const [count, setCount] = useState(defaultValue);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div
      className="btn-group btn-group-sm"
      style={{
        borderRadius: "10px !important",
        width: "129px",
        height: "40px",
        borderColor: "#00A5D0 !important",
        transform: `${scale}`,
      }}
      role="group"
      aria-label="Basic example"
    >
      <button
        type="button"
        className="btn btn-info text-light"
        style={{
          "border-top-left-radius": "10px !important",
          "border-bottom-left-radius": "10px !important",
          backgroundColor: "#00A5D0",
        }}
        onClick={decrement}
      >
        <div
          className="rounded-circle bg-light text-info fs-6 mx-auto"
          style={{ width: "24px", height: "24px" }}
        >
          <strong> - </strong>
        </div>
      </button>
      <button
        type="button"
        className="btn btn-info text-light"
        style={{ fontSize: "18px", backgroundColor: "#00A5D0" }}
      >
        {count}
      </button>
      <button
        type="button"
        className="btn btn-info text-light"
        style={{
          "border-top-right-radius": "10px !important",
          "border-bottom-right-radius": "10px !important",
          backgroundColor: "#00A5D0",
        }}
        onClick={increment}
      >
        <div
          className="rounded-circle bg-light text-info fs-6 mx-auto"
          style={{ width: "24px", height: "24px", fontSize: "60px" }}
        >
          <strong> + </strong>
        </div>
      </button>
    </div>
  );
}
