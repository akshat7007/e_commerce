import * as React from "react";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import { blue } from "@mui/material/colors";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState ,useEffect} from "react";
import AuthService from "../Services/AuthService";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function SignIn() {
  const initialValue = { email: "", password: "" };

  const [change, setChange] = useState(initialValue);
  // const [formErrors, setFormErrors] = useState({});
  // const [isSubmit, setIsSubmit] = useState(false);
  const navigate = useNavigate();

  
  useEffect(() => {
    if (localStorage.getItem('token')) {
      console.log('localstorage',localStorage)
    navigate('/homepage')
  }
  }, [navigate])

  const submitPage = (token) => {
    console.log("tokenss", token);

    if (token) {
      navigate("/homepage");
    } else {
      navigate("/");
      alert("404 page error");
      setChange({
        email: "",
        password: "",
      });
    }
  };

  const inputHandler = (e) => {
    const { value, name } = e.target;
    setChange((preValue) => {
      return { ...preValue, [name]: value };
    });
  };


  const validaton = () => {
    let isvalid = true;
    if (change.email === "") {
      isvalid = false;
      alert("pls enter your email id");
    } else if (change.password === "") {
      isvalid = false;
      alert("pls enter your password");
    } else {
      const validator = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
      if (!validator.test(change.email)) {
        isvalid = false;
        alert("pls enter a valid email id");
      }
    }
    return isvalid;
  };

  const handleSubmit = (event) => {

    

    event.preventDefault();
    // setFormErrors(validate(change));
    // setIsSubmit(true);

    if (validaton(true)) {
      AuthService(change)
        .then((data) => {
          submitPage(data.token);
          console.log("submitpage", data.token);
          localStorage.setItem("token", data.token);
        })
        .catch((error) => {
          console.log("error", error);
        });
    }

  };

  
  ///////validation//////////

  // const validate = (values) => {
  //   const errors = {};
  //   const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  //   // const regex = ^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$;
  //   if (!values.email) {
  //     errors.email = "Email is required!";
  //   } else if (!regex.test(values.email)) {
  //     errors.email = "This is not a valid email format";
  //   }
  //   if (!values.password) {
  //     errors.password = "Password is required!";
  //   } else if (values.password.length < 4) {
  //     errors.password = "Password must be 4 characters";
  //   } else if (values.password.length > 10) {
  //     errors.password = "Password cannot exceed more than 10 characters";
  //   }
  //   return errors;
  // };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ bgcolor: blue[700] }}>
            <AssignmentIcon />
          </Avatar>

          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              value={change.email}
              onChange={inputHandler}
              autoComplete="email"
              autoFocus
            />
            <TextField
              onChange={inputHandler}
              value={change.password}
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />

            <Button
              // onClick={navigateHome}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
// eve.holt@reqres.in
// cityslicka
