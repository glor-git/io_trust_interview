import { Link } from 'react-router-dom'

import MenuIcon from './assets/svgs/MenuIcon'
import { MENU_LIST } from './lib/const/menu'
import useHeader from './lib/hooks/useHeader'

import logo from '@/assets/images/navLogo.webp'
import { cn } from '@/lib/utils/tailwindUtil'

const Header = () => {
  const { currentPath } = useHeader()
  return (
    <header
      className={cn(
        'flex items-center justify-center w-full h-[58px] bg-[#fff]',
      )}>
      <div
        className={cn(
          'flex items-center justify-between max-w-[1260px] w-full h-full py-[9px] px-[48px]',
        )}>
        <a href="/" className={cn('h-full')}>
          <img src={logo} alt="logo" className={cn('h-full')} />
        </a>
        <nav className={cn('hidden', 'max-mobile:block cursor-pointer')}>
          <MenuIcon />
        </nav>
        <nav
          className={cn('flex items-center gap-[16px]', 'max-mobile:hidden')}>
          {MENU_LIST.map(({ name, path }) => {
            const isActive = currentPath === path
            return (
              <Link
                key={name}
                to={path}
                className={cn(
                  'py-[7px] px-[10px] font-pretendard font-[500] text-[rgba(52,59,70)] text-[14px]',
                  isActive && 'font-[700]',
                  'hover:bg-[rgba(249,249,251)] rounded-[8px]',
                )}>
                {name}
              </Link>
            )
          })}
        </nav>
      </div>
    </header>
  )
}

export default Header
