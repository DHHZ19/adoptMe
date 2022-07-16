import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="lulu" animal="dog" breed="poodle" />
      <Pet name="rocky" animal="guine pig" breed="black and white" />
      <Pet name="lulu" animal="dog" breed="poodle" />
    </div>
  );
};
render(<App />, document.querySelector(".root"));
