import React from "react";
import { useNavigate , useParams} from "react-router-dom";

const Cartt = () => {
  const navigate = useNavigate();

  const params = useParams();
  console.log(params)

  return (
    <div>
      Cartt
      <button
        onClick={() => {
          navigate(-1, {
            state: "From Cart"
          });
        }}
      >
        Redirect
      </button>
    </div>
  );
};

export default Cartt;
