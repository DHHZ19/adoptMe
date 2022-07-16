const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h2", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed),
  ]);
};
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
ReactDOM.render(React.createElement(App), document.querySelector(".root"));
