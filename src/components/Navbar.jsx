import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">NOTAX</div>
      <div className="nav-buttons">
        <Link to="/login"><button>Iniciar sesión</button></Link>
        <Link to="/register"><button className="btn-register">Crear cuenta</button></Link>
      </div>
    </nav>
  );
}
export default Navbar;