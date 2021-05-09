import Jumbotron from "react-bootstrap/Jumbotron";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import React from "react";

function EmployeesPage() {
  return (
    <div>
      <Jumbotron>
        <h1>Employees API testing</h1>
        <p>
          In this page we can test the API designed to manipulate
          the employees table in the Northwind database.
        </p>
      </Jumbotron>
      <Accordion>
        <GetEmployeeCard />
        <PutEmployeeCard />
        <DeleteEmployeeCard />
      </Accordion>
    </div>
  );
}

function GetEmployeeCard() {
  return CreateCard(
    1,
    "See employee information",
    <div>
      <Form inline>
        <FormControl type="text" placeholder="Search by id" className="mr-sm-2" />
        <Button variant="outline-success">Search</Button>
      </Form>
      <Request method='GET' url="https://localhost:5001/Employee/1" />
    </div>
  );
}

function PutEmployeeCard() {
  return CreateCard(
    2,
    "Add new employee",
    <Button variant="outline-success">Add</Button>
  );
}

function DeleteEmployeeCard() {
  return CreateCard(
    3,
    "Remove an employee",
    <Form inline>
      <FormControl type="text" placeholder="Search by id" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  );
}

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

class Request extends React.Component {
  constructor(props) {
    super(props);
    this.requestOptions = {
      method: props.method,
      redirect: 'follow'
    };
    this.state = {
      error: null,
      isLoaded: false,
    };
    this.res = {
      id: 0,
      firstName: null,
      lastName: null
    }
  }

  componentDidMount() {
    fetch(this.props.url, this.requestOptions)
      .then(response => response.text())
      .then(result => {
        console.log(result);
        this.setState({
          isLoaded: true
        });
        this.res = {
          id: result.id,
          firstName: result.firstName,
          lastName: result.lastName
        }
      })
      .catch(error => {
        console.log('error', error);
        this.setState({
          isLoaded: true,
          error
        });
      });
  }

  render() {
    const { error, isLoaded} = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <p>
          {id}
        </p>
      );
    }
  }
}

Request.defaultProps = {
  method: null,
  url: null
}

export default EmployeesPage;
