import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./Views/Login/Login";
import HomePage from "./Views/HomePage/HomePage";
import Cart from "./Views/Cart/Cart";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/homepage" element={<HomePage />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
      
    </Routes>
  );
}

export default App;
