// src/main.jsx
import { createRoot } from 'react-dom/client'
import { Routes } from '@generouted/react-router' // O import mágico das rotas
import './index.css'

createRoot(document.getElementById('root')).render(
  <Routes />
)