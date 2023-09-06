import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './router/Home.jsx';
import Aparelhos from './router/Aparelhos.jsx';
import VisualizarAparelho from './router/VisualizarAparelho.jsx';
import Error404 from './router/Error404.jsx';

const routes = createBrowserRouter([
  { path: '/', element: <App />, errorElemnt:<Error404/>, children: [
      {path: '/', element: <Home/>},
      {path: '/aparelhos', elemet: <Aparelhos/>},
      {path: '/aprelho/:id', element: <VisualizarAparelho/>}
    ]  
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes}/>
  </React.StrictMode>,
)
