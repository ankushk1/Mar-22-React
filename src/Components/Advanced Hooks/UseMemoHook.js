import React from "react";
import { useMemo } from "react";
import { useState } from "react";

const slowFunc = (n) => {
  for (let i = 0; i < 1000000000; i++) {}
  return n * 2;
};

const UseMemoHook = () => {
  const [num, setNum] = useState(1);
  const [count, setCount] = useState(0);

  // const multiplicationVal  = slowFunc(num);
  const multiplicationVal = useMemo(() => {
    return slowFunc(num);
  }, [num])

  return (
    <div>
      <div>
        <h3>Count - {count}</h3>
        <h3>{num} * 2 = {multiplicationVal} </h3>
      </div>

      <button className="btn btn-primary me-3" onClick={() => setCount(count + 1)}>
        Increment Count
      </button>
      <button className="btn btn-secondary" onClick={() => setNum(num + 1)}>
        Increment Number
      </button>
    </div>
  );
};

export default UseMemoHook;
