import Jumbotron from "react-bootstrap/Jumbotron";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import React from "react";
import { render } from "react-dom";

function CreateCard(key, card_title, body_content) {
  return (
    <Card>
      <Card.Header>
        <Accordion.Toggle as={Button} variant="link" eventKey={key}>
          {card_title}
        </Accordion.Toggle>
      </Card.Header>
      <Accordion.Collapse eventKey={key}>
        <Card.Body>{body_content}</Card.Body>
      </Accordion.Collapse>
    </Card>
  );
}

export default CreateCard;