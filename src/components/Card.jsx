import React from "react";
import { default as BootstrapCard } from "react-bootstrap/Card";

const Card = (props) => {
  return (
    <BootstrapCard className="text-center">
      <BootstrapCard.Img variant="top" src={props.url} />
      <BootstrapCard.Body>
        <BootstrapCard.Title>{props.title}</BootstrapCard.Title>
        <BootstrapCard.Text>{props.description}</BootstrapCard.Text>
      </BootstrapCard.Body>
    </BootstrapCard>
  );
};

export default Card;
