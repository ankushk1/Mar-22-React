import React, { useCallback, useState } from "react";
import { useEffect } from "react";
const set = new Set();
const UseCallbackHook = () => {
  const [num, setNum] = useState(1);
  const [count, setCount] = useState(1);

  const onIncrementCount = () => {
    setCount(count + 1);
  };

  const onIncrementNumber = useCallback((val) => {
    setNum(num + val);
  }, [num]);

  set.add(onIncrementCount);
  // console.log(set);
  useEffect(() => {
    console.log("useEffect called");
  }, [onIncrementNumber]);

  return (
    <div>
      <div>
        <h3>Count - {count}</h3>
        <h3>Number = {num} </h3>
      </div>

      <button
        className="btn btn-primary me-3"
        onClick={() => onIncrementCount()}
      >
        Increment Count
      </button>
      <button className="btn btn-secondary" onClick={() => onIncrementNumber(5)}>
        Increment Number
      </button>
    </div>
  );
};

export default UseCallbackHook;
