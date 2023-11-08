'use client'
import MenuButton from '@/app/components/MenuButton/MenuButton'
import React, { useState } from 'react'
import s from './Join.module.css'

type Props = {}

export default function Join({}: Props) {
  const [roomCodeInput, setRoomCodeInput] = useState('')

  const handleLobbyIdInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRoomCodeInput(e.target.value)
  }

  return (
    <>
    <input type="text" className={s.input} maxLength={5} onChange={handleLobbyIdInput} />
    <MenuButton hrefPathname={`/play/${roomCodeInput}`}>Join</MenuButton>
    </>
  )
}