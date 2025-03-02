"use client"


import React from 'react'
import { cn } from "@/lib/utils";
import { toast } from 'sonner';
import { Plus } from 'lucide-react';
import { useApiMutation } from '@/hooks/use-api-mutation';
import { api } from '../../../../convex/_generated/api';



interface NewBoardButtonProps{
    orgId : string,
    disabled? :boolean,
}

const NewBoardButton = ({orgId,disabled} : NewBoardButtonProps) => {

    const {mutate,pending} = useApiMutation(api.board.create)

    const onClick = () => {
        mutate({
            orgId,
            title : "New Board"
        })
        .then((id) => {
          toast.success("Board created")
          // TODO: navigate to the new board  
          console.log(id);
          
        }).catch(() => {
          toast.error("Failed to create board")
        })
    }

  return (
    <button 
        title={orgId} 
        type={"button"} 
        disabled={disabled || pending} 
        onClick={onClick} 
        className={cn("col-span-1 aspect-[100/127] bg-blue-600 rounded-lg hover:bg-blue-800 flex flex-col justify-center items-center py-6", (disabled || pending) && "opacity-75 hover:bg-blue-600 cursor-not-allowed")}
    >
      <div />
      <Plus className={'h-12 w-12 text-white stroke-1'} />
      <p className={'text-xs text-white font-light'}>
        New board
      </p>
    </button>
  )
}
  
export default NewBoardButton
