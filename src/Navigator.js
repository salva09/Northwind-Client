import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function Navigator() {
  return (
    <Navbar bg="dark" variant="dark" sticky="top">
      <Navbar.Brand href="home">Northwind API Client</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="employees">Employees</Nav.Link>
        <Nav.Link href="products">Products</Nav.Link>
        <Nav.Link href="orders">Orders</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default Navigator;
