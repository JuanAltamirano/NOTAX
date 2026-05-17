import DashboardLayout from '../components/layout/DashboardLayout';

function Dashboard() {
  return (
    <DashboardLayout>
      <header className="content-header">
        <h1>Mi Panel de Calificaciones</h1>
        <p>Bienvenido de nuevo a NOTAX. Aquí está el resumen de tu semestre.</p>
      </header>
      
      <div className="stats-grid">
        <div className="stat-card">
          <h3>Promedio Actual</h3>
          <p className="stat-value">4.2</p>
        </div>
        <div className="stat-card">
          <h3>Materias Aprobadas</h3>
          <p className="stat-value">8 / 10</p>
        </div>
        <div className="stat-card">
          <h3>Créditos Inscritos</h3>
          <p className="stat-value">16</p>
        </div>
      </div>

      <div className="recent-activity">
        <h2>Materias Recientes</h2>
        <div className="materia-item">
          <span>Cálculo Diferencial</span>
          <strong>4.5</strong>
        </div>
        <div className="materia-item">
          <span>Programación Web</span>
          <strong>3.8</strong>
        </div>
      </div>
    </DashboardLayout>
  );
}

// ESTA LÍNEA ES VITAL PARA EVITAR EL SYNTAXERROR
export default Dashboard;