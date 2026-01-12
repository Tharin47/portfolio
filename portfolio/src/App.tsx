import type { ReactElement } from 'react'
import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from '@/contexts/ThemeContext'
import { router } from '@/routes/routes'
import './App.css'

const App = (): ReactElement => {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export { App }
