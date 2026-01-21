import("./sectionWhy.css");
import WhyList from "../whyList/whyList.jsx";

function SectionWhy() {
  return (
    <>
      <section className="section-why">
        <header>
          <h3>¿Por qué DevJobs?</h3>
          <p>
            DevJobs es la principal bolsa de trabajo para desarrolladores.
            Conecta,os a los desarrolladores con las mejores empresas del mundo.
          </p>
        </header>
        <footer>
          <WhyList />
        </footer>
      </section>
    </>
  );
}

export default SectionWhy;
