import React, { useState } from "react";
import withCounter from "./withCounter";

const Counter = ({name,count, onIncrementCount}) => {
 
console.log(name)
  return (
    <div>
      <div>
        <h3>Count - {count}</h3>
      </div>

      <button
        className="btn btn-primary me-3"
        onClick={() => onIncrementCount()}
      >
        Increment Count
      </button>
    </div>
  );
};

export default withCounter(Counter);


