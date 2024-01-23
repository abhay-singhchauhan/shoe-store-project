import { Fragment } from "react";
import "./input.css";

const Input = (props) => {
  return (
    <Fragment>
      <label>{props.label}</label>
      <input {...props.input}></input>
    </Fragment>
  );
};

export default Input;
