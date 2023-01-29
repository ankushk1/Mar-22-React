import React, { useState } from "react";
import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Spinner from 'react-bootstrap/Spinner';


const ApiComp = () => {
  const [apiData, setApiData] = useState([]);

  const fetchData = async () => {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    setApiData(data.products);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="">
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
          apiData.map((product) => (
            <div className="my-3">
              <Card style={{ width: "18rem", height: "30rem" }}>
                <Card.Img variant="top" src={product?.thumbnail} height="180" />
                <Card.Body>
                  <Card.Title>
                    {product?.title + " " + product?.brand}
                  </Card.Title>
                  <Card.Text>
                    {product?.description.slice(0, 60) + "..."}
                  </Card.Text>
                  <Card.Text>
                    <b className="fs-5">{product?.category}</b>
                  </Card.Text>
                  <Card.Text>${product?.price}</Card.Text>
                  <Button variant="outline-primary">Buy Now</Button>
                </Card.Body>
              </Card>{" "}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ApiComp;
