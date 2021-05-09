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

class GetEmployee extends React.Component {
  url = "https://localhost:5001/Employee/";

  requestOptions = {
    method: 'GET',
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
      1,
      "See employee information",
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
      id: event.target.value
    })
  }

  fetchData(url) {
    fetch(url, this.requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result);
        this.setState({
          id: result.id,
          firstName: result.firstName,
          lastName: result.lastName,
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
    if (!isFetching && !isLoaded) return <div>Search an employee by its ID and see its information.</div>

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      if (!this.state.firstName) {
        return (
          <div>
            Employee not found.
          </div>
        )
      } else {
        return (
          <div>
            <ListGroup as="ul">
              <ListGroup.Item as="li">
                First name: {this.state.firstName}
              </ListGroup.Item>
              <ListGroup.Item as="li">
                Last name: {this.state.lastName}
              </ListGroup.Item>
            </ListGroup>
          </div>
        );
      }
    }
  }
}

export default GetEmployee;
