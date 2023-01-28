import React, { useState } from "react";
import FuncComponent from './FuncComponent';
// const PropComp = ({name, age, hobbies},) => {
const PropComp = (props) => {
  console.log(props);
  const { name, age, hobbies, children, setDataFromChild } = props;

  const [userAge, setuserAge] = useState(age);

  return (
    <div>
      PropComp
      <h2>{userAge}</h2>
      <h3>{children}</h3>
      <button
        onClick={() => 
          setDataFromChild("Data From child " + Math.floor(Math.random() * 100))}
      >
        Update
      </button>

      <FuncComponent name={name}/>
    </div>
  );
};

export default PropComp;
