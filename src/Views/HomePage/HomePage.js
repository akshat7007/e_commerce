import * as React from "react";
import { useNavigate } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Product from "../HomePage/Product";

export default function HomePage() {
  const navigate = useNavigate();
  // const navigateLogin = () => {
  //   navigate("/");
  // };
  const navigateCart = () => {
    navigate("/cart");
  };
  return (
    <div>
      <Box
        style={{ position: "sticky", top: "0", zIndex: 1 }}
        sx={{ flexGrow: 1 }}
      >
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Home
            </Typography>
            <ShoppingCartIcon style={{cursor:"pointer"}} onClick={navigateCart}></ShoppingCartIcon>
            <Button onClick={()=>{localStorage.removeItem('token')}} color="inherit">
              Logout
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      <div
        style={{
          paddingInlineStart: "8px",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
}
