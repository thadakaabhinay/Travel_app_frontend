import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CategoryProvider,DateProvider,FilterProvider,AuthProvider,WishlistProvider } from "./context"
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CategoryProvider>
        <DateProvider>
          <FilterProvider>
            <AuthProvider>
              <WishlistProvider>
                <App />
              </WishlistProvider>
            </AuthProvider>
          </FilterProvider>
        </DateProvider>
      </CategoryProvider>
    </BrowserRouter>
  </React.StrictMode>
);


