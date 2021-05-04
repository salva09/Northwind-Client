import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";

function Home() {
  return (
    <div>
      <Jumbotron>
        <h1>Northwind API Client</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <p>
          <Button variant="primary">Learn more</Button>
        </p>
      </Jumbotron>
    </div>
  );
}

export default Home;
