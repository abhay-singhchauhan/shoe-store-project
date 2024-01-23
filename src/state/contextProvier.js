import React from "react";

const context = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
});

export default context;
