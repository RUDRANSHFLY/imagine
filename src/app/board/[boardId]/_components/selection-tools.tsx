'use client'

import { useSelectionBounds } from '@/hooks/use-selection-bounds'
import { useDeleteLayers } from '@/hooks/use-delete-layers'



import { Camera, Color} from '@/types/canvas'
import { useMutation, useSelf } from '@liveblocks/react/suspense'
import React, { memo } from 'react'
import ColorPicker from './color-picker'

import Hint from '@/components/hint'
import { Button } from '@/components/ui/button'
import { BringToFront, SendToBack, Trash2 } from 'lucide-react'

interface SelectionToolsProps {
    camera : Camera,
    setLastUsedColor : (color : Color) => void,
}

const SelectionTools = memo(({camera,setLastUsedColor} : SelectionToolsProps) => {
  
    const selection = useSelf((me) => me.presence.selection);
    const deleteLayer = useDeleteLayers();

    

    const selectionBounds = useSelectionBounds();

  

    const moveToFront = useMutation((
      {storage}
    ) => {
        const liveLayersIds = storage.get("layerIds");
        const indices : number[] = [];

        const arr = liveLayersIds.toImmutable();


        for(let i = 0 ; i < arr.length ; i++){
          if(selection.includes(arr[i])){
            indices.push(i)
          }
        }

        for(let i = indices.length - 1; i >= 0 ; i--){
          liveLayersIds.move(indices[i],arr.length - 1  - (indices.length - 1 - i))
        }



    },[selection])




    const moveToBack = useMutation((
      {storage}
    ) => {
        const liveLayersIds = storage.get("layerIds");
        const indices : number[] = [];

        const arr = liveLayersIds.toImmutable();


        for(let i = 0 ; i < arr.length ; i++){
          if(selection.includes(arr[i])){
            indices.push(i)
          }
        }

        for(let i = 0 ; i < indices.length ; i++){
          liveLayersIds.move(indices[i],i)
        }



    },[selection])

    const setFill = useMutation(({storage} , fill : Color) => {
      const liveLayers = storage.get('layers');
      setLastUsedColor(fill);


      selection.forEach((id) => {
        liveLayers.get(id)?.set('fill',fill);
      })
    },[selection,setLastUsedColor])

    if(!selectionBounds){
        return null;
    }

    const x = selectionBounds.width / 2 + selectionBounds.x + camera.x;
    const y = selectionBounds.y + camera.y;
    
    return (
    <div style={{
        transform : `translate(calc(${x}px - 50%),calc(${y - 16}px - 100%))`
    }} className='absolute p-3 rounded-xl bg-white shadow-sm border flex select-none'>
      <ColorPicker onChange={setFill} />
      <div className='flex flex-col gap-y-0.5'>
        <Hint label='Bring to front'>
          <Button variant={"board"} size={"icon"} onClick={moveToFront}>
            <BringToFront />
          </Button>
        </Hint>
        <Hint label='Bring to back'>
          <Button variant={"board"} size={"icon"} onClick={moveToBack}>
            <SendToBack />
          </Button>
        </Hint>
      </div>
      <div className='flex items-center pl-2 ml-2 border-l border-neutral-200'>
        <Hint label='Delete'>
          <Button variant={"board"} size={"icon"} onClick={deleteLayer}>
            <Trash2 />
          </Button>
        </Hint>
      </div>
    </div>
  )
})

SelectionTools.displayName = 'SelectionTools'

export default SelectionTools
