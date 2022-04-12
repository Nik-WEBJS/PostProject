import React from "react";
import {StrictMode} from 'react';
import "bootstrap/dist/css/bootstrap.css";
import App from "./app";
import {createRoot} from 'react-dom/client';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
    <StrictMode>
      <App />
    </StrictMode>,
  );