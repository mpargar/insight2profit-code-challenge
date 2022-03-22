import React, { useState } from "react";
import "./styles/App.scss";
import FloatingLogos from "./components/floatingLogos/FloatingLogos";
import Logo from "./components/logo/Logo";
import Input from "./components/input/Input";
import useSearch from "hooks/useSearch";
import Button from "./components/button/Button";
import searchIcon from "./img/searchIcon.svg";
import Results from "./components/results/Results";
function App() {
  const [address, setAddress] = useState("");
  const { handleSearch, loading, message, results } = useSearch(address);

  return (
    <div className="App">
      <FloatingLogos />
      <Logo />
      <form onSubmit={handleSearch}>
        <Input
          id="address"
          placeholder="Insert an address..."
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          disabled={loading}
          message={message}
          postponeComponent={
            <Button
              styleType="primary"
              style={{
                height: "100%",
                minWidth: "100px",
                borderRadius: "0 30px 30px 0",
              }}
              type="submit"
              loading={loading}
            >
              Buscar <img src={searchIcon} alt="Search icon" />
            </Button>
          }
        />
      </form>
      <Results results={results} />
    </div>
  );
}

export default App;
