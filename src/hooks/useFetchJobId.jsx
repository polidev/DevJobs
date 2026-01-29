import { useState, useEffect } from "react";

export function useFetchJobId({ jobId }) {
  const [jobData, setJobData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchJobId() {
      try {
        setLoading(true);

        const response = await fetch(
          `https://jscamp-api.vercel.app/api/jobs/${jobId}`,
        );
        const data = await response.json();

        setJobData(data);
      } catch (error) {
        console.error("Error fetching job data:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchJobId();
    console.log("este es el JobData", jobData);
  }, [jobId]);

  return { jobData, loading };
}
