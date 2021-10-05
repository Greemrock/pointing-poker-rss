import React from 'react';
import { cardsArrays, Decks } from '../../Shared';
import { Card } from '../Card';
import { useCardContainerStyled } from './CardContainer.styles';

type Props = {
  deck: Decks;
};

export const CardContainer: React.FC<Props> = ({ deck }) => {
  const classes = useCardContainerStyled();
  return (
    <div className={classes.root}>
      {cardsArrays[deck].map((elem) => (
        <Card key={elem} nameCard={elem} cardArray={cardsArrays[deck]} />
      ))}
    </div>
  );
};
