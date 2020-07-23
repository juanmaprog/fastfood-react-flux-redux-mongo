import React, { useState } from "react";
import "./App.css";
// import Auth from "./pages/Auth";
// import Login from "./pages/Login/Login.jsx";
// import CeateAccount from "./pages/CeateAccount/CreateAccount.jsx";
import NavBar from "./pages/NavBar/NavBar.jsx";
import Inicio from "./pages/Inicio/Inicio.jsx";
import Register from './Register/Register.jsx';


function App() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  if (isLoading) {
    setUser(false);
    setIsLoading(false);
  }

  return !user ? <UserLogged /> : <UserLogged />;
}

function UserLogged() {
  return (
    <div >
      <NavBar/>
      <Inicio/>
      <Register/>
    </div>
  );
}

export default App;
