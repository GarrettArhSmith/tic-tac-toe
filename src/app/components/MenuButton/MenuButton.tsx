'use client'
import React from 'react'
import s from './MenuButton.module.css'
import Link from 'next/link'

type Props = {
  children?: React.ReactNode;
  hrefPathname?: string;
  onClick?: React.MouseEventHandler;
}

export default function MenuButton({children, hrefPathname, onClick }: Props) {
  return (
    <Link href={hrefPathname || '#'}>
      <button
        className={s.menuBtn}
        onClick={(e) => onClick && onClick(e)}
      >
        {children}
      </button>
    </Link>
  )
}