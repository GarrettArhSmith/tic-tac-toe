'use client';
import React from 'react'
import s from './Board.module.css'
import Square from '../Square'

type Props = {
  board: Array<{ position: number, value: string}>;
  lobbyId: string;
};

export default function Board({board, lobbyId}: Props) {
  
  return (
    <div className={s.board}>
      {board && board.map((posVal, i) => (
        <Square key={i} posVal={posVal} lobbyId={lobbyId} />
      ))
      }
    </div>
  )
}