import React from 'react';
import {Accordion, Card, Table, Button} from 'react-bootstrap';

function Wallet() {
  

  return (
    <Accordion>
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="0">
            Your Wallet
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            <Table>

            </Table>


          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>

  );

}

export default Wallet;