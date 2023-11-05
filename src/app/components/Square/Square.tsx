'use client';
import React, { useEffect, useState } from 'react'
import s from './Square.module.css'
import { BsXLg, BsCircle } from 'react-icons/bs'


type Props = {
  player: string,
};


export default function Square({player}: Props) {
  const [value, setValue] = useState<string>(player);
  const [isSelf, setIsSelf] = useState<boolean>(true);

  useEffect(() => {
    setValue(player);
  }, [player]);

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