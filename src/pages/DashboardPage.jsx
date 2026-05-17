import { useState } from "react";

import Materias from "../dashboard/Materias";
import Notas from "../dashboard/Notas";
import Promedios from "../dashboard/Promedios";
import Configuracion from "../dashboard/Configuracion";

import "./Dashboard.css";

function Dashboard() {

  const [section, setSection] = useState("materias");

  return (
    <div className="dashboard">

      {/* SIDEBAR */}
      <aside className="sidebar">

        <div className="user">
          <h3>Juan P.</h3>
        </div>

        <nav>

          <button
            className="menu-btn"
            onClick={() => setSection("materias")}
          >
            Materias
          </button>

          <button
            className="menu-btn"
            onClick={() => setSection("notas")}
          >
            Notas
          </button>

          <button
            className="menu-btn"
            onClick={() => setSection("promedios")}
          >
            Promedios
          </button>

          <button
            className="menu-btn"
            onClick={() => setSection("configuracion")}
          >
            Configuración
          </button>

        </nav>
      </aside>

      {/* CONTENIDO */}
      <main className="content">

        {section === "materias" && <Materias />}

        {section === "notas" && <Notas />}

        {section === "promedios" && <Promedios />}

        {section === "configuracion" && <Configuracion />}

      </main>

    </div>
  );
}

export default Dashboard;