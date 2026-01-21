import { useParams } from "react-router-dom";

function JobDetail() {
  const { jobID } = useParams();

  return (
    <>
      <h1>JobDetail</h1>
      <p>La id es {jobID}</p>
    </>
  );
}

export default JobDetail;
