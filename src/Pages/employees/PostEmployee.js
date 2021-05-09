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

import CreateCard from "../CreateCard";

class PostEmployee extends React.Component {
  url = "https://localhost:5001/Employee";

  requestOptions = {
    method: 'POST',
    redirect: 'follow',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    body: null
  };

  state = {
    id: 0,
    firstName: null,
    lastName: null,
    error: null,
    isLoaded: false,
    isFetching: false
  };

  constructor(props) {
    super(props);
  }

  render() {
    return CreateCard(
      2,
      "Add new employee",
      <div>
        <Form>
          <Form.Group>
            <Form.Label>First name</Form.Label>
            <Form.Control type="text" onChange={this.handleFirstNameChange} />
          </Form.Group>

          <Form.Group>
            <Form.Label>Last name</Form.Label>
            <Form.Control type="text" onChange={this.handleLastNameChange} />
          </Form.Group>

          <Button variant="outline-success" onClick={this.handleClick}>
            Submit
          </Button>
        </Form>
        <br />
        <this.RenderFetchedData />
      </div>
    );
  }

  handleClick = (event) => {
    this.setState({
      error: null,
      isLoaded: false,
      isFetching: true
    })
    this.fetchData(this.url);
  }

  handleFirstNameChange = (event) => {
    this.setState({
      firstName: event.target.value,
      isLoaded: false,
      isFetching: false
    })
  }

  handleLastNameChange = (event) => {
    this.setState({
      lastName: event.target.value,
      isLoaded: false,
      isFetching: false
    })
  }

  fetchData(url) {
    var raw = JSON.stringify({
      "FirstName": this.state.firstName,
      "LastName": this.state.lastName
    })

    this.requestOptions.body = raw;

    fetch(url, this.requestOptions)
      .then(response => response.text())
      .then(result => {
        console.log(result);
        this.setState({
          isLoaded: true,
          isFetching: false
        });
      })
      .catch(error => {
        console.log('error', error);
        this.setState({
          error,
          isLoaded: true,
          isFetching: false
        });
      });
  }

  RenderFetchedData = () => {
    const { error, isLoaded, isFetching } = this.state;
    if (!isFetching && !isLoaded) return <div></div>

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          The employee {this.state.firstName} has been added to the database succesfully.
        </div >
      );
    }
  }
}

export default PostEmployee;