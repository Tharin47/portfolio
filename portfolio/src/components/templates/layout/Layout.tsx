import { useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Header } from '@/components/organisms/header'
import { Footer } from '@/components/organisms/footer'
import { Loader } from '@/components/atoms/loader'
import type { ReactElement } from 'react'

const Layout = (): ReactElement => {
  const [isLoading, setIsLoading] = useState(true)
  const location = useLocation()

  const handleLoaderComplete = (): void => {
    setIsLoading(false)
  }

  // Don't show footer on home page
  const showFooter = location.pathname !== '/'

  return (
    <div className="min-h-screen bg-[var(--color-bg-primary)] flex flex-col">
      {isLoading && <Loader onComplete={handleLoaderComplete} />}
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      {showFooter && <Footer />}
    </div>
  )
}

export { Layout }

