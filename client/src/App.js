import React, { useState } from 'react';
import './App.css';
import SignUp from './components/SignUp'
import Container from '@material-ui/core/Container'


function App() {

  const emptyUser = { username: '', password: '' }
  const [currentUser, setCurrentUser] = useState(emptyUser)

  return (
    <div className="App">
      <Container maxWidth="sm" justify="center">
        <SignUp setCurrentUser={setCurrentUser} emptyUser={emptyUser} />
        <h1>{currentUser.username}</h1>
        <h1>{currentUser.password}</h1>
      </Container>
    </div>
  );
}

export default App;
