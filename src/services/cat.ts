import { useQuery } from '@tanstack/react-query'

import { catService } from './client'

export async function fetchCatPhotos() {
  try {
    const { data } = await catService.get<Cat.Item[]>('images/search', {
      params: {
        limit: 10,
      },
    })

    return data
  } catch (error) {
    return Promise.reject(error)
  }
}

export const useCatPhotos = (props?: { limit?: number }) => {
  const limit = props?.limit || 10

  return useQuery({
    queryKey: ['images', 'search', limit],
    queryFn: fetchCatPhotos,
  })
}
