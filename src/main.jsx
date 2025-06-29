import { RouterProvider } from "react-router-dom";
import appRouter from "./Swigy.jsx";
import "./style.css";
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom/client';
import appStore from './utils/appStore.jsx'; // Your Redux store
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={appStore}>
      <RouterProvider router={appRouter} />
    </Provider>
  </React.StrictMode>
);
