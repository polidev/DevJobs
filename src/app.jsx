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
const Profile = lazy(() => import("./pages/profile.jsx"));
const Login = lazy(() => import("./pages/login.jsx"));
const Register = lazy(() => import("./pages/register.jsx"));
const ProtectedRoute = lazy(
  () => import("./components/protectedRoute/protectedRoute.jsx"),
);

function App() {
  return (
    <>
      <Header />
      <Suspense fallback={<p>Cargando...</p>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/jobs/:jobId" element={<JobDetail />} />
          <Route
            path="/profile"
            element={
              <ProtectedRoute redirectTo="/login">
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
