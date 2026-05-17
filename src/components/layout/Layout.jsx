import Sidebar from './Sidebar';
// En futuras implementaciones con Router, importar { Outlet } de 'react-router-dom'

const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      <Sidebar />
      <main className="main-content" role="main">
        {/* En el futuro, {children} puede ser reemplazado por <Outlet /> */}
        {children}
      </main>
    </div>
  );
};

export default Layout;