import React, { useEffect, useState } from "react";
import "./itemCount.css";

export default function ItemCount({
  stock,
  defaultValue = 1,
  onAdd = () => {},
}) {
  const [count, setCount] = useState(defaultValue);
  const increment = () => {
    if (count < stock) {
      setCount(count + 1);
    } else {
      setCount(count);
    }
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  useEffect(() => {
    onAdd(count);
  }, [count, onAdd]);

  return (
    <>
      <div className="container-itemCount">
        <div className="container-buttons">
          <button className="btn-count" onClick={decrement}>
            <i className="bi bi-dash-square"></i>
          </button>
          <div className="quantity">{count}</div>
          <button className="btn-count" onClick={increment}>
            <i className="bi bi-plus-square"></i>
          </button>
        </div>
        <div className="container-buttons"></div>
      </div>
    </>
  );
}
