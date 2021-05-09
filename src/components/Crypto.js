import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import { setAsyncInterval, clearAsyncInterval } from '../util/setAsyncInterval';
import numStringRound from '../util/numStringRound';

function Crypto(props) {
  const [value, setValue] = useState(0);

  const title = props.title;

  useEffect(() => {
    setAsyncInterval(async () => {
      findPrice(props.title);
      const promise = new Promise((resolve) => {
        setTimeout(resolve('all done'), 3000);
      });
      await promise;
    }, 5000);
  });
  
  
  const findPrice = async (title) => {
    const apiUrl = 'https://api.coinbase.com/v2/exchange-rates?currency=' + title;
    await fetch(apiUrl)
    .then((res) => res.json())
    .then((data) => {
      setValue(numStringRound(data.data.rates["USD"], 2));
    });
  }

  return (
    <div>
      <Card>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{value}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Crypto;