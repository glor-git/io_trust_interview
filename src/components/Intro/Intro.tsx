import { cn } from '@/lib/utils/tailwindUtil'

const Intro = () => {
  return (
    <div
      area-label="회사 소개"
      className={cn(
        'flex flex-col justify-start items-start gap-[24px] w-full px-[48px]',
        'max-mobile:px-[24px]',
      )}>
      <div>
        <h4>국내 1위 블록체인 지갑 &apos;디센트&apos;와</h4>
        <h4>Web3 지갑 &apos;위핀&apos;을 서비스하는 아이오트러스트입니다!</h4>
      </div>
      <div>
        <p className={cn('text-[#666872] text-[15px]')}>
          우리는 &apos;누구나 블록체인 서비스를 편리하고 안전하게 즐길 수 있도록
          하겠다&apos;는 목표를 가지고 이곳에 모였습니다.
        </p>
        <p className={cn('text-[#666872] text-[15px]')}>
          2022년 아기유니콘, 2023년 아기유니콘 플러스에 선정된 아이오트러스트는
          이제 유니콘으로 도약을 준비하고 있습니다.
        </p>
        <p className={cn('text-[#666872] text-[15px]')}>
          언제나 사용자의 편에서 고민하고 블록체인 시장의 판도를 바꾸어 나가는
          곳.
        </p>
        <p className={cn('text-[#666872] text-[15px]')}>
          Web3를 이끌어 갈 아이오트러스트의 여정에 지금 바로 합류하세요!{' '}
        </p>
      </div>
    </div>
  )
}

export default Intro
