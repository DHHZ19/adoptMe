import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { StrictMode, useState } from "react";
import { render } from "react-dom";
import SearchParams from "./SearchParams.jsx";
import Details from "./Details.jsx";
import ThemeContext from "./ThemeContext.jsx";

const App = () => {
  const theme = useState("pink");
  return (
    <StrictMode>
      <ThemeContext.Provider value={theme}>
        <BrowserRouter>
          <header>
            <Link to="/"></Link>
          </header>
          <Routes>
            <Route path="/details/:id" element={<Details />}></Route>
            <Route path="/" element={<SearchParams />}></Route>
          </Routes>
        </BrowserRouter>
      </ThemeContext.Provider>
    </StrictMode>
  );
};
render(<App />, document.querySelector(".root"));
