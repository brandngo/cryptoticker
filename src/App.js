import "./App.css";
import { Container, Row, Col, Jumbotron, Accordion, Card, Button, Table  } from "react-bootstrap";
import React, { useState } from 'react';
import Crypto from './components/Crypto.js';
import Wallet from './components/Wallet.js';
import SiteNav from './components/SiteNav.js';
import CurrencyHotSwap from './components/CurrencyHotSwap.js';
import { clearAsyncInterval } from "./util/setAsyncInterval";
import styled from 'styled-components';

// background wavy: https://www.youtube.com/watch?v=pxDgD5JWdqg


const Styles = styled.div`
  h1 {
    font-family: 'Girassol', cursive;
    color: #FFE4B5;
    font-size: 120px;
  }
  .col {
    padding-right: 0;
    padding-left: 0;
  }
  .navb {
    position: absolute;
    width: 100%;
    height: 100%;
    

  }
  .cont {
    position: relative
    background-color:	#2F4F4F;
  }

`;

function App() {
  const [ currency, setCurrency ] = useState("USD");

  //<Button onClick={() => clearAsyncInterval(0)}>heloo</Button>
  //<Col><Crypto title="USDT" type={currency}></Crypto></Col>
  return (
    <Styles>
      <div className="App">
        <Jumbotron className="cont" style={{backgroundColor: "#2F4F4F"}} fluid>
          <h1>Crypto Exchange</h1>
          <SiteNav className="navb"/>
        </Jumbotron>
        <CurrencyHotSwap 
          currentCurrency = {currency}
          changeCurrency = {setCurrency}  // running into an error where the price flickers
        />
        <Container>
          <Row xs={3} md={3} lg={5}>
            <Col><Crypto title="BTC" type={currency}></Crypto></Col>
            <Col><Crypto title="ETH" type={currency}></Crypto></Col>
            <Col><Crypto title="XRP" type={currency}></Crypto></Col>
            <Col><Crypto title="XLM" type={currency}></Crypto></Col>
            <Col><Crypto title="SAFEMOON" type={currency}></Crypto></Col>
            <Col><Crypto title="DOGE" type={currency}></Crypto></Col>
            <Col><Crypto title="XMR" type={currency}></Crypto></Col>
            <Col><Crypto title="FIL" type={currency}></Crypto></Col>
            <Col><Crypto title="BCH" type={currency}></Crypto></Col>
            
          </Row>
            
        </Container>

        

        <Container style={{paddingTop: "10vh"}}>
          <Wallet></Wallet>
        </Container>
      </div>
    </Styles>
  );
}

export default App;
