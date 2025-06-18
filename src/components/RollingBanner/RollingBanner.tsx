import { useRef, useState } from 'react'

import { cn } from '@/lib/utils/tailwindUtil'

interface RollingBannerProps {
  children: React.ReactNode
  speed?: number
  contentClassName?: string
  isReverse?: boolean
  gap?: number
}

const RollingBanner = ({ children, speed = 1000, gap }: RollingBannerProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const [isHover, setIsHover] = useState(false)
  return (
    <div ref={containerRef} className={cn('h-full w-full')}>
      <div
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        ref={contentRef}
        className={cn('flex h-full whitespace-nowrap')}
        style={{
          width: '-webkit-max-content',
          animation: `rolling-banner ${speed}ms linear infinite`,
          animationPlayState: isHover ? 'paused' : 'running',
          gap,
        }}>
        {children}
        {children}
      </div>
    </div>
  )
}

export default RollingBanner
