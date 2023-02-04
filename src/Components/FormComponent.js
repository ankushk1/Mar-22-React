import React from "react";
import { useState } from "react";

const FormComponent = () => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    password: ""
  });

  // const onChnageHandler = (event, key) => {
  //   setUserData({ ...userData, [key]: event.target.value });
  // };

  const onChnageHandler = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  return (
    <div className="mt-4">
      <form action="" className="d-flex flex-column align-items-center">
        <input
          className="form-control w-50 my-2"
          type="text"
          placeholder="firstName"
          value={userData.firstName}
          name="firstName"
          onChange={(event) => onChnageHandler(event, "firstName")}
        />
        <input
          className="form-control w-50 my-2"
          type="text"
          placeholder="lastName"
          value={userData.lastName}
          name="lastName"
          onChange={(event) => onChnageHandler(event, "lastName")}
        />
        <input
          className="form-control w-50 my-2"
          type="password"
          placeholder="password"
          name="password"
          value={userData.password}
          onChange={(event) => onChnageHandler(event, "password")}
        />
      </form>
    </div>
  );
};

export default FormComponent;
