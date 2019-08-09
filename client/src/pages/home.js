import React from 'react';
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
}));

function Home(props) {
    const classes = useStyles()
  return (
    <div className="App">
      <Container maxWidth="sm">
        {props.currentUser.loggedIn && <p>Join the party, {props.currentUser.username}</p>}
        <Button variant="contained" onClick={props.handleLogout} className={classes.button}>
            Logout
        </Button>
      </Container>
    </div>
  );
}

export default Home;