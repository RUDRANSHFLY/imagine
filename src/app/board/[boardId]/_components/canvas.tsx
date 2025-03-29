"use client";

import React from 'react'
import Info from './info';
import Participants from './participants';
import ToolBar from './toolbar';

import { useSelf } from '@liveblocks/react/suspense';


interface CanvasProps{
  boardId : string,
}

const Canvas = ({boardId} : CanvasProps) => {
    const {name,picture} = useSelf((me) => me.info)

     return (
    <main className='h-full w-full relative bg-neutral-100 touch-none'>
      <Info boardId={boardId} />
      <Participants />
      <ToolBar />
    </main>
  )
}

export default Canvas