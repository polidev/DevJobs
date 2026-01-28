import { useParams } from "react-router-dom";
import { useFetchJobId } from "../hooks/useFetchJobId.jsx";
import snarkdown from "snarkdown";

import Header from "../components/header/header.jsx";
import Footer from "../components/footer/footer.jsx";

function JobDetail() {
  const { jobId } = useParams();
  const { jobData, loading } = useFetchJobId({ jobId });

  if (loading) return <p>Cargando...</p>;
  if (jobData.error) return <p>No se encontró información del trabajo.</p>;

  // const html = snarkdown(jobData);

  return (
    <>
      <Header />
      <main className="">
        <section>
          <aside>
            <h2>{jobData.titulo}</h2>
            <h3>{jobData.empresa}</h3>
          </aside>
          <button>Aplicar ahora</button>
        </section>

        <section>
          <h4>Descripción del puesto</h4>
          <p>{jobData.content.description}</p>

          <h4>Responsabilidades</h4>
          <p
            dangerouslySetInnerHTML={{
              __html: snarkdown(jobData.content.responsibilities),
            }}
          />

          <h4>Requisitos</h4>
          <p
            dangerouslySetInnerHTML={{
              __html: snarkdown(jobData.content.requirements),
            }}
          />

          <h4>Acerca de la empresa</h4>
          <p>{jobData.content.about}</p>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default JobDetail;
