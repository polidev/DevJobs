import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import ProfilePic from "../profilePic/profilePic";
import "./header.css";

function Header() {
  // let service = "github";
  // let userName = "poli-code";

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
          <button>Iniciar sesión</button>
          {/* <ProfilePic srvice={service} userName={userName} /> */}
        </aside>
      </header>
    </>
  );
}

export default Header;
