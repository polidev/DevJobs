import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/header.jsx";
import Footer from "./components/footer/footer.jsx";

// import Home from "./pages/home.jsx";
// import Jobs from "./pages/jobs.jsx";
// import JobDetail from "./pages/jobDetail.jsx";
// import NotFound from "./pages/404.jsx";

// const currentPath = window.location.pathname;

// import AuthProvider from "./context/AuthContext.jsx";

const Home = lazy(() => import("./pages/home.jsx"));
const Jobs = lazy(() => import("./pages/jobs.jsx"));
const JobDetail = lazy(() => import("./pages/jobDetail.jsx"));
const NotFound = lazy(() => import("./pages/404.jsx"));

function App() {
  return (
    <>
      <Header />
      <Suspense fallback={<p>Cargando...</p>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/jobs/:jobId" element={<JobDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
