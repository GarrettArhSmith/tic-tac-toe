'use client'
import React from 'react'
import s from './BackButton.module.css'
import { FaChevronLeft } from 'react-icons/fa'
import { useRouter } from 'next/navigation'

type Props = {}

export default function BackButton({}: Props) {
  const router = useRouter()

  return (
    <button
      className={s.backBtn}
      onClick={() => router.back()}
    >
      <FaChevronLeft />
    </button>
  )
}