import React, { useState } from "react";
import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Spinner from 'react-bootstrap/Spinner';
import Items from "./Items";


const ApiComp = () => {
  const [filter, setFilter] = useState("products")
  const [apiData, setApiData] = useState([]);

  const fetchData = async () => {
    const res = await fetch(`https://dummyjson.com/${filter}`);
    const data = await res.json();
    setApiData(filter === "products" ? data.products : data.users);
  };

  console.log(apiData)
  useEffect(() => {
    setApiData([])
    fetchData();
  }, [filter]);

  return (
    <div className="">
     <div className="d-flex justify-content-center">
     <Button variant="secondary me-5" onClick={() => setFilter("products")}>Products</Button>
      <Button variant="warning" onClick={() => setFilter("users")}>Users</Button>
     </div>
      <div className="fs-2">Products</div>
      <div className="mt-3 d-flex flex-wrap justify-content-around ">
        {apiData.length === 0 ? (
          <div className="d-flex justify-content-center">
            <Spinner animation="grow" variant="primary" />
            <Spinner animation="grow" variant="secondary" />
            <Spinner animation="grow" variant="success" />
            <Spinner animation="grow" variant="danger" />
            <Spinner animation="grow" variant="warning" />
          </div>
        ) : (
          apiData.map((elem, index) => (
            <div className="my-3" key={index}>
              <Items elem={elem}/>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ApiComp;
