const Pet = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.animal}</h2>
      <h2>{props.breeed}</h2>
    </div>
  );
};

// ^ this and the one in the bottom are the same

// const Pet = (props) => {
//   return React.createElement("div", {}, [
//     React.createElement("h2", {}, props.name),
//     React.createElement("h2", {}, props.animal),
//     React.createElement("h2", {}, props.breed),
//   ]);
// };

export default Pet;
