import React from 'react';
import { Container, Link, Typography } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import { useFooterStyles } from './Footer.styles';

export const Footer: React.FC = () => {
  const classes = useFooterStyles();
  return (
    <footer className={classes.topBlock}>
      <Container className={classes.container}>
        <Link
          href="https://github.com/RockStar666by"
          className={classes.link}
          underline="none"
        >
          <GitHubIcon className={classes.icon} />
          <Typography>RockStar666by</Typography>
        </Link>
        <Link
          href="https://github.com/SergeyZenkovich"
          className={classes.link}
          underline="none"
        >
          <GitHubIcon className={classes.icon} />
          <Typography>SergeyZenkovich</Typography>
        </Link>
        <Link
          href="https://github.com/Greemrock/"
          className={classes.link}
          underline="none"
        >
          <GitHubIcon className={classes.icon} />
          <Typography>Greemrock</Typography>
        </Link>
      </Container>
    </footer>
  );
};
