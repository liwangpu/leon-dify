'use client'
import type { FC } from 'react'
import classNames from 'classnames'
import { useSelector } from '@/context/app-context'

type LogoSiteProps = {
  className?: string
}

const LogoSite: FC<LogoSiteProps> = ({
  className,
}) => {
  const { theme } = useSelector((s) => {
    return {
      theme: s.theme,
    }
  })

  // return (
  //   <></>
  // );
  const src = theme === 'light' ? '/logo/chuangyun-logo.png' : `/logo//logo/chuangyun-logo-${theme}.png`
  return (
    <img
      src={src}
      className={classNames('block w-auto h-10', className)}
      alt='logo'
    />
  )
}

export default LogoSite
