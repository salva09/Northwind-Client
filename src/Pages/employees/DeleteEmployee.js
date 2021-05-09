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

import CreateCard from "./CreateCard";

class DeleteEmployee extends React.Component {
  url = "https://localhost:5001/Employee/";

  requestOptions = {
    method: 'DELETE',
    redirect: 'follow',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
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
      3,
      "Remove an employee",
      <div>
        <Form inline>
          <FormControl type="text" placeholder="Search by id" className="mr-sm-2" value={this.state.id} onChange={this.handleIdChange} />
          <Button variant="outline-success" onClick={this.handleClick}>Search</Button>
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
    this.fetchData(this.url + this.state.id);
  }

  handleIdChange = (event) => {
    this.setState({
      id: event.target.value,
      isLoaded: false,
      isFetching: false
    })
  }

  fetchData(url) {
    fetch(url, this.requestOptions)
      .then(response => {
        console.log(response);
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
    if (!isFetching && !isLoaded) return <div>Search an employee by its ID and remove it from the database</div>

    if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          The employee {this.state.id} has been removed from the database succesfully.
        </div >
      );
    }
  }
}

export default DeleteEmployee;