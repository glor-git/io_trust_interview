import { useAtom } from 'jotai'
import { useResetAtom } from 'jotai/utils'

import { authAtom } from '@/lib/state/auth'

const useAuth = () => {
  const [auth, setAuth] = useAtom(authAtom)
  const resetAuthAtom = useResetAtom(authAtom)
  const { isLoggedIn, accessToken } = auth

  const login = (accessToken: string) => {
    setAuth({
      isLoggedIn: true,
      accessToken,
    })
  }

  const logout = () => {
    resetAuthAtom()
  }

  return {
    isLoggedIn,
    accessToken,
    login,
    logout,
  }
}

export default useAuth
