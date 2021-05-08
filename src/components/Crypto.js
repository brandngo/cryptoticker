import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

function Crypto(props) {
  const [value, setValue] = useState(0);

  /*
  useEffect(() => {
    const apiUrl = 'https://api.coinbase.com/v2/exchange-rates?currency=' + props.title;
    fetch(apiUrl)
    .then((res) => res.json())
    .then((data) => {
      setValue(data.rates["USD"]);
    });

  }, []);

  */

  const title = props.title;
  const findPrice = async (title) => {
    const apiUrl = 'https://api.coinbase.com/v2/exchange-rates?currency=' + title;
    let dataObj = [];
    fetch(apiUrl)
    .then((res) => res.json())
    .then((data) => (dataObj = data));
    //let data1 = JSON.parse(JSON.stringify(dataObj));
    await setValue(dataObj.currency);
    /*
    if (dataObj.hasOwnProperty('rates')) {
      console.log(dataObj.rates);

    } else {
      console.log("err");

    }
    */
  }

  //setInterval( , 1000);

  return (
    <div>
      <Container>
        <Row>
          <h1>{title}</h1>
        </Row>
        <Row>
          <h2>{value}</h2>
          <Button onClick={() => findPrice(title)}>Get Price of BTC</Button>
        </Row>

      </Container>
    </div>
  );
}

export default Crypto;