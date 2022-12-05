import React, { useState } from "react";

const CartContext = React.createContext();

const CartFunction = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [units, setUnits] = useState(0);
  const [id, setId] = useState("");

  const totalCart2 = cart.map((item) => item.price * item.quantity);
  const totalCart = totalCart2.reduce((acc, red) => acc + red, 0);

  const addItem = (product) => {
    const isInCart = cart.find((item) => item.id === product.id);
    if (!isInCart) {
      console.log("esta en anadiendo un producto a la lista cart");
      setCart([
        ...cart,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          quantity: product.quantity,

          // subTotal: product.price * product.count,
          // total: product.count * product.price,
        },
      ]);
      setUnits(units + 1);
      setTotal(product.price);
    } else {
      console.log("esta en creando un nuevo cart");
      const newCart = cart.map((item) => {
        if (item.id === product.id) {
          item.quantity = product.quantity;
        }
        return item;
      });
      setCart(newCart);
    }
  };

  const deleteItem = (id) => {
    const remove = cart.filter((item) => item.id !== id);
    setCart(remove);
  };

  const cleanCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        units,
        total,
        addItem,
        deleteItem,
        id,
        setId,
        cleanCart,
        totalCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartFunction };
