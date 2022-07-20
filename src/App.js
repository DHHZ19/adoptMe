import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StrictMode } from "react";
import { render } from "react-dom";
import SearchParams from "./SearchParams.jsx";
import Details from "./Details.jsx";

const App = () => {
  return (
    <StrictMode>
      <BrowserRouter>
        <h1> adopt Me! </h1>
        <Routes>
          <Route path="/details/:id" element={<Details />}></Route>
          <Route path="/" element={<SearchParams />}></Route>
        </Routes>
      </BrowserRouter>
    </StrictMode>
  );
};
render(<App />, document.querySelector(".root"));
