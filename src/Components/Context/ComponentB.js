import React from "react";
import { useContext } from "react";
import { messageContext } from "../../App";
const ComponentB = () => {
  const message = useContext(messageContext)
  return (
    <div>
      ComponentB
      {/* <messageContext.Consumer>
        {(value) => <h1>{value}</h1>}
      </messageContext.Consumer> */}
      
      <h3>{message}</h3>
    </div>
  );
};

export default ComponentB;
