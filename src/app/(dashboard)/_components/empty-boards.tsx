import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

const EmptyBoards = () => {
  return (
    <div className={'h-full flex flex-col items-center justify-center'}>
      <Image src={'/icons/note.svg'} width={140} height={140} alt={'Empty'} />
      <h2 className={'text-2xl font-semibold mt-6'}>
            Create your first board!
      </h2>
      <p className={'text-muted-foreground text-sm mt-2'}>
            Start by creting a board to get started
      </p>
      <div className={"mt-6"}>
        <Button size={"lg"}>
            Create board
        </Button>
      </div>
    </div>
  )
}

export default EmptyBoards
