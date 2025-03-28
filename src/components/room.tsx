"use client"

import { ReactNode } from "react"
import {LiveblocksProvider , RoomProvider , ClientSideSuspense} from "@liveblocks/react/suspense"


interface RoomProps{
    children : ReactNode,
    roomId : string,
    fallback : NonNullable<ReactNode> | null
}

const Room = ({children , roomId , fallback}:RoomProps) => {
  return (
    <LiveblocksProvider publicApiKey={"pk_dev_CERZOGonqW4YWokF1NVJZICdv0S53jo4XWwYRpfMaslc6SvgqHNy1CbFjF9iTIWq"}>
      <RoomProvider id={roomId} initialPresence={{}}>
        <ClientSideSuspense fallback={fallback}>
            {() => children}
        </ClientSideSuspense>
      </RoomProvider>
    </LiveblocksProvider>
  )
}

export default Room
