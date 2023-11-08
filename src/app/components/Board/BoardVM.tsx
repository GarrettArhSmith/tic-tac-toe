'use client';
import React, { useState, useEffect } from 'react'
import { useParams } from 'next/navigation';
import Board from "./Board";
import supabase from '@/app/supabase';

type Props = {};

type PositionType = {
  value: string;
  position: number;
}

const initLobbyData = {
  created_at: '',
  game_started: false,
  id: '',
  room_code: '',
}
type LobbyData = {
  created_at: string;
  game_started: boolean;
  id: string;
  room_code: string;
}

type RoomCode = { roomCode: string };

const initBoard = () => {
  const board = [];
  for (let i = 0; i < 9; i++) {
    board.push({ value: '', position: i });
  }
  return board;
}

function BoardVM({}: Props) {
  const [lobbyData, setLobbyData] = useState<LobbyData>(initLobbyData);
  const [board, setBoard] = useState(initBoard);
  const { roomCode } = useParams<RoomCode>();

  useEffect(() => {
    const handleUpdates = (payload: any) => {
      setBoard(prev => {
        const newBoard = [...prev];
        newBoard[payload.new.position] = payload.new;
        return newBoard;
      })
    }
    supabase
      .channel('positions')
      .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'positions' }, handleUpdates)
      .subscribe()

    const fetchPositionData = async (lobbyId: string) => {
      const { data, error } = await supabase.from('positions').select('*').eq('lobby_id', lobbyId);
      if (data) {
        data.forEach((entry: PositionType) => {
          handleUpdates({ new: entry });
        })
      }
      if (error) console.log(error);
    }

    const fetchLobbyData = async () => {
      const { data, error } = await supabase.from('lobbies').select('*').eq('room_code', roomCode);
      if (data) {
        setLobbyData(data[0]);
        fetchPositionData(data[0].id);
      }
      if (error) console.log(error);
    }
    fetchLobbyData();
  }, [roomCode])

  return <Board board={board} lobbyId={lobbyData.id} />;
}

export default BoardVM;
