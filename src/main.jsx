import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import "./index.css";
import "./normalize.css";

// import Home from "./pages/home.jsx";
// import Jobs from "./pages/jobs.jsx";
// import JobDetail from "./pages/jobDetail.jsx";
// import NotFound from "./pages/404.jsx";

// const currentPath = window.location.pathname;

const Home = lazy(() => import("./pages/home.jsx"));
const Jobs = lazy(() => import("./pages/jobs.jsx"));
const JobDetail = lazy(() => import("./pages/jobDetail.jsx"));
const NotFound = lazy(() => import("./pages/404.jsx"));

createRoot(document.getElementById("root")).render(
  <>
    <BrowserRouter>
      <Suspense fallback={<p>Cargando...</p>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/jobs/:jobId" element={<JobDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  </>,
);
