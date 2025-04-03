import { Camera, Color } from "@/types/canvas";
import { clsx, type ClassValue } from "clsx"
import React from "react";
import { twMerge } from "tailwind-merge"

const COLORS = [
  "#F1EFEC",
  "#D4C9BE",
  "#123458",
  "#030303",
  "#F7374F",
  "#88304E",
  "#522546",
  "#2C2C2C",
  "#604652",
  "#735557",
  "#97866A",
  "#D29F80",
  "#F2EFE7",
  "#9ACBD0",
  "#48A6A7",
  "#006A71",
]

export function connectionIdToColor(connectionId : number) : string {
  return COLORS[connectionId % COLORS.length];
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function pointerEventToCanvasPoint(e : React.PointerEvent,camera : Camera){
  return {
    x : Math.round(e.clientX) - camera.x,
    y : Math.round(e.clientY) - camera.y,
  }
}


export function colorToCss(color : Color){
  return `#${color.r.toString(16).padStart(2,"0")}${color.g.toString(16).padStart(2,"0")}${color.b.toString(16).padStart(2,"0")}`
}