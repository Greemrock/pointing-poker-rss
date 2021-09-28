import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import { cardsArrays } from '../../Shared';
import { Card } from '../Card';
import { useCardContainerStyled } from './CardContainer.styles';

type Props = {
  cardSelected: boolean;
};

export const CardContainer: React.FC<Props> = ({ cardSelected }) => {
  const [isCardSelected, setCardSelected] = useState(cardSelected);

  const classes = useCardContainerStyled();

  return (
    <>
      <div className={classes.root}>
        {cardsArrays.modifiedFibonacci.map((elem) => (
          <Card
            key={elem}
            nameCard={elem}
            isCardSelected={isCardSelected}
            setCardSelected={setCardSelected}
          />
        ))}
      </div>
      <Button onClick={() => setCardSelected(false)}>Reset Select</Button>
      <Button onClick={() => setCardSelected(true)}>Dont click</Button>
    </>
  );
};
