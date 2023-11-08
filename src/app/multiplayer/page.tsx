'use client'
import React, { useEffect } from 'react'
import styles from './Multiplayer.module.css'
import MenuButton from '../components/MenuButton/MenuButton'
import supabase from '@/app/supabase';

type Props = {}

export default async function page({}: Props) {
  let { data: lobbies, error } = await supabase
  .from('lobbies')
  .select('room_code')


  const generateRoomCode = (length: number): string => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  }

  const createRoom = async () => {
    const roomCode = generateRoomCode(5);
    
    const { data, error } = await supabase
    .from('lobbies')
    .insert([
      { positions: [], game_started: false, room_code: roomCode },
    ])
    .select();

    if (data) {
      window.location.href = `/play/${roomCode}`;
    } 

    if (error) {
      console.log(error);
    }
  }

  return (
    <main>
      <MenuButton hrefPathname='/multiplayer/join'>Join Game</MenuButton>
      <MenuButton onClick={createRoom}>Host Game</MenuButton>
      <MenuButton>Local</MenuButton>
    </main>
  )
}
