import Intro from '@/components/Intro/Intro'
import MainBanner from '@/components/MainBanner/MainBanner'
import { cn } from '@/lib/utils/tailwindUtil'

const MainPage = () => {
  return (
    <div className={cn('w-full h-full')}>
      <MainBanner />
      <Intro />
    </div>
  )
}

export default MainPage
