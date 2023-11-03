'use client';
import React, { useEffect } from 'react'
import s from './Board.module.css'
import Square from '../Square/Square'

type Props = {}

const board = Array(9).fill(null);

export default function Board({}: Props) {

  interface PusherData {
    message: string;
  }

  return (
    <div className={s.board}>
      {board.map((square, i) => (
        <Square key={i} />
      ))}
    </div>
  )
}