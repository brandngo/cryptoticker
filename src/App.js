import "./App.css";
import { Container, Row, Col, Jumbotron, Accordion, Card, Button, Table  } from "react-bootstrap";
import React, { useState } from 'react';
import Crypto from './components/Crypto.js';
import Wallet from './components/Wallet.js';
import CurrencyHotSwap from './components/CurrencyHotSwap.js';

function App() {
  const [ currency, setCurrency ] = useState("usd");


  return (
    <div className="App">
      <Jumbotron fluid><h1>Crypto Exchange</h1></Jumbotron>
      <CurrencyHotSwap 
        currentCurrency = {currency}
        changeCurrency = {setCurrency}
      />
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

      <Button onClick={() => console.log(currency)}>heloo</Button>

      <Container style={{paddingTop: "10vh"}}>
        <Wallet></Wallet>
      </Container>
    </div>
  );
}

export default App;
