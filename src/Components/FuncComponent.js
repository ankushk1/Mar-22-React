import React, { useState } from "react";

const FuncComponent = () => {
  const [number, setNumber] = useState(0);
  const [name, setName] = useState("Aman");

  function increment() {}

  const inc = function () {};

  const increaseNumber = (incrementer) => {
    console.log("increaseNumber called and previous state is: ", number);
    setNumber((prevState) => {
      console.log(prevState); //0
      return prevState + incrementer;
    });
    setNumber((prevState) => {
      console.log(prevState); //2
      return prevState + incrementer;
    });
    console.log("State is now changed");
  };

  const decreaseNumber = (decrementer) => {
    console.log("decreaseNumber called and previous state is: ", number);
    setNumber((prevState) => {
      console.log(prevState);
      return prevState - decrementer;
    });
    setNumber((prevState) => {
      console.log(prevState);
      return prevState - decrementer;
    });
    console.log("State is now changed");
  };

  return (
    <div>
      {console.log("render")}
      FuncComponent <br />
      <button onClick={() => increaseNumber(2)}>Inc</button>
      <button disabled={number <= 0} onClick={() => decreaseNumber(1)}>
        Dec
      </button>
      <h3>{number}</h3>
      <div>
        <h3>{name}</h3>
        <button onClick={() => setName("Aman Sharma")}>Change Name</button>
      </div>
    </div>
  );
};

export default FuncComponent;
