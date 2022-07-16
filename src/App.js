import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";
const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", { id: "my-brand" }, "adopt me!"),
    React.createElement(Pet, {
      name: "luna",
      animal: "dog",
      breed: "havanese",
    }),
    React.createElement(Pet, { name: "Lulu", animal: "dog", breed: "puddle" }),
    React.createElement(Pet, {
      name: "rocky",
      animal: "ginne pig",
      breed: "havanese",
    }),
  ]);
};
render(React.createElement(App), document.querySelector(".root"));
