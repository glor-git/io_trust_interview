import { atomWithStorage } from 'jotai/utils'

import { AUTH_STORAGE_KEY } from '@/lib/const/storageConst.ts'

interface AuthState {
  isLoggedIn: boolean
  accessToken: string | null
}

export const authAtom = atomWithStorage<AuthState>(AUTH_STORAGE_KEY, {
  isLoggedIn: false,
  accessToken: null,
})
