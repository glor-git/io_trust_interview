import { Outlet } from 'react-router-dom'

import Header from './Header/Header'

import { cn } from '@/lib/utils/tailwindUtil'

const Layout = () => {
  return (
    <div
      className={cn('flex flex-col justify-start items-center w-full h-full')}>
      <Header />
      <main className={cn('w-full h-full')}>
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
