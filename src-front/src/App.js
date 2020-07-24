import React, { useState } from "react";
import "./App.css";
// import Auth from "./pages/Auth";
// import Login from "./pages/Login/Login.jsx";
//import CeateAccount from "./pages/CeateAccount/CreateAccount.jsx";
/* import NavBar from "./pages/NavBar/NavBar.jsx";
import Inicio from "./pages/Inicio/Inicio.jsx";
import Menu from "./pages/Menu/Menu.jsx"; */
import MenuContent from "./components/MenuContent/MenuContent.jsx";


function App() {
 /*  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  if (isLoading) {
    setUser(false);
    setIsLoading(false);
  }

  return !user ? <UserLogged /> : <UserLogged />; */
  return (
    <div >
      <MenuContent/>
      
    </div>
  );
}

function UserLogged() {
  
}

export default App;
