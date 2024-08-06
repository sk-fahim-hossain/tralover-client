import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './components/routes/Routes.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@smastrom/react-rating/style.css'
import PlaceProvider from './context/PlaceProvider.jsx'
import AuthProvider from './context/AuthProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PlaceProvider>
      <AuthProvider>
        <RouterProvider router={router}>
        </RouterProvider>
      </AuthProvider>
    </PlaceProvider>
  </React.StrictMode>,
)
