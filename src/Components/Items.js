import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Items = ({ elem }) => {
  return (
    <div>
      <Card style={{ width: "18rem", height: "30rem" }}>
        <Card.Img
          variant="top"
          src={elem?.thumbnail ?? elem.image}
          height="180"
        />
        <Card.Body>
          <Card.Title>{elem?.title ?? elem?.firstName}</Card.Title>
          <Card.Title>{elem?.brand ?? elem?.lastName}</Card.Title>
          <Card.Text>
            {(elem?.description && elem?.description.slice(0, 60)) ??
              elem?.address.address + "..."}
          </Card.Text>
          <Card.Text>
            <b className="fs-5">{elem?.category ?? elem?.age}</b>
          </Card.Text>
          <Card.Text>{elem?.price ?? elem?.email}</Card.Text>
          <Button variant="outline-primary">Buy Now</Button>
        </Card.Body>
      </Card>{" "}
    </div>
  );
};

export default Items;
