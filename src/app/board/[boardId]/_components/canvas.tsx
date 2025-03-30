"use client";

import React, { useCallback, useState } from "react";
import Info from "./info";
import Participants from "./participants";
import ToolBar from "./toolbar";

import { Camera, CanvasMode, CanvasState } from "@/types/canvas";
import {
  useHistory,
  useCanRedo,
  useCanUndo,
  useMutation
} from "@liveblocks/react";
import CursorPresence from "./cursors-presence";
import { pointerEventToCanvasPoint } from "@/lib/utils";

interface CanvasProps {
  boardId: string;
}

const Canvas = ({ boardId }: CanvasProps) => {
  const [canvasState, setCanvasState] = useState<CanvasState>({
    mode: CanvasMode.None
  });

  const [camera, setCamera] = useState<Camera>({ x: 0, y: 0 });

  const history = useHistory();
  const canUndo = useCanUndo();
  const canRedo = useCanRedo();

  const onWheel = useCallback((e: React.WheelEvent) => {
    // console.log({
    //   x : e.deltaX,
    //   y : e.deltaY,
    // })
    setCamera((camera) => ({
      x: camera.x - e.deltaX,
      y: camera.y - e.deltaY
    }));
  }, []);

  const onPointerMove = useMutation(
    ({ setMyPresence }, e: React.PointerEvent) => {
      e.preventDefault();

      const current = pointerEventToCanvasPoint(e, camera);

      // console.log({current});

      setMyPresence({ cursor: current });
    },
    []
  );

  return (
    <main className="h-full w-full relative bg-neutral-100 touch-none">
      <Info boardId={boardId} />
      <Participants />
      <ToolBar
        canvasState={canvasState}
        setCanvasState={setCanvasState}
        canRedo={canRedo}
        canUndo={canUndo}
        undo={history.undo}
        redo={history.redo}
      />
      <svg
        onWheel={onWheel}
        onPointerMove={onPointerMove}
        className="h-[100vh] w-[100vw]"
      >
        <g>
          <CursorPresence />
        </g>
      </svg>
    </main>
  );
};

export default Canvas;
