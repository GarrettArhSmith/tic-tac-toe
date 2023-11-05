import React from 'react'
import styles from './Multiplayer.module.css'
import Link from 'next/link'
import MenuButton from '../components/MenuButton/MenuButton'

type Props = {}

export default function page({}: Props) {
  return (
    <main>
      <MenuButton hrefPathname='/multiplayer/join'>Join Game</MenuButton>
      <MenuButton hrefPathname='/multiplayer/host'>Host Game</MenuButton>
      <MenuButton hrefPathname='/multiplayer/local'>Local</MenuButton>
    </main>
  )
}