import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import "./normalize.css";

import Home from "./pages/home.jsx";
import Jobs from "./pages/jobs.jsx";
import JobDetail from "./pages/jobDetail.jsx";
import NotFound from "./pages/404.jsx";

// const currentPath = window.location.pathname;

createRoot(document.getElementById("root")).render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/jobs/:jobID" element={<JobDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </>
);
