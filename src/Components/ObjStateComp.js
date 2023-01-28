import React from "react";
import { useState } from "react";

const ObjStateComp = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: ""
  });

  return (
    <div>
      <label htmlFor="">Name</label>
      <input
        type="text"
        placeholder="Name"
        value={userInfo.name}
        onChange={(event) =>
          setUserInfo((prevState) => ({
            ...prevState,
            name: event.target.value
          }))
        }
      />
      <br />
      <label htmlFor="">Email</label>
      <input
        type="text"
        placeholder="Email"
        value={userInfo.email}
        onChange={(event) =>
          setUserInfo({ ...userInfo, email: event.target.value })
        }
      />

      <div>Name - {userInfo.name}</div>
      <div>Email - {userInfo.email}</div>
    </div>
  );
};

export default ObjStateComp;
