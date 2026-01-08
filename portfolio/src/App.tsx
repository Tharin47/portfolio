import type { ReactElement } from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from '@/routes/routes'
import './App.css'

const App = (): ReactElement => {
  return <RouterProvider router={router} />
}

export { App }
