import React, {useState} from 'react';
import {ButtonGroup, ToggleButton} from 'react-bootstrap';

function CurrencyHotSwap({ currentCurrency, changeCurrency }) {

  const radios = [
    { name: 'USD', value: 'USD' },
    { name: 'CAD', value: 'CAD' },
  ];

  return (
    <ButtonGroup toggle>
      {radios.map((radio, idx) => (
        <ToggleButton
          key={idx}
          type="radio"
          variant="secondary"
          name="radio"
          value={radio.value}
          checked={currentCurrency === radio.value}
          onChange={(e) => changeCurrency(e.currentTarget.value)}
        >
          {radio.name}
        </ToggleButton>
      ))}
    </ButtonGroup>

  );

}

export default CurrencyHotSwap;