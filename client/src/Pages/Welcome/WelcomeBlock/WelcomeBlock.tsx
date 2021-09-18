import { Container, Typography } from '@material-ui/core';
import React, { FC, useEffect, useState } from 'react';
import { io, Socket } from 'socket.io-client';
import cardsImage from '../../../assets/img/CardsWelcome.png';
import { WelcomeStartBlock } from '../WelocomeStartBlock/WelcomeStartBlock';
import { useStyles } from './WelcomeBlock.styles';

export const WelcomeBlock: FC = () => {
  const classes = useStyles();
  const [socket, setSocket] = useState<Socket | null>(null);

  useEffect(() => {
    const socket = io('ws://safe-lowlands-48809.herokuapp.com', {
      transports: ['websocket'],
      upgrade: false,
    });
    setSocket(socket);
  }, []);
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
      <WelcomeStartBlock isConnect={false} socket={socket} />
      <WelcomeStartBlock isConnect={true} socket={socket} />
    </Container>
  );
};
