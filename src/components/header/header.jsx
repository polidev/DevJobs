import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import ProfilePic from "../profilePic/profilePic";
// import { useAuth } from "../../context/AuthContext";
import { useAuthStore } from "../../store/authStore.jsx";
import { useFavoritesStore } from "../../store/favoritesStore.jsx";
import "./header.css";

function Header() {
  // let service = "github";
  // let userName = "poli-code";
  // const { isLoggedIn, logIn, logOut } = useAuth();
  const { isLoggedIn, logIn, logOut } = useAuthStore();
  const { countFavorites } = useFavoritesStore();

  const totalOfFavorites = countFavorites();

  console.log(totalOfFavorites);

  return (
    <>
      <header className="header">
        <h2>
          <Link to="/">
            <img src="../src/assets/code-asterisk.svg" alt="" />
            DevJobs
          </Link>
        </h2>

        <nav>
          <NavLink
            to="/jobs"
            className={({ isActive }) =>
              isActive ? "header__nav-link--active" : ""
            }
          >
            Empleos
          </NavLink>
          <NavLink to="/profile">Perfil</NavLink>
          <p>Favorites: {totalOfFavorites} 🤍</p>
        </nav>

        <aside>
          <button>Publicar un empleo</button>
          {isLoggedIn ? (
            <button onClick={logOut}>Cerrar sesión</button>
          ) : (
            <button onClick={logIn}>Iniciar sesión</button>
          )}
          {/* <ProfilePic srvice={service} userName={userName} /> */}
        </aside>
      </header>
    </>
  );
}

export default Header;
