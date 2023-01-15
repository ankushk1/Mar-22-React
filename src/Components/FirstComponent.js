import React from "react";
import SecondComp from "./secondComp";

const variable = [1,2,3,4,5,6];

const obj = {
  name:"React js",
  version: 18.0
}

const FirstComponent = () => {
  return <div>

    {variable.join(", ")}
    {obj.name}
    {obj.version}

  </div>;
};

export default FirstComponent;
