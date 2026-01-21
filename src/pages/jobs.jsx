import { useFetchData } from "../hooks/useFetchData.jsx";
import { useState } from "react";
import { useUrlSync } from "../hooks/useUrlSync.jsx";

import Header from "../components/header/header.jsx";
import Footer from "../components/footer/footer.jsx";
import SearchForm from "../components/searchForm/searchForm.jsx";
import JobList from "../components/jobList/jobList.jsx";
import PaginationBar from "../components/paginationBar/paginationBar.jsx";

function Jobs() {
  // Set searchForm props
  // const [textToFilter, setTextToFilter] = useState("");
  const [textToFilter, setTextToFilter] = useState(() => {
    const searchParams = new URLSearchParams(window.location.search);
    return searchParams.get("text") || "";
  });
  // Set jobSelect props
  const [filtersValue, setFiltersValue] = useState(() => {
    const searchParams = new URLSearchParams(window.location.search);
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
  useUrlSync({ textToFilter, filtersValue, currentPage });

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
      <Header />
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
      <Footer />
    </>
  );
}

export default Jobs;
