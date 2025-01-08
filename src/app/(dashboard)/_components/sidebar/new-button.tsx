"use client"

import React from 'react'
import { Plus } from 'lucide-react'
import { CreateOrganization } from '@clerk/clerk-react'
import { Dialog , DialogContent , DialogTitle, DialogTrigger } from '@/components/ui/dialog'



const NewButton = () => {
  return (
    <Dialog>
        <DialogTrigger asChild>
            <div className={'aspect-square'}>
                <button type={"button"} title={"Create new organization"} className={'bg-white/25 h-full w-full rounded-md flex items-center justify-center opacity-60 hover:opacity-100 transition'}>
                    <Plus className={'text-white'} />
                </button>
            </div>
        </DialogTrigger>
        <DialogContent>
          <DialogTitle>
            Create new organization
          </DialogTitle>
          <CreateOrganization />
        </DialogContent>
    </Dialog>
  )
}

export default NewButton