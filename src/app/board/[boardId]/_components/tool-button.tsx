"use client";

import React from 'react'
import { LucideIcon } from "lucide-react";

import  Hint from "@/components/hint";
import { Button } from "@/components/ui/button";

interface ToolButtonProps {
    label : string ;
    icon : LucideIcon ;
    onClick : () => void;
    isActive? : boolean;
    isDiabled? : boolean;
}


const ToolButton = ({icon : Icon ,label,onClick,isActive,isDiabled} : ToolButtonProps) => {
  return (
    <Hint label={label} side={"right"} sideOffset={10}>
        <Button disabled={isDiabled} onClick={onClick} variant={isActive ? "boardSelected" : "board"}>
            <Icon />
        </Button>
    </Hint>
  )
}

export default ToolButton