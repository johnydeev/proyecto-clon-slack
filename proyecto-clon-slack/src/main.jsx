import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import { WorkspaceContextProvider } from './Context/WorkspaceContext.jsx';
import App from './App.jsx'
import './global.css'

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <WorkspaceContextProvider>
      <App />
    </WorkspaceContextProvider>
  </BrowserRouter>
);
