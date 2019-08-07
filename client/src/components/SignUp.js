import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    // width: 500
  },
  container: {
    // display: 'flex',
    // flexWrap: 'wrap',
    width: 300,
    marginTop: 150,
    marginBottom: 50
  },
  textField: {
    width: 300,
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
  button: {
    margin: theme.spacing(1),
  },
}));


const SignUp = props => {


  const [user, setUser] = useState(props.emptyUser)

  const handleInputChange = event => {
    const { name, value } = event.target
    setUser({ ...user, [name]: value });

  };


  const classes = useStyles()

  const handleFormSubmit = event => {
    event.preventDefault()
    props.setCurrentUser(user)
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
          // autoComplete="current-password"
          margin="normal"
        />

        <Button variant="contained" onClick={handleFormSubmit} className={classes.button} >Submit</Button>

      </form>
    </Container>

  )

}

export default SignUp