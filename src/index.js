import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AppProvider } from './context.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Bu render işlemi, uygulamanın başlatılması ve bileşenlerin hiyerarşik olarak düzenlenmesi için kullanılır. 
    <AppProvider> bileşeni, alt bileşenlere global durumu aktarırken <App> bileşeni, uygulamanın ana yapısını oluşturur. */}
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);
