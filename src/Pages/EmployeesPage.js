import Jumbotron from "react-bootstrap/Jumbotron";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";

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

function GetEmployeeCard() {
  return CreateCard(
    1,
    "See employee information",
    <Form inline>
      <FormControl type="text" placeholder="Search by id" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
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

export default EmployeesPage;
