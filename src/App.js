import React, { useState } from "react";
import "./styles/App.scss";
import FloatingLogos from "./components/floatingLogos/FloatingLogos";
import Logo from "./components/logo/Logo";
import Input from "./components/input/Input";
import useSearch from "hooks/useSearch";
import Button from "./components/button/Button";
function App() {
  const [address, setAddress] = useState("");
  const { handleSearch, loading } = useSearch();

  return (
    <div className="App">
      <FloatingLogos />
      <Logo />
      <Input
        id="address"
        placeholder="Insert an address..."
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        disabled={loading}
        postponeComponent={
          <Button
            styleType={"primary"}
            style={{
              height: "100%",
              minWidth: "100px",
              borderRadius: "0 30px 30px 0",
            }}
            type="submit"
          >
            Buscar
          </Button>
        }
      />
    </div>
  );
}

export default App;
