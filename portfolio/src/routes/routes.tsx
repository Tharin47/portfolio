import { createBrowserRouter } from 'react-router-dom'
import { Layout } from '@/components/templates/layout'
import { Home } from '@/pages/home'
import { About } from '@/pages/about'
import { Resume } from '@/pages/resume'
import { Contact } from '@/pages/contact'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'resume',
        element: <Resume />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
    ],
  },
])

export { router }

