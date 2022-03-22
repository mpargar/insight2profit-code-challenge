import React, { useState } from "react";
import "./styles/App.scss";
import FloatingLogos from "./components/floatingLogos/FloatingLogos";
import Logo from "./components/logo/Logo";
import Input from "./components/input/Input";
function App() {
  const [address, setAddress] = useState("");
  return (
    <div className="App">
      <FloatingLogos />
      <Logo />
      <Input
        id="address"
        placeholder="Insert an address..."
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
    </div>
  );
}

export default App;
