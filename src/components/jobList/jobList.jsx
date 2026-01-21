import { useId } from "react";
import("./jobList.css");

function JobList({ data }) {
  const generateUID = useId();

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
            <button className="job-section__article-button">Aplicar</button>
          </article>
        ))}
      </section>
    </>
  );
}

export default JobList;
