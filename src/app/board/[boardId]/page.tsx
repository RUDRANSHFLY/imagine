import React from "react";
import Canvas from "./_components/canvas";
import Room from "@/components/room";
import CanvasLoading from "./_components/canvas-loading";

interface BoardIdPageProps {
  params: Promise<{
    boardId: string;
  }>;
}

const BoardIdPage = (props: BoardIdPageProps) => {
  const id = React.use(props.params);
  

  return (
    <Room roomId={id.boardId} fallback={<CanvasLoading/>}>
      <Canvas boardId={id.boardId} />
    </Room>
  );
};

export default BoardIdPage;
