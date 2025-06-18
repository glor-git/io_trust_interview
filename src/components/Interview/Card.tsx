import { InterviewDataType } from './lib/const/interview'

import { cn } from '@/lib/utils/tailwindUtil'

const Card = ({ data }: { data: InterviewDataType }) => {
  return (
    <div
      className={cn(
        'h-full flex flex-col justify-start items-between gap-[24px]',
      )}>
      <a href={data.link} target="_blank">
        <img
          src={data.image}
          className={cn('aspect-372/186 w-full rounded-[16px]')}
        />
      </a>
      <div className={cn('flex flex-col justify-start items-start')}>
        <strong className={cn('text-[#393838] text-[20px] font-700')}>
          {data.title}
        </strong>
        <p className={cn('text-[#666872] text-[15px]')}>{data.content}</p>
      </div>
    </div>
  )
}

export default Card
