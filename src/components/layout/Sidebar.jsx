import './Sidebar.css';

import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h2>NOTAX</h2>
      </div>
      <nav className="sidebar-nav">
        <Link to="/dashboard">Resumen General</Link>
        <Link to="/materias">Mis Materias</Link>
        <Link to="/simulador">Simulador Avanzado</Link>
        <Link to="/configuracion">Ajustes</Link>
      </nav>
      <div className="sidebar-footer">
        <Link to="/">Cerrar Sesión</Link>
      </div>
    </aside>
  );
}

export default Sidebar;