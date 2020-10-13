import React, { useState } from "react";
import {
  Typography,
  Paper,
  Avatar,
  Button,
  FormControl,
  Input,
  InputLabel,
  FormHelperText,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import withStyles from "@material-ui/core/styles/withStyles";
import { Link, useHistory } from "react-router-dom";
const styles = (theme) => ({
  main: {
    width: "auto",
    display: "block", // Fix IE 11 issue.
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    [theme.breakpoints.up(400 + theme.spacing(3) * 2)]: {
      width: 400,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing(2)}px ${theme.spacing(3)}px ${theme.spacing(
      3
    )}px`,
  },
  avatar: {
    margin: theme.spacing(),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(),
  },
  submit: {
    marginTop: theme.spacing(3),
  },
});
const EmailPattern = new RegExp(
  /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
);
function Login(props) {
  let history = useHistory();
  const { classes, LoginUser } = props;

  const [LoginData, SetLoginData] = useState({
    email: "",
    password: "",
  });

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const [LoginErrors, SetLoginErrors] = useState({
    emailError: "",
    passwordError: "",
  });

  const HandleChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "email":
        LoginErrors.emailError =
          value.length === 0
            ? "Required"
            : EmailPattern.test(value)
            ? ""
            : "Please Enter Valid Email Address";
        break;
      case "password":
        LoginErrors.passwordError =
          value.length === 0
            ? "Required"
            : value.length < 4 || value.length > 10
            ? "Please Enter Password between 4 to 10 Characters"
            : "";
        break;
      default:
        break;
    }

    SetLoginData({
      ...LoginData,
      [e.target.name]: e.target.value,
    });
    SetLoginErrors(LoginErrors);
    console.log(LoginErrors);
  };

  const HandleSubmit = (e) => {
    e.preventDefault();
    console.log(LoginData);
    LoginUser();
    history.push("/home");
  };

  const DisableLoginbtn =
    (LoginData.email.length && LoginData.password.length) === 0 ||
    LoginErrors.emailError ||
    LoginErrors.passwordError;

  return (
    <main className={classes.main}>
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} onSubmit={HandleSubmit}>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="email">Email Address</InputLabel>
            <Input
              id="email"
              name="email"
              autoComplete="off"
              autoFocus
              value={LoginData.email}
              onChange={HandleChange}
            />
            <FormHelperText style={{ color: "red", fontSize: "15px" }}>
              {LoginErrors.emailError}
            </FormHelperText>
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input
              name="password"
              type="password"
              id="password"
              autoComplete="off"
              value={LoginData.password}
              onChange={HandleChange}
            />
            <FormHelperText style={{ color: "red", fontSize: "15px" }}>
              {LoginErrors.passwordError}
            </FormHelperText>
          </FormControl>
          <Button
            type="submit"
            fullWidth
            disabled={DisableLoginbtn}
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Login
          </Button>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            component={Link}
            to="/register"
            className={classes.submit}
          >
            Register
          </Button>
        </form>
      </Paper>
    </main>
  );
}

export default withStyles(styles)(Login);
