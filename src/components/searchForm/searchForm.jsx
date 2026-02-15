import { useId, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import JobSelect from "../jobSelect/jobSelect";
import "./searchForm.css";

function SearchForm({
  setTextToFilter,
  filtersValue,
  setFiltersValue,
  setCurrentPage,
  initialText,
  initialTechnology,
  initialLocation,
  initialExperience,
}) {
  const inputSearchID = useId();
  const inputRef = useRef();
  const location = useLocation();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (location.pathname !== "/jobs") {
      navigate(`/jobs?text=${event.target.search.value}`);
      return;
    }

    setTextToFilter(event.target.search.value);
    setCurrentPage(1);
  };

  const handleChange = (event) => {
    let isEmpty = event.target.value;
    isEmpty.trim() === "" ? setTextToFilter("") : null;
  };

  const handleClick = (event) => {
    event.preventDefault();
    // Fix wen input is empty, filters are not reset
    if (
      inputRef.current.value === "" &&
      filtersValue == { technology: "", location: "", experience: "" }
    )
      return;

    inputRef.current.value = "";
    setTextToFilter("");
    setFiltersValue({ technology: "", location: "", experience: "" });
  };

  return (
    <>
      <form className="main-search-bar" onSubmit={handleSubmit}>
        <div className="main-search-bar__container">
          <img src="../src/assets/search.svg" alt="" />
          <input
            ref={inputRef} // Consultar el uso correcto de REF en React
            type="text"
            name="search"
            id={inputSearchID}
            onChange={handleChange}
            defaultValue={initialText}
            required
          />
          <button
            type="button"
            className="main-search-bar__clean-button"
            onClick={handleClick}
          >
            ✕
          </button>
        </div>

        {window.location.pathname === "/jobs" ? (
          <JobSelect
            filtersValue={filtersValue}
            setFiltersValue={setFiltersValue}
            setCurrentPage={setCurrentPage}
            initialTechnology={initialTechnology}
            initialLocation={initialLocation}
            initialExperience={initialExperience}
          />
        ) : (
          <></>
        )}
      </form>
    </>
  );
}

export default SearchForm;
