import React from "react";
import { ReactangleLayer } from "@/types/canvas";
import { colorToCss } from "@/lib/utils";

interface ReactangleProps {
  id: string;
  layer: ReactangleLayer;
  onPointerDown: (e: React.PointerEvent, id: string) => void;
  selectionColor?: string;
}

const Rectangle = ({
  id,
  layer,
  onPointerDown,
  selectionColor
}: ReactangleProps) => {
  const { fill, height, width, x, y } = layer;

  console.log({ REACTANGLELAYER: layer });

  return (
    <rect
      className="drop-shadow-md"
      onPointerDown={(e) => onPointerDown(e, id)}
      style={{
        transform: `translate(${x}px,${y}px)`
      }}
      x={0}
      y={0}
      width={width}
      height={height}
      strokeWidth={1}
      fill={colorToCss(fill)}
      stroke={selectionColor || "transparent"}
    />
  );
};

export default Rectangle;
