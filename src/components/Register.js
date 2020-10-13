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
import { Link } from "react-router-dom";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import withStyles from "@material-ui/core/styles/withStyles";

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
    marginTop: theme.spacing(5),
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
function Register(props) {
  const { classes } = props;

  const [RegisterData, SetRegisterData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [RegisterErrors, SetRegisterErrors] = useState({
    nameError: "",
    emailError: "",
    passwordError: "",
  });
  const HandleRegisterChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "name":
        RegisterErrors.nameError = value.length === 0 ? "Required" : "";
        break;
      case "email":
        RegisterErrors.emailError =
          value.length === 0
            ? "Required"
            : EmailPattern.test(value)
            ? ""
            : "Please Enter Valid Email Address";
        break;
      case "password":
        RegisterErrors.passwordError =
          value.length === 0
            ? "Required"
            : value.length < 4 || value.length > 10
            ? "Please Enter Password between 4 to 10 Characters"
            : "";
        break;
      default:
        break;
    }

    SetRegisterData({
      ...RegisterData,
      [e.target.name]: e.target.value,
    });
    SetRegisterErrors(RegisterErrors);
    console.log(RegisterErrors);
  };

  const RegisterSubmit = (e) => {
    e.preventDefault();
    console.log(RegisterData);
  };

  const DisableRegisterbtn =
    (RegisterData.name.length &&
      RegisterData.email.length &&
      RegisterData.password.length) === 0 ||
    RegisterErrors.nameError ||
    RegisterErrors.emailError ||
    RegisterErrors.passwordError;

  return (
    <main className={classes.main}>
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Register Account
        </Typography>
        <form className={classes.form} onSubmit={RegisterSubmit}>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="name">Name</InputLabel>
            <Input
              id="name"
              name="name"
              autoComplete="off"
              autoFocus
              value={RegisterData.name}
              onChange={HandleRegisterChange}
            />
            <FormHelperText style={{ color: "red", fontSize: "15px" }}>
              {RegisterErrors.nameError}
            </FormHelperText>
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="email">Email Address</InputLabel>
            <Input
              id="email"
              name="email"
              autoComplete="off"
              value={RegisterData.email}
              onChange={HandleRegisterChange}
            />
            <FormHelperText style={{ color: "red", fontSize: "15px" }}>
              {RegisterErrors.emailError}
            </FormHelperText>
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input
              name="password"
              type="password"
              id="password"
              autoComplete="off"
              value={RegisterData.password}
              onChange={HandleRegisterChange}
            />
            <FormHelperText style={{ color: "red", fontSize: "15px" }}>
              {RegisterErrors.passwordError}
            </FormHelperText>
          </FormControl>
          {/* <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="quote">Your Favorite Quote</InputLabel>
            <Input
              name="quote"
              type="text"
              id="quote"
              autoComplete="off"
              value={quote}
              onChange={(e) => setQuote(e.target.value)}
            />
          </FormControl> */}

          <Button
            type="submit"
            fullWidth
            disabled={DisableRegisterbtn}
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Register
          </Button>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            component={Link}
            to="/"
            className={classes.submit}
          >
            Login
          </Button>
        </form>
      </Paper>
      <br />
    </main>
  );
}

export default withStyles(styles)(Register);
