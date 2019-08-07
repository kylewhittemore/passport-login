import React, { useState } from 'react';
import './App.css';
import SignUp from './components/SignUp'
import Container from '@material-ui/core/Container'
import Axios from 'axios'


function App() {

  const emptyUser = { username: '', password: '' }
  const [currentUser, setCurrentUser] = useState(emptyUser)

  async function postUser(user) {
    let response = await Axios.post('/user', user)
    console.log(response.data)
  }

  return (
    <div className="App">
      <Container maxWidth="sm">
        <SignUp postUser={postUser} setCurrentUser={setCurrentUser} emptyUser={emptyUser} />
        <h1>{currentUser.username}</h1>
        <h1>{currentUser.password}</h1>
      </Container>
    </div>
  );
}

export default App;
