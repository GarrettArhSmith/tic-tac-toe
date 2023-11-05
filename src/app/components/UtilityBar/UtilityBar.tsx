'use client'
import React from 'react'
import s from './UtilityBar.module.css'
import BackButton from '../BackButton/BackButton'
import { usePathname } from 'next/navigation'

type Props = {}

export default function UtilityBar({}: Props) {
  const pathname = usePathname();
  const capitalizedPathname = pathname.charAt(1).toUpperCase() + pathname.slice(2);

  return (
    <div className={s.utilityBar}>
      <BackButton />
      <span>
        <h1>Tic-Tac-Toe</h1>
        <h3>{capitalizedPathname}</h3>
      </span>
    </div>
  )
}