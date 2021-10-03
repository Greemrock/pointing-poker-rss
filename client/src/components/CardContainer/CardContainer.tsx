import React, { useState } from 'react';
import { cardsArrays, Decks } from '../../Shared';
import { Card } from '../Card';
import { useCardContainerStyled } from './CardContainer.styles';

type Props = {
  cardSelected: boolean;
  deck: Decks;
};

export const CardContainer: React.FC<Props> = ({ cardSelected, deck }) => {
  const [isCardSelected, setCardSelected] = useState(cardSelected);

  const classes = useCardContainerStyled();

  return (
    <div className={classes.root}>
      {cardsArrays[deck].map((elem) => (
        <Card
          key={elem}
          nameCard={elem}
          isCardSelected={isCardSelected}
          setCardSelected={setCardSelected}
          cardArray={cardsArrays[deck]}
        />
      ))}
    </div>
  );
};
