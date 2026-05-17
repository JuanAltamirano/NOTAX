import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/LoginPage';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';



function App() {
  return (
    <Routes>
      {/* Ruta para el Home con el simulador */}
      <Route path="/" element={<Home />} />
      
      {/* Ruta para el Login */}
      <Route path="/login" element={<Login />} />
      
      {/* Ruta para el Registro */}
      <Route path="/register" element={<Register />} />

      <Route path="/dashboard" element={<Dashboard />} />
      
    </Routes>
  );
}
export default App;


