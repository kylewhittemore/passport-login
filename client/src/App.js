import React, { useState, useEffect } from 'react';
import './App.css';
import SignUp from './components/SignUp'
import Container from '@material-ui/core/Container'
import Axios from 'axios'
import LoginForm from './components/LoginForm'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
}));

function App() {

  const classes = useStyles()

  const emptyUser = { username: '', password: '' }
  const [currentUser, setCurrentUser] = useState({})

  const handleLogout = event => {
    event.preventDefault();
    console.log('logging out')
    Axios.post('/logout').then(response => {
      console.log(response.data)
      if (response.status === 200) {
        setCurrentUser({
          loggedIn: false,
          username: null
        })
      }
    }).catch(error => {
      console.log('Logout error')
    })
  }

  function getUser() {
    Axios.get('/user/').then(response => {
      console.log('Get user response: ')
      console.log(response.data)
      if (response.data.user) {
        console.log('Get User: There is a user saved in the server session: ')

        setCurrentUser({
          loggedIn: true,
          username: response.data.user.username
        })
      } else {
        console.log('Get user: no user');
        setCurrentUser({
          loggedIn: false,
          username: null
        })
      }
    })
  }

  useEffect(() => {
    getUser()
  }, [])

  return (
    <div className="App">
      <Container maxWidth="sm">
        {currentUser.loggedIn && <p>Join the party, {currentUser.username}</p>}
        <Button variant="contained" onClick={handleLogout} className={classes.button}>
            Logout
        </Button>
        <SignUp setCurrentUser={setCurrentUser} emptyUser={emptyUser} />
        <LoginForm setCurrentUser={setCurrentUser} emptyUser={emptyUser} />
      </Container>
    </div>
  );
}

export default App;
