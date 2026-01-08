import { Outlet } from 'react-router-dom'
import { Header } from '@/components/organisms/header'
import type { ReactElement } from 'react'

const Layout = (): ReactElement => {
  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      <Header />
      <Outlet />
    </div>
  )
}

export { Layout }

