import { useParams } from "react-router-dom";
import { useFetchJobId } from "../hooks/useFetchJobId.jsx";
import snarkdown from "snarkdown";
import "../components/jobDetail/jobDetail.css";

import Header from "../components/header/header.jsx";
import Footer from "../components/footer/footer.jsx";

function JobDetail() {
  const { jobId } = useParams();
  const { jobData, loading, error } = useFetchJobId({ jobId });

  if (loading) return <p className="job-detail__loading">Cargando...</p>;
  if (!jobData || error)
    return (
      <p className="job-detail__no-found">
        No se encontró información del trabajo.
      </p>
    );

  return (
    <>
      <Header />
      <main className="job-detail">
        <section className="job-detail__header">
          <aside className="job-detail__company-info">
            <h2 className="jobData__title">{jobData.titulo}</h2>
            <h3 className="job-detail__company">{jobData.empresa}</h3>
          </aside>
          <button className="job-detail__apply-button">Aplicar ahora</button>
        </section>
        <hr />
        <section className="job-detail__content">
          <h4 className="job-detail__subtitle">Descripción del puesto</h4>
          <p className="job-detail__description">
            {jobData.content.description}
          </p>

          <h4 className="job-detail__subtitle">Responsabilidades</h4>
          <p
            className="job-detail__responsibilities"
            dangerouslySetInnerHTML={{
              __html: snarkdown(jobData.content.responsibilities),
            }}
          />

          <h4 className="job-detail__subtitle">Requisitos</h4>
          <p
            className="job-detail__requirements"
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
