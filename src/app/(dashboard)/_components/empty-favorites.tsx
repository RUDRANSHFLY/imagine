import React from 'react'
import Image from 'next/image'

const EmptyFavorites = () => {
  return (
    <div className={'h-full flex flex-col items-center justify-center'}>
      <Image src={'/icons/empty-favorites.jpg'} width={140} height={140} alt={'Empty'} />
      <h2 className={'text-2xl font-semibold mt-6'}>
        No favorites found!
      </h2>
      <p className={'text-muted-foreground text-sm mt-2'}>
        Try adding some boards as favorites.
      </p>
    </div>
  )
}

export default EmptyFavorites
