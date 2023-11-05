import React from 'react'
import s from './MenuButton.module.css'
import Link from 'next/link'

type Props = {
  children?: React.ReactNode
  hrefPathname: string
}

export default function MenuButton({children, hrefPathname}: Props) {
  return (
    <Link href={hrefPathname}>
      <button className={s.menuBtn}>
        {children}
      </button>
    </Link>
  )
}