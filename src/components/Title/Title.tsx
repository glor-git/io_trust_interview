import { cn } from '@/lib/utils/tailwindUtil'

const Title = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={cn('')}>
      <h4>{children}</h4>
    </div>
  )
}

export default Title
