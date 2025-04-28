import { ReactNode } from 'react'

import QueryClientProvider from './QueryClientProvider'

import JotaiProvider from '@/components/provider/JotaiProvider.tsx'

const Provider = ({ children }: { children: ReactNode }) => {
  return (
    <JotaiProvider>
      <QueryClientProvider>{children}</QueryClientProvider>
    </JotaiProvider>
  )
}

export default Provider
