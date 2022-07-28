import * as React from "react";
import { useNavigate } from "react-router-dom";

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import { blue } from "@mui/material/colors";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState} from "react";

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
  const navigate = useNavigate();
  const [change, setChange] = useState({
    email: "",
    password: "",
  });

  // useEffect(() => {
  //   fetch("https://reqres.in/api/login")
  //     .then((res) => res.json())
  //     .then((data) => console.log(data.data));
  // }, []);

  const inputHandler = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setChange((preValue) => {
      return { ...preValue, [name]: value };
    });
  };
  
  const pageNavigate = (data) => {
    if (data) {
      navigate("/");
    } else {
      alert("error");
    }
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("change", change);
    const formData = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(change),
    };
    fetch("https://reqres.in/api/login", formData)
      .then((res) => res.json())
      .then((data) => {
        console.log(pageNavigate(data.token));
        console.log(data)
      }
      )
  }

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
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
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
  
  )
    ;
}        
// eve.holt@reqres.in
// cityslicka
