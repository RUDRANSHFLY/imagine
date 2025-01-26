import { Plus } from "lucide-react";
import { OrganizationProfile} from "@clerk/nextjs";

import { Dialog , DialogContent , DialogHeader, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";


import React from 'react'

const InviteButton = () => {
  return (
    <Dialog >
    <DialogTrigger asChild>
        <Button variant={"outline"}>
            <Plus className={"h-4 w-4 mr-2"} />
            Invite members
        </Button>
    </DialogTrigger>
    <DialogContent className={"p-0 bg-transparent max-w-[880px] border-none"}>
        <DialogHeader>

        </DialogHeader>
        <OrganizationProfile /> 
    </DialogContent>
    </Dialog>
  )
}

export default InviteButton
