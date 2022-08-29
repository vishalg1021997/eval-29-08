import React, { createContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [Count, setCount] = React.useState(0);

  

  const handleCount = (val) => {
    setCount(Count + val);
  };
  return <CartContext.Provider value={{ Count, handleCount }}>
    {children}
    </CartContext.Provider>;
};
