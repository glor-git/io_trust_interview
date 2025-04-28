import axios from 'axios'

import { authAtom } from '@/lib/state/auth'
import { globalStore } from '@/lib/state/store'
import { errorHandler } from '@/lib/utils/errorUtil.ts'

const accessToken = globalStore.get(authAtom).accessToken

export const catService = axios.create({
  baseURL: 'https://api.thecatapi.com/v1',
  headers: {
    'Content-Type': 'application/json',
    ...(accessToken
      ? { Authorization: `Bearer ${globalStore.get(authAtom).accessToken}` }
      : {}),
  },
})

catService.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

catService.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    throw errorHandler(error)
  },
)
