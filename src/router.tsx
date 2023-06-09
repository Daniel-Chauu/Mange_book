import { createBrowserRouter } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Login from './pages/Login'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout>Main</MainLayout>
  },
  {
    path: '/login',
    element: <Login></Login>
  }
])
