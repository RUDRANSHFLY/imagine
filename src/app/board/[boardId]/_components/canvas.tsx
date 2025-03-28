"use client";

import React from 'react'
import Info from './info';
import Participants from './participants';
import ToolBar from './toolbar';

interface CanvasProps{
  boardId : string,
}

const Canvas = ({boardId} : CanvasProps) => {
  console.log(boardId);
  
  return (
    <main className='h-full w-full relative bg-neutral-100 touch-none'>
      <Info />
      <Participants />
      <ToolBar />
    </main>
  )
}

export default Canvas