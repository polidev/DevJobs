import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function useUrlSync({ textToFilter, filtersValue, currentPage }) {
  const navigate = useNavigate();

  useEffect(() => {
    const searchParams = new URLSearchParams();

    if (textToFilter) searchParams.append("text", textToFilter);
    if (filtersValue.technology)
      searchParams.append("technology", filtersValue.technology);
    if (filtersValue.location)
      searchParams.append("type", filtersValue.location);
    if (filtersValue.experience)
      searchParams.append("level", filtersValue.experience);
    if (currentPage > 1) searchParams.append("page", currentPage);

    // const newUrl = searchParams.toString()
    //   ? `${window.location.pathname}?${searchParams.toString()}`
    //   : window.location.pathname;

    const newUrl = searchParams.toString() ? `?${searchParams.toString()}` : "";

    navigate(newUrl, { replace: true });
  }, [textToFilter, filtersValue, currentPage, navigate]);
}
