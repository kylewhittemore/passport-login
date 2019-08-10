import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import SignUp from './pages/SignUp'
// import Home from './pages/Home'
import Login from './pages/Login'
import NavBar from './components/NavBar'
import Axios from 'axios'

function App() {


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
    <>
      <NavBar handleLogout={handleLogout} currentUser={currentUser} />
      <Switch>
        {/* <Route
          exact path="/home"
          render={props =>
            <Home {...props}
              currentUser={currentUser}
              handleLogout={handleLogout}
            />}
        /> */}
        <Route
          exact path="/signup"
          render={props =>
            <SignUp {...props}
              setCurrentUser={setCurrentUser}
              emptyUser={emptyUser}
            />}
        />
        <Route
          exact path="/login"
          render={props =>
            <Login {...props}
              setCurrentUser={setCurrentUser}
              emptyUser={emptyUser}
            />}
        />
      </Switch>
    </>
  );
}

export default App;
