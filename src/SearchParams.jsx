const SearchParams = () => {
  return (
    <div className="search-params">
      <form onSubmit={""}>
        <label htmlFor="location">
          Location
          <input id="loaction" placeholder="location" />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
