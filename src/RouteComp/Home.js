import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  // V5 - history

  const redirect = () => {
    // We hit a api
    // we set a state and handle response
    // We want to redirect to another page
    navigate(2, {
      state: {
        user: "ABC",
        arr: [1, 2, 3, 4, 5]
      }
    });
  };
  return (
    <div>
      Home
      <div>
        <button className="btn btn-primary" onClick={redirect}>
          Redirect
        </button>
      </div>
    </div>
  );
};

export default Home;
