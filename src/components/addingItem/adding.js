import { useState } from "react";
import Input from "../UI/input";
import "./adding.css";

const Add = (props) => {
  const [inputObj, setInputObj] = useState({});
  function OnInputChange(keyVal, value) {
    let obj = { ...inputObj };
    obj[keyVal] = value;
    setInputObj(obj);
    console.log(inputObj);
  }

  return (
    <div className="addingTop">
      <div>
        <Input
          label={"Shoe Name :- "}
          input={{
            type: "text",
            className: "BigInput",
            onInput: (e) => OnInputChange("name", e.target.value),
          }}
        ></Input>
        <Input
          label={"Description :- "}
          input={{
            type: "text",
            className: "BigInput",
            onInput: (e) => OnInputChange("description", e.target.value),
          }}
        ></Input>
        <Input
          label={"Price :- "}
          input={{
            type: "text",
            className: "BigInput",
            onInput: (e) => OnInputChange("price", e.target.value),
          }}
        ></Input>
      </div>
      <div>
        <Input
          label={"Size S :- "}
          input={{
            type: "number",
            className: "ShortInput",
            onInput: (e) => OnInputChange("s", e.target.value),
          }}
        ></Input>
        <Input
          label={"Size M :- "}
          input={{
            type: "number",
            className: "ShortInput",
            onInput: (e) => OnInputChange("m", e.target.value),
          }}
        ></Input>
        <Input
          label={"Size L :- "}
          input={{
            type: "number",
            className: "ShortInput",
            onInput: (e) => OnInputChange("l", e.target.value),
          }}
        ></Input>
      </div>
      <button onClick={() => props.OnClickFunction(inputObj)}>
        Add Product
      </button>
    </div>
  );
};

export default Add;
