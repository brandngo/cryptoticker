import "./App.css";
import { Container, Row, Col, Jumbotron, Accordion, Card, Button, Table  } from "react-bootstrap";
import Crypto from './components/Crypto.js';

function App() {
  return (
    <div className="App">
      <Jumbotron fluid><h1>Crypto Exchange</h1></Jumbotron>
      
      
      
      <Container>
        <Row>
          <Col><Crypto title="BTC"></Crypto></Col>
          <Col><Crypto title="ETH"></Crypto></Col>
          <Col><Crypto title="XRP"></Crypto></Col>
        </Row>
        <Row>
          <Col><Crypto title="SAFEMOON"></Crypto></Col>
          <Col></Col>
          <Col></Col>
        </Row>
        <Row>
          <Col></Col>
          <Col></Col>
          <Col></Col>
        </Row>
      </Container>

      <Container style={{paddingTop: "10vh"}}>

      </Container>
    </div>
  );
}

export default App;
