import Title from '../Title/Title'
import Card from './Card'
import { INTERVIEW_DATA } from './lib/const/interview'

import { cn } from '@/lib/utils/tailwindUtil'

const Interview = () => {
  return (
    <div
      area-label="직원 인터뷰"
      className={cn(
        'flex flex-col justify-start items-start gap-[24px]  px-[48px] mt-[64px]',
        'max-mobile:px-[24px] ',
      )}>
      <Title>먼저 합류한 동료들의 이야기</Title>
      <div
        className={cn(
          'grid grid-cols-3 justify-center items-center gap-[24px] w-full',
          'max-mobile:grid-cols-1',
        )}>
        {INTERVIEW_DATA.map((data) => {
          return <Card key={data.title} data={data} />
        })}
      </div>
    </div>
  )
}

export default Interview
