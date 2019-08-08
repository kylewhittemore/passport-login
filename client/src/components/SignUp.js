import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Axios from 'axios'
import { Container } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  container: {
    width: 100 + "%",
    marginTop: 150,
    marginBottom: 50
  },
  textField: {
    width: 80 + "%",
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  button: {
    margin: theme.spacing(1),
  },
}));


const SignUp = props => {

  const classes = useStyles()

  const [user, setUser] = useState(props.emptyUser)

  async function postUser() {
    await Axios.post('/user', user).then(response => {
      console.log(response);
      (response.data) ? console.log('Successful sign up')
        : console.log('Sign up error');
    }).catch(err => console.log(err))
  }

  const handleInputChange = event => {
    const { name, value } = event.target
    setUser({ ...user, [name]: value });
  };

  async function handleFormSubmit(event) {
    event.preventDefault()
    console.log('Sign-up-form, username: ')
    console.log(user.username)
    await postUser()
    setUser(props.emptyUser)
  }

  return (
    <Container>

      <form className={classes.container} onSubmit={handleFormSubmit} >
        <TextField
          id="standard-name"
          label="Name"
          className={classes.textField}
          value={user.username}
          name="username"
          onChange={handleInputChange}
          margin="normal"
        />
        <TextField
          id="filled-password-input"
          label="Password"
          className={classes.textField}
          type="password"
          name="password"
          value={user.password}
          onChange={handleInputChange}
          margin="normal"
        />
        <Button variant="contained" onClick={handleFormSubmit} className={classes.button}>Submit</Button>
      </form>
    </Container>
  )
}

export default SignUp