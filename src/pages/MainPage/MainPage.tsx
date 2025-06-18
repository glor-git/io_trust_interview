import Interview from '@/components/Interview/Interview'
import Intro from '@/components/Intro/Intro'
import MainBanner from '@/components/MainBanner/MainBanner'
import { ROLLING_BANNER_DATA } from '@/components/RollingBanner/lib/const'
import RollingBanner from '@/components/RollingBanner/RollingBanner'
import { cn } from '@/lib/utils/tailwindUtil'

const MainPage = () => {
  return (
    <div
      className={cn('flex flex-col justify-start items-start w-full h-full')}>
      <MainBanner />
      <Intro />
      <Interview />
      <div className={cn('w-full h-[240px] mt-[64px]', 'max-mobile:h-[170px]')}>
        <RollingBanner speed={50000} gap={56}>
          {ROLLING_BANNER_DATA.map((src, index) => (
            <img
              key={index}
              src={src}
              className={cn('inline h-full rounded-[8px]')}
              alt={`Investor ${index + 1}`}
            />
          ))}
        </RollingBanner>
      </div>
    </div>
  )
}

export default MainPage
