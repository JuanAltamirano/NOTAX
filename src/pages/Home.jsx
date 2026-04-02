import Navbar from "../components/Navbar"
import { Link } from "react-router-dom"

function Home() {

  return (

    <div>

      <Navbar />

      <div className="hero">

        <h1>Gestiona y simula tus notas universitarias</h1>

        <p>
          Con NOTAX puedes registrar tus materias,
          calcular tu promedio y saber cuánto necesitas
          para aprobar tus cursos.
        </p>

        <Link to="/register">
          <button className="cta">
            Crear cuenta gratis
          </button>
        </Link>

      </div>

    </div>

  )

}

export default Home