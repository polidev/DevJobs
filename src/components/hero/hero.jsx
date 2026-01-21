import SearchForm from "../searchForm/searchForm.jsx";
import "./hero.css";

function Hero() {
  return (
    <>
      <section className="hero">
        <h1>Encuentra el trabajo de tus sueños</h1>
        <p>
          Únete a la comunidad más grande de desarrolladores y encuentra tu
          próxima opórtunidad.
        </p>
        <SearchForm />
      </section>
    </>
  );
}

export default Hero;
