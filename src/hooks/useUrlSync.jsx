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
      textToFilter ? params.set("text", textToFilter) : params.delete("text");

      filtersValue.technology
        ? params.set("technology", filtersValue.technology)
        : params.delete("technology");

      filtersValue.location
        ? params.set("type", filtersValue.location)
        : params.delete("type");

      filtersValue.experience
        ? params.set("level", filtersValue.experience)
        : params.delete("level");

      currentPage >= 1
        ? params.set("page", currentPage)
        : params.delete("page");

      return params;
    });

    // const newUrl = searchParams.toString()
    //   ? `${window.location.pathname}?${searchParams.toString()}`
    //   : window.location.pathname;

    // const newUrl = searchParams.toString() ? `?${searchParams.toString()}` : "";

    // navigate(newUrl, { replace: true });
  }, [textToFilter, filtersValue, currentPage, setSearchParams]);
}
