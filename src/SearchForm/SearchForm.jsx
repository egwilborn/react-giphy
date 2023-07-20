import { useState, useEffect } from "react";
import "./SearchForm.css";
export default function SearchForm({ addSearch }) {
  //define state here
  //state to render what is being typed into the form
  const [formState, setFormState] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  //define functions here
  //changing the formstate based on whats in ui
  function handleChange(e) {
    setFormState(e.target.value);
  }
  //takes form contents and pushes it to app state
  function handleSubmit(e) {
    e.preventDefault();
    if (formState === "") {
      return setErrorMessage("Please fill in search input");
    }
    addSearch(formState);
    setFormState("");
    setErrorMessage("");
  }

  //return ui here
  return (
    <div className="searchName">
      <form onSubmit={handleSubmit}>
        <input
          autoComplete="off"
          type="text"
          value={formState}
          onChange={handleChange}
        />
        <button>Search Gifs</button>
        <br />
        <span className="error-message">{errorMessage}</span>
      </form>
    </div>
  );
}
