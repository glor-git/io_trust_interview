import { useLocation } from 'react-router-dom'

const useHeader = () => {
  const { pathname } = useLocation()

  return {
    currentPath: pathname,
  }
}

export default useHeader
