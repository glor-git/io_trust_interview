import { ReactNode } from 'react'
import { Provider } from 'jotai'

import { globalStore } from '@/lib/state/store'

const JotaiProvider = ({ children }: { children: ReactNode }) => {
  return <Provider store={globalStore}>{children}</Provider>
}

export default JotaiProvider
