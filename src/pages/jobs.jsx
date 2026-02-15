import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useFetchData } from "../hooks/useFetchData.jsx";
import { useUrlSync } from "../hooks/useUrlSync.jsx";

import SearchForm from "../components/searchForm/searchForm.jsx";
import JobList from "../components/jobList/jobList.jsx";
import PaginationBar from "../components/paginationBar/paginationBar.jsx";

function Jobs() {
  const [searchParams, setSearchParams] = useSearchParams();
  // Set searchForm props
  // const [textToFilter, setTextToFilter] = useState("");
  // const searchParams = new URLSearchParams(window.location.search);
  // La arrow function se llama una sola vez al montarse el componente o ser llamada implícitamente y NO cada ves que se renderiza el componente
  const [textToFilter, setTextToFilter] = useState(
    () => searchParams.get("text") || "",
  );
  // Set jobSelect props
  const [filtersValue, setFiltersValue] = useState(() => {
    // const searchParams = new URLSearchParams(window.location.search);
    return {
      technology: searchParams.get("technology") || "",
      location: searchParams.get("type") || "",
      experience: searchParams.get("level") || "",
    };
  });
  // Set pagination
  // const [currentPage, setCurrentPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const page = Number(searchParams.get("page"));

    return Number.isNaN(page) || page < 1 ? 1 : page;
  });

  // console.log(filtersValue);
  // Sync URL
  useUrlSync({
    textToFilter,
    filtersValue,
    currentPage,
    setSearchParams,
  });

  // Call API and extract data
  const { jobs, loading, totalResults, resultsPerPage } = useFetchData({
    textToFilter,
    filtersValue,
    currentPage,
  });

  const totalPages = Math.ceil(totalResults / resultsPerPage);
  // console.log("Total pages:", totalPages);

  return (
    <>
      <main>
        <SearchForm
          setTextToFilter={setTextToFilter}
          filtersValue={filtersValue}
          setFiltersValue={setFiltersValue}
          setCurrentPage={setCurrentPage}
          initialText={textToFilter}
          initialTechnology={filtersValue.technology}
          initialLocation={filtersValue.location}
          initialExperience={filtersValue.experience}
        />
        {loading === true ? (
          <p className="loading">Cargando...</p>
        ) : (
          <JobList data={jobs.data} />
        )}
        <PaginationBar
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
        />
      </main>
    </>
  );
}

export default Jobs;
