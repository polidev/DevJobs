import { useState, useEffect } from "react";

export function useFetchJobId({ jobId }) {
  const [jobData, setJobData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchJobId() {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(
          `https://jscamp-api.vercel.app/api/jobs/${jobId}`,
        );
        if (!response.ok) {
          throw new Error(`Error ${response.status}: Trabajo no encontrado`);
        }

        const data = await response.json();
        setJobData(data);
      } catch (error) {
        console.error("Error fetching job data:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchJobId();
    // console.log("este es el JobData", jobData);
  }, [jobId]);

  return { jobData, loading, error };
}
