// import of file css
import "./App.css";
// import of bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";
// import of bootstrap card
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
// import of componenet Image, Name, Description and price
import Image from "./components/Image";
import Name from "./components/Name";
import Description from "./components/Description";
import Price from "./components/Price";
// import of image good
import good from "./assets/good.jpg";

function App() {
const userName = "Houda"
  return (
    <div>
      {/* card bootstrap */}
      <h1 style={{ textAlign: "center", color: "red" }}> Our product</h1>
      <div className="container">
        <Card
          style={{
            width: "18rem",
            textAlign: "center",
            borderRadius: 20,
            borderWidth: 5,
          }}
        >
          <Image />
          <Card.Body>
            <Card.Title>
              {/* componenet Name */}
              <Name />
            </Card.Title>
            <Card.Text>
              {/* componenet Description */}

              <Description />
            </Card.Text>{" "}
            <b>Prix : </b>
            <Button variant="primary">
              {/* componenet Price */}

              <Price />
            </Button>
          </Card.Body>
        </Card>

        {/* begin of user condition */}

        {userName ? (
          <>
            <h4>Hello {userName}</h4>
            <img src={good} alt="" />
          </>
        ) : (
          <h2>Hello There</h2>
        )}
      </div>
    </div>
  );
}
export default App;
