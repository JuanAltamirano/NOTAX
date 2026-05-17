import "../styles/LoginRegister.css";
import { Link, useNavigate } from "react-router-dom"

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/dashboard");
  };


  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1>Iniciar sesión</h1>

        <div className="form-group">
          <label htmlFor="email">Correo electrónico:</label>
          <input type="email" id="email" name="email" />
        </div>

        <div className="form-group">
          <label htmlFor="password">Contraseña:</label>
          <input type="password" id="password" name="password" />
        </div>

        <button onClick={handleLogin}>Iniciar sesión</button>
        <Link to="/" className="back-link">
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}

export default Login;
