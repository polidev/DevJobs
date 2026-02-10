import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import ProfilePic from "../profilePic/profilePic";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import "./header.css";

function Header() {
  // let service = "github";
  // let userName = "poli-code";
  const { isLoggedIn, logIn, logOut } = useContext(AuthContext);

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
