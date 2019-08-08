import React, { useState } from 'react';
import './App.css';
import SignUp from './components/SignUp'
import Container from '@material-ui/core/Container'
import Axios from 'axios'
import LoginForm from './components/LoginForm'


function App() {

  const emptyUser = { username: '', password: '' }
  const [currentUser, setCurrentUser] = useState(emptyUser)

  // async function postUser(user) {
  //   let response = await Axios.post('/user', user)
  //   console.log(response.data)
  // }

  return (
    <div className="App">
      <Container maxWidth="sm">
        <SignUp setCurrentUser={setCurrentUser} emptyUser={emptyUser} />
        <LoginForm setCurrentUser={setCurrentUser} emptyUser={emptyUser} />
      </Container>
    </div>
  );
}

export default App;
