import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles/global.css';

const rootElement = document.getElementById('root');
// Inicialización del root estándar de React 19
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);