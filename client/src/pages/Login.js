import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Axios from 'axios'

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


const Login = props => {

  const classes = useStyles()

  const [user, setUser] = useState(props.emptyUser)

  async function postUser() {
    await Axios.post('/login', user).then(response => {
      console.log(response);
      if (response.status === 200) {
        console.log('logged in')
        props.setCurrentUser({
          username: response.data.username,
          loggedIn: true
        })
      }
    }).catch(err => console.log(err))
  }

  const handleInputChange = event => {
    const { name, value } = event.target
    setUser({ ...user, [name]: value });
  };

  async function handleFormSubmit(event) {
    event.preventDefault()
    console.log('Login-form, username: ')
    console.log(user.username)
    await postUser()
    setUser(props.emptyUser)
  }

  return (
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
  )
}

export default Login