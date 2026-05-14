import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { useState } from "react";

function Home() {
  const [nota1, setNota1] = useState("");
  const [porcentaje1, setPorcentaje1] = useState("");

  const [nota2, setNota2] = useState("");
  const [porcentaje2, setPorcentaje2] = useState("");

  const [nota3, setNota3] = useState("");
  const [porcentaje3, setPorcentaje3] = useState("");

  const [mostrarTercera, setMostrarTercera] = useState(false);

  const [resultado, setResultado] = useState(null);

  const calcular = () => {
    const n1 = parseFloat(nota1) || 0;
    const p1 = parseFloat(porcentaje1) || 0;

    const n2 = parseFloat(nota2) || 0;
    const p2 = parseFloat(porcentaje2) || 0;

    const n3 = parseFloat(nota3) || 0;
    const p3 = parseFloat(porcentaje3) || 0;

    const porcentajeUsado = p1 + p2 + p3;

    if (porcentajeUsado >= 100) {
      setResultado("El porcentaje debe ser menor a 100%");
      return;
    }

    const acumulado =
      (n1 * p1) / 100 +
      (n2 * p2) / 100 +
      (n3 * p3) / 100;

    const restante = 100 - porcentajeUsado;

    const necesaria = (3.0 - acumulado) / (restante / 100);

    setResultado(
      `Necesitas sacar ${necesaria.toFixed(
        2
      )} en el ${restante}% restante para aprobar.`
    );
  };

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
          <button className="cta">Crear cuenta gratis</button>
        </Link>
      </div>

      <div className="demo-calculator">
        <h2>Prueba el simulador</h2>

        <div className="input-row">
          <input
            placeholder="Nota 1"
            value={nota1}
            onChange={(e) => setNota1(e.target.value)}
          />

          <input
            placeholder="% Nota 1"
            value={porcentaje1}
            onChange={(e) => setPorcentaje1(e.target.value)}
          />
        </div>

        <div className="input-row">
          <input
            placeholder="Nota 2"
            value={nota2}
            onChange={(e) => setNota2(e.target.value)}
          />

          <input
            placeholder="% Nota 2"
            value={porcentaje2}
            onChange={(e) => setPorcentaje2(e.target.value)}
          />
        </div>

        {!mostrarTercera && (
          <button onClick={() => setMostrarTercera(true)}>
            Agregar tercera nota (opcional)
          </button>
        )}

        {mostrarTercera && (
          <div className="input-row">
            <input
              placeholder="Nota 3"
              value={nota3}
              onChange={(e) => setNota3(e.target.value)}
            />

            <input
              placeholder="% Nota 3"
              value={porcentaje3}
              onChange={(e) => setPorcentaje3(e.target.value)}
            />
          </div>
        )}

        <button onClick={calcular}>Calcular</button>

        {resultado && <p>{resultado}</p>}
      </div>
    </div>
  );
}

export default Home;