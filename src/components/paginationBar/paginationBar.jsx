import "./paginationBar.css";

function PaginationBar({ currentPage, totalPages, setCurrentPage }) {
  // Build a dynamic array
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  // Handle previous click
  const handlePrevClick = (event) => {
    event.preventDefault();
    if (!isFirstPage) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Handle next click
  const handelNextClick = (event) => {
    event.preventDefault();
    if (!isLastPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  // handle onClick in specific page
  const handleChangePage = (event, page) => {
    event.preventDefault();
    // If not the current page set the selected page
    if (page !== currentPage) {
      setCurrentPage(page);
    }
  };

  const buildPageUrl = (page) => {
    const url = new URL(window.location);
    url.searchParams.set("page", page);
    return `${url.pathname}?${url.searchParams.toString()}`;
  };

  return (
    <>
      <section className="pagination">
        <a
          href={buildPageUrl(currentPage - 1)}
          onClick={handlePrevClick}
          className={isFirstPage ? "inactive" : ""}
        >
          &lt;
        </a>

        {pages.map((page) => (
          <a
            href={buildPageUrl(page)}
            key={page}
            className={currentPage === page ? "is-active" : ""}
            onClick={(event) => handleChangePage(event, page)}
          >
            {page}
          </a>
        ))}

        <a
          href={buildPageUrl(currentPage + 1)}
          onClick={handelNextClick}
          className={isLastPage ? "inactive" : ""}
        >
          &gt;
        </a>
      </section>
    </>
  );
}

export default PaginationBar;
