import { Container, Typography } from '@material-ui/core';
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
        <Container className={classes.welcomeHeadingBlock}>
          <Typography
            className={classes.welcomeHeadingText}
            component="h1"
            variant="h2"
            color="inherit"
            align="left"
          >
            Poker
          </Typography>
          <Typography
            className={classes.welcomeHeadingText}
            component="h2"
            variant="h2"
            color="inherit"
            align="right"
          >
            Planning
          </Typography>
        </Container>
      </Container>
      <WelcomeStartBlock isConnect={false} />
      <WelcomeStartBlock isConnect={true} />
    </Container>
  );
};
