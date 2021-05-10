import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import { Card, Container, Row } from "react-bootstrap";
import { setAsyncInterval, clearAsyncInterval } from '../util/setAsyncInterval';
import numStringRound from '../util/numStringRound';

const Styles = styled.div`
  .card {
    width: 100%;
    height: 200px;
    border-radius: 0;
    text-align: 'center';
  }

  h3 {
    font-family: 'Roboto Mono', monospace;
    font-size: 40px;
  }

  .money {
    font-family: 'Inter', sans-serif;
    font-size: 20px;
  }

`;

function Crypto(props) {
  const [value, setValue] = useState(0);

  const title = props.title;
  const selectedCurrency = props.type;

  useEffect(() => {
    setAsyncInterval(async () => {
      findPrice(props.title);
      /*
      if (props.type != ) {


      }
      */

      const promise = new Promise((resolve) => {
        setTimeout(resolve('all done'), 3000);
      });
      await promise;
    }, 5000);

    return () => {
      clearAsyncInterval(0);
    }
  });
  
  
  const findPrice = async (title) => {
    const apiUrl = 'https://api.coinbase.com/v2/exchange-rates?currency=' + title;
    await fetch(apiUrl)
    .then((res) => res.json())
    .then((data) => {
      console.log(selectedCurrency)
      setValue(numStringRound(data.data.rates[selectedCurrency], 3));
    });
  }

  return (
    <Styles>
      <div>
        <Card>
          <Card.Body>
            <Card.Title><h3>{title}</h3></Card.Title>
            <Card.Text><h2 className="money">${value}</h2></Card.Text>
          </Card.Body>
        </Card>
      </div>
    </Styles>
  );
}

export default Crypto;