import React from 'react';
import Container from '@material-ui/core/Container'

function Home(props) {
    // const classes = useStyles()
  return (
    <div className="App">
      <Container maxWidth="sm">
        {props.currentUser.loggedIn && <p>Join the party, {props.currentUser.username}</p>}
      </Container>
    </div>
  );
}

export default Home;