import React from 'react'
import { Loader } from 'lucide-react'
import { InfoSkeleton } from './info'
import { ParticipantsSkeleton } from './participants'
import { ToolBarSkeleton } from './toolbar'


const CanvasLoading = () => {
    
  return (
    <main className='h-full w-full relative bg-neutral-100 touch-none flex items-center justify-center'>
      <Loader className='w-6 h-6 text-muted-foreground animate-spin'/>
      <InfoSkeleton />
      <ParticipantsSkeleton />
      <ToolBarSkeleton />
    </main>
  )
}

export default CanvasLoading
