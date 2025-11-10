import { createRoot } from 'react-dom/client'
import './index.css'
import { createRoutesFromElements, createBrowserRouter, Route, RouterProvider } from 'react-router'
import Layout from './Layout.jsx'
import { Clock, StopWatch, Timer } from './Components/index.js'

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='/' element={<Clock />} />
      <Route path='/timer' element={<Timer />} />
      <Route path='/stop-watch' element={<StopWatch />} />
    </Route>
  )
)


createRoot(document.getElementById('root')).render(
  <RouterProvider router={routes} />
)
