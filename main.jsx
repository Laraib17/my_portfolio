import { createRoot } from 'react-dom/client'
import App from './src/App.jsx'
import { BrowserRouter } from 'react-router-dom'

import "./index.css"

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  );
}
else{
  alert("Root element not found");
}