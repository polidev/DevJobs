import { Link } from "react-router-dom";
import { useId } from "react";
import { useAuthStore } from "../../store/authStore";
import { useFavoritesStore } from "../../store/favoritesStore";
import("./jobList.css");

function AddFavoriteButton({ item, session }) {
  const { toggleFavorite, isFavorite } = useFavoritesStore();

  return (
    <button
      className="job-section__article-favorite"
      onClick={() => toggleFavorite(item.id)}
      // Es recomendable recargar la página al cerrar sesión
      disabled={!session}
    >
      {isFavorite(item.id) ? "❤️" : "🤍"}
    </button>
  );
}

function JobList({ data }) {
  const generateUID = useId();
  const { isLoggedIn } = useAuthStore();
  console.log(isLoggedIn);

  const handleBubblingClick = (event) => {
    const clickedElement = event.target;

    if (clickedElement.classList.contains("job-section__article-button")) {
      clickedElement.textContent = "¡Aplicado!";
      clickedElement.classList.add("job-section__article-button--applied");
    }
  };

  return (
    <>
      <section className="job-section" onClick={handleBubblingClick}>
        {data.length === 0 && (
          <p className="job-section__no-found-text">
            No se han encontrado empleos que coincidan con el criterio de
            busqueda.
          </p>
        )}
        {data.map((item) => (
          <article
            key={item.id}
            id={generateUID}
            className="job-section__article"
          >
            <header>
              <h4>{item.titulo}</h4>
              <span>{item.empresa}</span> | <span>{item.data.modalidad}</span>
              <p>{item.descripcion}</p>
            </header>
            <span className="job-section__apply">
              <Link to={`/jobs/${item.id}`}>Ver detalles</Link>
              <button
                disabled={!isLoggedIn}
                className="job-section__article-button"
              >
                Aplicar
              </button>
              <AddFavoriteButton item={item} session={isLoggedIn} />
            </span>
          </article>
        ))}
      </section>
    </>
  );
}

export default JobList;
