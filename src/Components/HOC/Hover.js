import React, { useState } from "react";
import withCounter from "./withCounter";

const Hover = ({count, onIncrementCount}) => {

  return (
    <div>
      <div>
        <h3 onMouseOver={() => onIncrementCount()}>Count - {count}</h3>
      </div>
    </div>
  );
};

export default withCounter(Hover);
