import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";

export function useUrlSync({
  textToFilter,
  filtersValue,
  currentPage,
  setSearchParams,
}) {
  // const navigate = useNavigate();

  useEffect(() => {
    // const searchParams = new URLSearchParams();
    setSearchParams((params) => {
      if (textToFilter) params.set("text", textToFilter);

      if (filtersValue.technology)
        params.set("technology", filtersValue.technology);

      if (filtersValue.location) params.set("type", filtersValue.location);

      if (filtersValue.experience) params.set("level", filtersValue.experience);

      if (currentPage > 1) params.set("page", currentPage);

      return params;
    });

    // const newUrl = searchParams.toString()
    //   ? `${window.location.pathname}?${searchParams.toString()}`
    //   : window.location.pathname;

    // const newUrl = searchParams.toString() ? `?${searchParams.toString()}` : "";

    // navigate(newUrl, { replace: true });
  }, [textToFilter, filtersValue, currentPage, setSearchParams]);
}
