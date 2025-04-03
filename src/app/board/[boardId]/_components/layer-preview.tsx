"use client"

import { LayerType } from '@/types/canvas';
import { useStorage } from '@liveblocks/react/suspense';
import React from 'react'
import { memo } from 'react';
import Rectangle from './rectangle';

interface LayerPreviewProps {
  id : string ;
  onLayerPointDown : (e : React.PointerEvent,layerId : string) => void ;
  selectionColor : string;
}

const LayerPreview = memo(({id,onLayerPointDown,selectionColor} : LayerPreviewProps) => {
  
  const layer = useStorage((root) => root.layers.get(id))

  if(!layer){
    return null
  }


  switch(layer.type){
    case LayerType.Reactangle:
      return (
        <Rectangle 
          id={id}
          layer={layer}
          onPointerDown={onLayerPointDown}
          selectionColor={selectionColor}
        />
      )

    default:
      console.warn("Unknown Layer type")
      return null;
  }
  
  return (
    <div>
        
    </div>
  )
})

LayerPreview.displayName = "LayerPreview"

export default LayerPreview