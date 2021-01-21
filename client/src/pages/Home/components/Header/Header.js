import {
  Button,
  Card,
  CardContent,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from "@material-ui/core";
import React, { Fragment, useState } from "react";
import "./Header.scss";

function Header() {
  const [why, setWhy] = useState(false);
  const handleWhy = () => {
    setWhy(!why);
  };

  const [aboutUs, setAboutUs] = useState(false);
  const handleAboutUs = () => {
    setAboutUs(!aboutUs);
  };

  return (
    <Fragment>
      {" "}
      <ul className='homepage-header-items'>
        <li className='homepage-header-items__item'>
          <Button className='homepage-header-items__button' onClick={handleWhy}>
            Why Eye Code
          </Button>
        </li>
        <li className='homepage-header-items__item'>
          <Button
            className='homepage-header-items__button'
            onClick={handleAboutUs}>
            About Us
          </Button>
        </li>
      </ul>
      <Dialog
        open={why}
        onClose={handleWhy}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'>
        <DialogTitle id='alert-dialog-title'>Why Eye Code</DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>
            While doing whiteboarding challenge, or just brainstorming, you
            might have thought of running your code to see if what you wrote
            actually works. But writing in a code editor what you already wrote
            by hand is redundant and developers DRY! Entering Eye Code! As soon
            as you upload the photo, google vision API gets the photo, reads it
            and then we pass it to codepen so you can edit and run the code. In
            future we will add more language support, but for now, we only
            support javascript.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleWhy}
            color='primary'
            autoFocus
            className='homepage-header__dialogue-button'>
            Go back to app
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={aboutUs}
        onClose={handleAboutUs}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'>
        <DialogTitle id='alert-dialog-title'>Developers</DialogTitle>
        <DialogContent>
          <Card variant='outlined' className='homepage-header-card'>
            <div>
              <CardContent className='homepage-header-card__content'>
                <Typography component='h5' variant='h5'>
                  Ryan Vu
                </Typography>
                <Typography variant='subtitle1' color='textSecondary'>
                  Loves photography, playing instruments and lives on pizzas.
                </Typography>
                <Typography variant='subtitle1' color='textSecondary'>
                  <a href='https://ryanvu.ca' rel='noreferrer'>
                    <img
                      alt='Website'
                      src='https://img.shields.io/website?up_message=online&url=https%3A%2F%2Fnahid-hossain.com'
                    />
                  </a>{" "}
                  <a href='https://github.com/ryanvu' rel='noreferrer'>
                    <img
                      alt='GitHub followers'
                      src='https://img.shields.io/github/followers/ryanvu?style=social'
                    />
                  </a>{" "}
                  <a
                    href='https://www.linkedin.com/in/ryan-vu-0402/'
                    rel='noreferrer'>
                    <img
                      alt='Linkedin'
                      src='https://img.shields.io/badge/-LinkedIn-blue?style=flat&logo=Linkedin&logoColor=white'
                    />
                  </a>
                </Typography>
              </CardContent>
            </div>
          </Card>
        </DialogContent>
        <DialogContent>
          <Card variant='outlined' className='homepage-header-card'>
            <div>
              <CardContent className='homepage-header-card__content'>
                <Typography component='h5' variant='h5'>
                  Nahid Hossain
                </Typography>
                <Typography variant='subtitle1' color='textSecondary'>
                  Loves animes, monster (drink) and kobe beef (never had any!)
                </Typography>
                <Typography variant='subtitle1' color='textSecondary'>
                  <a href='https://nahid-hossain.com' rel='noreferrer'>
                    <img
                      alt='Website'
                      src='https://img.shields.io/website?up_message=online&url=https%3A%2F%2Fnahid-hossain.com'
                    />
                  </a>{" "}
                  <a href='https://github.com/oikantik' rel='noreferrer'>
                    <img
                      alt='GitHub followers'
                      src='https://img.shields.io/github/followers/oikantik?style=social'
                    />
                  </a>{" "}
                  <a
                    href='https://www.linkedin.com/in/md-nahid-hossain'
                    rel='noreferrer'>
                    <img
                      alt='Linkedin'
                      src='https://img.shields.io/badge/-LinkedIn-blue?style=flat&logo=Linkedin&logoColor=white'
                    />
                  </a>
                </Typography>
              </CardContent>
            </div>
          </Card>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleAboutUs}
            color='primary'
            autoFocus
            className='homepage-header__dialogue-button'>
            Go back to app
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
}

export default Header;
