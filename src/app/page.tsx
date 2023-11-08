import React from 'react'
import styles from './page.module.css'
import MenuButton from './components/MenuButton/MenuButton'

export default function Home() {

  return (
    <main>
      <MenuButton hrefPathname='/multiplayer'>Multiplayer</MenuButton>
      <MenuButton hrefPathname='/play'>Singleplayer</MenuButton>
    </main>
  )
}
