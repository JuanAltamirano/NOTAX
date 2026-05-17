import "../styles/LoginRegister.css";
import { Link } from "react-router-dom"

function Register() {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1>Crear cuenta</h1>

        <div className="form-group">
          <label htmlFor="name">Nombre completo:</label>
          <input type="text" id="name" name="name" />
        </div>

        <div className="form-group">
          <label htmlFor="email">Correo electrónico:</label>
          <input type="email" id="email" name="email" />
        </div>

        <div className="form-group">
          <label htmlFor="password">Contraseña:</label>
          <input type="password" id="password" name="password" />
        </div>

        <div className="form-group">
          <label htmlFor="confirmPassword">Confirmar contraseña:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
          />
        </div>

        <button>Crear cuenta</button>
        <Link to="/" className="back-link">
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}

export default Register;