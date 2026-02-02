import { Link } from "react-router-dom";

function NotFound() {
  return (
    <>
      <main>
        <section className="not-found__section">
          <h2>404</h2>
          <p>Página no encontrada</p>
          <Link to="/" className="back-button">
            <button>Regresar</button>
          </Link>
        </section>
      </main>
    </>
  );
}

export default NotFound;
