import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CategoryProvider,DateProvider } from "./context"
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CategoryProvider>
        <DateProvider>
          <App />
        </DateProvider>
      </CategoryProvider>
    </BrowserRouter>
  </React.StrictMode>
);


