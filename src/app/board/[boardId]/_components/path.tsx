import React from "react";
import getStroke from "perfect-freehand";
import { getSvgPathFromStroke } from "@/lib/utils";

interface PathProps {
  x: number;
  y: number;
  points: number[][] | undefined;
  fill: string;
  onPointerDown?: (e: React.PointerEvent) => void;
  stroke?: string;
}

const Path = ({ id, fill, points, x, y, onPointerDown, stroke }: PathProps) => {

    if(points === undefined){
        return new Error("No Points Fonund");
    }

  return (
    <path
      className="drop-shadow-md"
      onPointerDown={onPointerDown}
      d={getSvgPathFromStroke(
        getStroke(points, {
          size: 16,
          thinning: 0.5,
          smoothing: 0.5,
          streamline: 0.5,
        })
      )}
      style={{
        transform : `translate(${x}px,${y}px)`
      }}
      x={0}
      y={0}
      fill={fill}    
      stroke={stroke}
      strokeWidth={1}
      />
  );
};

export default Path;
