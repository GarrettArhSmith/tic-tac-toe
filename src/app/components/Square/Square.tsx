'use client';
import React, { useEffect, useState } from 'react'
import s from './Square.module.css'
import { BsXLg, BsCircle } from 'react-icons/bs'


type Props = {};


export default function Square({}: Props) {
  const [value, setValue] = useState<null | string>(null);
  const [isSelf, setIsSelf] = useState<boolean>(true);

  useEffect(() => {
    setIsSelf(Math.random() < 0.5);
  }, []);

  return (
    <div
      className={`${s.square} ${isSelf ? s.self : s.opponent}`}
      onClick={() => setValue(isSelf ? 'X' : 'O')}
    >
      {value === 'X' && <BsXLg />}
      {value === 'O' && <BsCircle />}
    </div>
  );
}