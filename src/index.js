import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter } from "react-router-dom"
import { Rutas } from './routes/Rutas';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Rutas/>
    </BrowserRouter>
  </React.StrictMode>
);

//token de acceso a git hub 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

