import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '@/components/organisms/header'
import { Loader } from '@/components/atoms/loader'
import type { ReactElement } from 'react'

const Layout = (): ReactElement => {
  const [isLoading, setIsLoading] = useState(true)

  const handleLoaderComplete = (): void => {
    setIsLoading(false)
  }

  return (
    <div className="min-h-screen bg-[var(--color-bg-primary)]">
      {isLoading && <Loader onComplete={handleLoaderComplete} />}
      <Header />
      <Outlet />
    </div>
  )
}

export { Layout }

