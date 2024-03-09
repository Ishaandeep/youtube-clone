export function SearchBar() {
  return (
    <div>
      <input
        className=" border border-gray-300 focus:outline-none focus:border-blue-500 rounded-lg w-96 ml-48"
        type="text"
        placeholder="Search"
      ></input>
      <button>
        <img className=" w-7 ml-2 mt-8" src="/thumbnails/search.png"></img>
      </button>
    </div>
  );
}
