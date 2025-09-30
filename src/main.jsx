import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

import "./index.css"

const rootElement = document.getElementById('root');
<p>hello world</p>
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