import React from "react";
import "./styles/App.scss";
import FloatingLogos from "./components/FloatingLogos/FloatingLogos";
import Logo from "./components/logo/Logo";
function App() {
  return (
    <div className="App">
      <FloatingLogos />
      <Logo />
    </div>
  );
}

export default App;
