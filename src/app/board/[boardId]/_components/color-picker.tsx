"use client";

import { colorToCss } from "@/lib/utils";
import { Color } from "@/types/canvas";
import React from "react";

interface ColorPickerProps {
  onChange: (color: Color) => void;
}

const ColorPicker = ({ onChange }: ColorPickerProps) => {
  return (
    <div className="flex flex-wrap gap-2 items-center max-w-[164px] pr-2 mr-2 border-r border-neutral-200">
      <ColorButton color={{r: 0 , g :0 , b : 0}} onClick={onChange} />
      <ColorButton color={{r: 0 , g :255 , b : 0}} onClick={onChange} />
      <ColorButton color={{r: 0 , g :0 , b : 255}} onClick={onChange} />
      <ColorButton color={{r: 255 , g :255 , b : 0}} onClick={onChange} />
      <ColorButton color={{r: 255 , g :192 , b :203}} onClick={onChange} />
      <ColorButton color={{r: 255 , g :0 , b : 0}} onClick={onChange} />
      <ColorButton color={{r: 165 , g :42 , b : 42}} onClick={onChange} />
      <ColorButton color={{r: 255 , g :165, b : 0}} onClick={onChange} />
      <ColorButton color={{r: 75 , g :0 , b : 130}} onClick={onChange} />
      <ColorButton color={{r: 238 , g :130 , b : 238}} onClick={onChange} />
      <ColorButton color={{r: 255 , g :255 , b : 255}} onClick={onChange} />
      <ColorButton color={{r: 0 , g : 255 , b : 255}} onClick={onChange} />
    </div>
  );
};

interface ColorButtonProps {
  onClick: (color: Color) => void;
  color: Color;
}

const ColorButton = ({ color, onClick }: ColorButtonProps) => {
  return (
    <button
      title="Color"
      type="button"
      className="w-8 h-8 flex justify-center items-center hover:opacity-75 transition"
      onClick={() => onClick(color)}
    >
      <div
        className="w-8 h-8 rounded-md border border-neutral-300"
        style={{ background: colorToCss(color) }}
      />
    </button>
  );
};

export default ColorPicker;
