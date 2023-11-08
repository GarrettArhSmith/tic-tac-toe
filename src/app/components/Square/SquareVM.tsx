'use client';
import React from 'react'
import Square from "./Square";
import supabase from '@/app/supabase';

type Props = {
  lobbyId: string,
  posVal: { position: number; value: string; },
};

function SquareVM({  lobbyId, posVal }: Props) {
  const makeMove = async () => {
    const { error } = await supabase
      .from('positions')
      .insert([
        { position: posVal.position, value: 'X', lobby_id: lobbyId },
      ])
      .select()
      if (error) console.log('error', error);
    }
    return <Square posVal={posVal} makeMove={makeMove} />;
}

export default SquareVM;
