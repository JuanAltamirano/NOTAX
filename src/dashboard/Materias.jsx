import { useState } from "react";

import "./Ventanas.css";

function Materias() {

  const [materia, setMateria] = useState("");

  const [materias, setMaterias] = useState([
    {
      nombre: "Programación",
      promedio: 3.8,
    },

    {
      nombre: "Matemáticas",
      promedio: 3.2,
    },
  ]);

  const agregarMateria = () => {

    if (materia.trim() === "") return;

    const nuevaMateria = {
      nombre: materia,
      promedio: 0,
    };

    setMaterias([...materias, nuevaMateria]);

    setMateria("");
  };

  return (
    <div className="window">

      <h1>Materias</h1>

      {/* FORMULARIO */}
      <div className="form-add">

        <input
          type="text"
          placeholder="Nombre de la materia"
          value={materia}
          onChange={(e) => setMateria(e.target.value)}
        />

        <button onClick={agregarMateria}>
          Agregar
        </button>

      </div>

      {/* LISTA */}
      <div className="subjects-list">

        {materias.map((item, index) => (

          <div className="subject-card" key={index}>

            <span>{item.nombre}</span>

            <span>
              Promedio: {item.promedio}
            </span>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Materias;