import { useState, useEffect } from "react";

export function useFetchData({ textToFilter, filtersValue, currentPage }) {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  // Set the total pages based on the total results
  const [totalResults, setTotalResults] = useState(0);
  // Define how many results per page will appear
  const resultsPerPage = 5;

  useEffect(() => {
    async function fetchJobs() {
      try {
        setLoading(true);

        // filters & params
        const searchParams = new URLSearchParams();
        // Text to filter
        if (textToFilter) searchParams.append("text", textToFilter);
        // Filters value
        if (filtersValue.technology)
          searchParams.append("technology", filtersValue.technology);
        if (filtersValue.location)
          searchParams.append("type", filtersValue.location);
        if (filtersValue.experience)
          searchParams.append("level", filtersValue.experience);

        const offset = (currentPage - 1) * resultsPerPage;
        searchParams.append("limit", resultsPerPage);
        searchParams.append("offset", offset);

        const queryParams = searchParams.toString();

        console.log(queryParams);

        // const response = await fetch(
        //   `https://jscamp-api.vercel.app/api/jobs?${queryParams}`,
        // );

        const response = await fetch("../data/api.json");
        const data = await response.json();

        setJobs(data);
        setTotalResults(data.total);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchJobs();
  }, [textToFilter, filtersValue, currentPage]);

  // console.log(jobs); // Triple print due to multiple sets

  return { jobs, loading, totalResults, resultsPerPage };
}
