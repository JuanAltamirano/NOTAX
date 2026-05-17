const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <h1>NOTAX</h1>
      </div>
      <nav className="sidebar-nav">
        <ul>
          {/* Implementación con anclas para prototipado; sustituir por <Link> en fase de ruteo */}
          <li><a href="#dashboard">Panel Principal</a></li>
          <li><a href="#simulator">Simulador Predictivo</a></li>
          <li><a href="#grades">Mis Calificaciones</a></li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;