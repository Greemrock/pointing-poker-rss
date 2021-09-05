import { Container, makeStyles, Typography } from '@material-ui/core';
import React, { FC } from 'react';
import cardsImage from '../../../assets/img/CardsWelcome.png';
import { WelcomeStartBlock } from '../WelocomeStartBlock/WelcomeStartBlock';
import { useStyles } from './WelcomeBlockStyles';

export const WelcomeBlock: FC = () => {
  const welcomeBlockStyles = useStyles();
  return (
    <Container
      className={welcomeBlockStyles.welcomeMainContainer}
      maxWidth="lg"
    >
      <Container className={welcomeBlockStyles.welocmeHeadingWithImageBlock}>
        <img
          className={welcomeBlockStyles.welcomePageImage}
          src={cardsImage}
          alt="cards image"
        />
        <Container className={welcomeBlockStyles.welcomeHeadingBlock}>
          <Typography
            className={welcomeBlockStyles.welcomeHeadingText}
            component="h1"
            variant="h2"
            color="inherit"
            align="left"
          >
            Poker
          </Typography>
          <Typography
            className={welcomeBlockStyles.welcomeHeadingText}
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
