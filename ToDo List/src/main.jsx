import { Provider } from 'react-redux'
import { store } from './App/store.js'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements, Outlet } from 'react-router-dom'
import './index.css'
import Layout from './layout.jsx'
import { About, Home } from './Components/index.js'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='/Home' element={<Home />} />
      <Route path='/About' element={<About />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
)
