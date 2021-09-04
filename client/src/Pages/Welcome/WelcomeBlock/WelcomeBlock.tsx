import { Container, makeStyles, Typography } from '@material-ui/core';
import React, { FC } from 'react';
import cardsImage from '../../../assets/img/CardsWelcome.png';
import WelcomeStartBlock from '../WelocomeStartBlock/WelcomeStartBlock';

const useStyles = makeStyles(() => ({
  welcomeMainContainer: {
    width: '75%',
    marginTop: '10%',
  },
  welcomePageImage: {
    height: '70%',
  },
  welocmeHeadingWithImageBlock: {
    width: '70%',
    display: 'flex',
    justifyContent: 'space-around',
    marginBottom: '15%',
  },
  welcomeHeadingBlock: {
    width: '80%',
    display: 'flex',
    flexDirection: 'column',
  },
  welcomeHeadingText: {
    margin: '0 10%',
    fontWeight: 500,
  },
}));

const WelcomeBlock: FC = () => {
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
            Planing
          </Typography>
        </Container>
      </Container>
      <WelcomeStartBlock isConnect={false} />
      <WelcomeStartBlock isConnect={true} />
    </Container>
  );
};
export default WelcomeBlock;
