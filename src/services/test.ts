import { useQuery } from '@tanstack/react-query'

export async function getTest() {
  return new Promise((resolve) => {
    return setTimeout(() => resolve({ user: 'test' }), 500)
  })
}

export function useTest() {
  return useQuery({
    queryKey: ['test'],
    queryFn: getTest,
  })
}
