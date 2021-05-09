import Jumbotron from "react-bootstrap/Jumbotron";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";

import GetEmployee from "./employees/GetEmployee";
import DeleteEmployee from "./employees/DeleteEmployee"
import PostEmployee from "./employees/PostEmployee"

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
        <GetEmployee />
        <PostEmployee />
        <DeleteEmployee />
      </Accordion>
    </div>
  );
}

export default EmployeesPage;
