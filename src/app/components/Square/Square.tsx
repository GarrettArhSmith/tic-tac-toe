'use client';
import React, { useEffect, useState } from 'react'
import s from './Square.module.css'
import { BsXLg, BsCircle } from 'react-icons/bs'


type Props = {
  makeMove: () => void,
  posVal: { value: string; position: number; },
};


export default function Square({makeMove, posVal: { value }}: Props) {
  const [isSelf, setIsSelf] = useState<boolean>(true);

  return (
    <div
      className={`${s.square} ${isSelf ? s.self : s.opponent}`}
      onClick={makeMove}
    >
      {value === 'X' && <BsXLg />}
      {value === 'O' && <BsCircle />}
    </div>
  );
}