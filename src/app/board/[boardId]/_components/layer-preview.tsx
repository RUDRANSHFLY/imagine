"use client";

import { LayerType } from "@/types/canvas";
import { useStorage } from "@liveblocks/react/suspense";
import React from "react";
import { memo } from "react";
import Rectangle from "./rectangle";
import Circle from "./circle";
import Text from "./text";
import Note from "./note";
import Path from "./path";
import { colorToCss } from "@/lib/utils";

interface LayerPreviewProps {
  id: string;
  onLayerPointDown: (e: React.PointerEvent, layerId: string) => void;
  selectionColor: string;
}

const LayerPreview = memo(
  ({ id, onLayerPointDown, selectionColor }: LayerPreviewProps) => {
    const layer = useStorage((root) => root.layers.get(id));

    if (!layer) {
      return null;
    }



    switch (layer.type) {
      case LayerType.Path:
        return (
          <Path
            key={id}
            points={layer.points ?? []}
            onPointerDown={(e) => onLayerPointDown(e,id)}
            x={layer.x}
            y={layer.y}
            fill={colorToCss(layer.fill) ?? "#000"}
            stroke={selectionColor}
          />
        );
      case LayerType.Note:
        return (
          <Note
            id={id}
            layer={layer}
            onPointerDown={onLayerPointDown}
            selectionColor={selectionColor}
          />
        );
      case LayerType.Text:
        return (
          <Text
            id={id}
            layer={layer}
            onPointerDown={onLayerPointDown}
            selectionColor={selectionColor}
          />
        );
      case LayerType.Circle:
        return (
          <Circle
            id={id}
            layer={layer}
            onPointerDown={onLayerPointDown}
            selectionColor={selectionColor}
          />
        );

      case LayerType.Reactangle:
        return (
          <Rectangle
            id={id}
            layer={layer}
            onPointerDown={onLayerPointDown}
            selectionColor={selectionColor}
          />
        );

      default:
        console.warn("Unknown Layer type");
        return null;
    }

    return <div></div>;
  }
);

LayerPreview.displayName = "LayerPreview";

export default LayerPreview;
