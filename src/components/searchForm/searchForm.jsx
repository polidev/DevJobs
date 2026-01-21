import { useId, useRef } from "react";
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
  const inputRef = useRef("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // const inputValue = document.getElementById(inputSearchID).value;

    // console.log(inputValue);

    // setTextToFilter(inputValue);

    setTextToFilter(inputRef.current.value);
    setCurrentPage(1);
  };

  const handleChange = () => {
    // event.preventDefault();
    // console.log(event.target.value);
    // let isEmpty = event.target.value;
    let isEmpty = inputRef.current.value;

    isEmpty.trim() === "" ? (setTextToFilter(""), setCurrentPage(1)) : null; // This is a bad practice but is my trophy of today 😁👑
  };

  return (
    <>
      <form className="main-search-bar" onSubmit={handleSubmit}>
        <div className="main-search-bar__container">
          <img src="../src/assets/search.svg" alt="" />
          <input
            ref={inputRef}
            name="search"
            id={inputSearchID}
            onChange={handleChange}
            defaultValue={initialText}
          />
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
