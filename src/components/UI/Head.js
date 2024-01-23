import React, { useContext } from "react";
import "./Head.css";
import ContextProvider from "../../state/contextProvier";

const Header = (props) => {
  const context = useContext(ContextProvider);
  return (
    <div className="headerTop">
      <div onClick={props.onClose}>
        Cart <span>{context.items.length}</span>
      </div>
    </div>
  );
};

export default Header;
