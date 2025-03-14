"use client"


import React from 'react'
import Image from 'next/image'
import { useOrganization , useOrganizationList } from '@clerk/nextjs'
import { cn } from '@/lib/utils'
import Hint from '@/components/hint'

interface ItemProps {
    id : string ,
    name : string,
    imageUrl : string
}


const Item = ({id,imageUrl,name} : ItemProps) => {

    const { organization } = useOrganization()
    const { setActive } = useOrganizationList()

    const isActive = organization?.id === id ;


    const onClick = () => {
        if(!setActive) return null;

        setActive({organization : id})
    }

  return (
    <div className={'aspect-square relative'}>
      <Hint label={name} side={"right"} align={"center"} sideOffset={18}> 
          <Image src={imageUrl} onClick={onClick} fill  alt={name} className={cn("rounded-md cursor-pointer opacity-75 hover:opacity-100" , isActive && "opacity-100")}/>
      </Hint>
    </div>
  )
}

export default Item