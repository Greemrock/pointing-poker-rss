import { Container } from '@material-ui/core';
import React, { FC } from 'react';
import cardsImage from '../../../assets/img/CardsWelcome.png';
import { WelcomeStartBlock } from '../WelocomeStartBlock/WelcomeStartBlock';
import { useStyles } from './WelcomeBlock.styles';

export const WelcomeBlock: FC = () => {
  const classes = useStyles();
  return (
    <Container className={classes.welcomeMainContainer} maxWidth="lg">
      <Container className={classes.welocmeHeadingWithImageBlock}>
        <img
          className={classes.welcomePageImage}
          src={cardsImage}
          alt="cards image"
        />
      </Container>
      <WelcomeStartBlock isConnect={false} />
      <WelcomeStartBlock isConnect={true} />
    </Container>
  );
};
