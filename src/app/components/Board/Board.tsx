'use client';
import React, { useState, useEffect } from 'react'
import { createClient } from '@supabase/supabase-js'
import s from './Board.module.css'
import Square from '../Square/Square'

type Props = {};

const initBoard = Array(9).fill({});

export default function Board({}: Props) {
  const [data, setData] = useState([{}]);
  const [board, setBoard] = useState(initBoard);

  useEffect(() => {
    const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL || '', process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '')
    const handleInserts = (payload: any) => {
      setBoard(prev => {
        const newBoard = [...prev];
        newBoard[payload.new.position] = payload.new;
        return newBoard;
      })
    }
    const realtime = supabase
      .channel('board')
      .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'board' }, handleInserts)
      .subscribe()

    const fetchData = async () => {
      const { data, error } = await supabase.from('board').select('*');
      if (data) {
        data.forEach(entry => {
          initBoard.splice(entry.position, 1, entry )
        })
        setData(data);
        setBoard(initBoard);
      }
      if (error) console.log(error);
    }
    fetchData();
  }, [])
  
  return (
    <div className={s.board}>
      {data && board.map(({ player }, i) => (
        <Square key={i} player={player} />
      ))
      }
    </div>
  )
}