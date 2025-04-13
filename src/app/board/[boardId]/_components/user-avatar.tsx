import React from 'react'
import Hint from '@/components/hint'
import { Avatar , AvatarFallback , AvatarImage } from '@/components/ui/avatar'


interface UserAvatarProps{
    src?: string ;
    name? : string ;
    fallback? : string;
    borderColor?:string ;
}

const UserAvatar = ({borderColor,fallback,name,src} : UserAvatarProps) => {
  return (
    <Hint label={name || "Teammate"} side={"bottom"} sideOffset={18}>
        <Avatar className='w-8 h-8 border-2' style={{borderColor}}>
            <AvatarImage src={src} />
            <AvatarFallback className='text-xs font-semibold'>
                {fallback || name?.charAt(0)?.toUpperCase()}
            </AvatarFallback>
        </Avatar>
    </Hint>
  )
}

export default UserAvatar
