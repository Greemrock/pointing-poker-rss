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
  const WelcomeBlockStyles = useStyles();
  return (
    <Container
      className={WelcomeBlockStyles.welcomeMainContainer}
      maxWidth="lg"
    >
      <Container className={WelcomeBlockStyles.welocmeHeadingWithImageBlock}>
        <img
          className={WelcomeBlockStyles.welcomePageImage}
          src={cardsImage}
          alt="cards image"
        />
        <Container className={WelcomeBlockStyles.welcomeHeadingBlock}>
          <Typography
            className={WelcomeBlockStyles.welcomeHeadingText}
            component="h1"
            variant="h2"
            color="inherit"
            align="left"
          >
            Poker
          </Typography>
          <Typography
            className={WelcomeBlockStyles.welcomeHeadingText}
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
