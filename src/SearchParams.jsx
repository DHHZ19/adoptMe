import { useState, useEffect, useContext } from "react";
import Results from "./Results.jsx";
import ThemeContext from "./ThemeContext.jsx";
import useBreedList from "./useBreedList.jsx";
const SearchParams = () => {
  const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const [breeds] = useBreedList(animal);
  const [pets, setPets] = useState([]);
  const [theme, setTheme] = useContext(ThemeContext);
  const [pageCount, setPageCount] = useState(0);

  function nextPage() {
    setPageCount(pageCount + 1);
  }
  function backPage() {
    if (pageCount > 0) {
      setPageCount(pageCount - 1);
    }
  }
  useEffect(() => {
    requestPets();
  }, [pageCount]); // eslint-disable-line react-hooks/exhaustive-deps
  async function requestPets() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=dog&page=${pageCount}`
    );
    const json = await res.json();

    setPets(json.pets);
  }
  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          requestPets();
        }}
      >
        <label htmlFor="location">
          Location
          <input
            id="loaction"
            value={location}
            placeholder="location"
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            name=""
            id="animal"
            value={animal}
            onChange={(e) => {
              setAnimal(e.target.value);
              setBreed("");
            }}
            onBlur={(e) => {
              setAnimal(e.target.value);
              setBreed("");
            }}
          >
            <option />
            {ANIMALS.map((animal) => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          Breed
          <select
            name=""
            id="breed"
            value={breed}
            onChange={(e) => {
              setBreed(e.target.value);
            }}
            onBlur={(e) => {
              setBreed(e.target.value);
            }}
          >
            <option />
            {breeds.map((allBreed) => (
              <option key={allBreed} value={allBreed}>
                {allBreed}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="theme">
          Theme
          <select
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            onBlur={(e) => setTheme(e.target.value)}
          >
            <option value="peru">peru</option>
            <option value="darkblue">darkblue</option>
            <option value="red">red</option>
            <option value="orange">orange</option>
          </select>
        </label>
        <button sytle={{ backgroundColor: theme }}>Submit</button>
      </form>
      <Results pets={pets} />
      <button onClick={nextPage}>Next Page</button>
      <button onClick={backPage}>Pervious Page</button>
    </div>
  );
};

export default SearchParams;
