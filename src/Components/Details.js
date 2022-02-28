import React from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

function Details({ products }) {
  let { id } = useParams();
  const Navigate = useNavigate();

  return (
    <div>
      {products
        .filter((product) => product.id ==id)
        .map((product) => (
          <div>
            <Card.Title>{product.title}</Card.Title>
            <p> {product.description} </p>
            <Button onClick={() => Navigate("/contact")}> go Home</Button>
          </div>
        ))}
    </div>
  );
}

export default Details;
