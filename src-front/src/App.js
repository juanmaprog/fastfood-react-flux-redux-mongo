import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Auth from "./pages/Auth";
import Login2 from "./pages/Login2";

function App() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  if (isLoading) {
    setUser(false);
    setIsLoading(false);
  }

  return !user ? <Auth /> : <UserLogged />;
}

function UserLogged() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <h1>Usuario Logeado</h1>
      <button>Cerrar Sesión</button>
    </div>
  );
}

export default App;
