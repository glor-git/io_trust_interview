import { useNavigate } from 'react-router-dom'

import Button from '../Button/Button'

import banner from '@/assets/images/mainBanner.webp'
import { cn } from '@/lib/utils/tailwindUtil'
const MainBanner = () => {
  const navigate = useNavigate()
  return (
    <>
      <div
        className={cn(
          'relative flex flex-col justify-end items-start w-full h-[560px] py-[80px] px-[48px] bg-cover bg-center ',
          'max-mobile:h-[320px] max-mobile:py-[40px] max-mobile:px-[24px]',
        )}>
        <div
          className={cn(
            'absolute top-0 left-0 w-full h-full bg-cover bg-center brightness-30 -z-1',
          )}
          style={{
            backgroundImage: `url(${banner})`,
          }}
        />
        <h3 className={cn('max-mobile:text-[30px]')}>
          여러분의 다음은 어디에 있나요?
        </h3>
        <h6>우리의 다음은 Web3에 있습니다.</h6>
        <h6>누구나 블록체인 서비스를 마음껏 즐길 수 있게,</h6>
        <h6>아이오트러스트에서 가슴 뛰는 내일을 만들어보세요!</h6>
      </div>
      <div
        className={cn(
          'flex justify-end items-center w-full my-[24px] px-[48px]',
          'max-mobile:px-[24px]',
        )}>
        <Button
          onClick={() => {
            navigate('/job_posting')
          }}>
          채용 공고 바로가기
        </Button>
      </div>
    </>
  )
}

export default MainBanner
