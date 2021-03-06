import React, { useReducer, useEffect } from 'react';
import {Avatar, Button, CssBaseline, TextField, Link, Grid,
    Typography, makeStyles, Container, Checkbox} from '@material-ui/core';
import axios from "../../axios-travel"
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius : '7px',
    border : '1px solid #ccc',
    padding : '20px',
    boxShadow: "5px 5px 5px #ccc"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  container_sm: {
    maxWidth : "500px"
  },
  right_side : {
    textAlign : "right"
  }
}));

export default function SignIn() {

  const classes = useStyles();
  const initState = {
      email : "",
      password : "",
      err : "",
      checked : false
  }

  const [state, setState] = useReducer(
    (prestate, newState) => ({ ...prestate, ...newState }),initState
  );
  const logInHandler = (e)=>{
    e.preventDefault();
    console.log(state)
    axios.post("/auth/login",
    {
      email : state.email,
      password : state.password,
      remember : state.checked
    }
  ).then(res=>{
    localStorage.setItem("token", res.data.token)
    localStorage.setItem("user", JSON.stringify(res.data))

    window.location.href = "/dashboard"
  }).catch(err =>{
    console.log(err)
    setState({...state, err : "Email hoặc password không đúng!"})
  })
  }
  const onChangeHandler = (e)=>{
      setState({[e.target.name] : e.target.value})
  }
  return (
    <Container component="main" className={classes.container_sm} maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
            TRAVEL
        </Typography>
        <span style = {{color : "red"}}> {state.err}</span>
        <form className={classes.form} onSubmit={logInHandler} >
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            onChange = {onChangeHandler}
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            onChange = {onChangeHandler}
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs className={classes.right_side}>
            <Checkbox
        checked={state.checked}
        onChange={e=> setState({...state,checked:e.target.checked})}
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />
                Remember me?

            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}