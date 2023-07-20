import { useState, useEffect } from "react";
import GifContainer from "./GifContainer/GifContainer";
import SearchForm from "./SearchForm/SearchForm";
import "./App.css";

function App() {
  //define states here
  const [search, setSearch] = useState("wave");
  const [apiObj, setApiObj] = useState({});

  //define functions here

  useEffect(() => {
    //set url to make api call with query based on search term (q), limit to 1 gif returned, rating set to pg
    const giphyUrl = `http://api.giphy.com/v1/gifs/search?api_key=7pYHJNxjXOtSyNq9pHUSpRSYAymBqi8Y&q=${search}&limit=1&rating=pg`;

    async function apiCall() {
      try {
        const giphyCall = await fetch(giphyUrl);
        const data = await giphyCall.json();
        // console.log(data);
        setApiObj(data);
      } catch (err) {
        console.log(err, "error with api call");
      }
    }
    apiCall();
  }),
    [search]; // [sets when the call is made based on changing variable]

  //function for lifting state from search form
  function addSearch(searchFormState) {
    setSearch(searchFormState);
  }
  //render ui here
  return (
    <div className="App">
      <h1>Giphy App</h1>
      <p>Use the search function to find a great Gif!</p>
      <SearchForm addSearch={addSearch} />
      {apiObj.data ? <GifContainer search={search} apiObj={apiObj} /> : null}
      <p> Powered by GIPHY</p>
    </div>
  );
}

export default App;
