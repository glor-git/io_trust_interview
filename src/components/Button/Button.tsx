import { ComponentPropsWithoutRef } from 'react'

import { cn } from '@/lib/utils/tailwindUtil'

type PropsType = ComponentPropsWithoutRef<'button'>
const Button = ({ children, ...rest }: PropsType) => {
  return (
    <button
      {...rest}
      className={cn(
        'min-w-[160px] h-[48px] px-[20px] bg-[rgba(242,104,30)] rounded-[6px] cursor-pointer',
        'hover:bg-[rgba(218,94,27)]',
      )}>
      <span
        className={cn(
          'text-[white] font-pretendard font-700 text-[16px] isolate will-change-[filter] backdrop-filter-none',
        )}>
        {children}
      </span>
    </button>
  )
}

export default Button
