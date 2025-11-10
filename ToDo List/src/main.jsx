import { Provider } from 'react-redux'
import { store } from './App/store.js'
import React from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements } from 'react-router-dom'
import './index.css'
import Layout from './Layout.jsx'  // Fixed casing
import { About, Policy, Home, Terms_Conditions } from './Components/index.js'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />} />  // Added index route
      <Route path='home' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='privacy-policy' element={<Policy />} />
      <Route path='terms-conditions' element={<Terms_Conditions />} />
      <Route path='*' element={<Home />} />  // Catch-all route
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)
