export type Color = {
    r: number;
    g: number;
    b: number;
}

export type Camera = {
    x: number;
    y: number;
}

export enum LayerType {
    Reactangle,
    Square,
    Circle,
    Path,
    Text,
    Note,
}

export type ReactangleLayer = {
    type: LayerType.Reactangle;
    x: number;
    y: number;
    height: number;
    width: number;
    fill: Color;
    value?: string;
}

export type CircleLayer = {
    type: LayerType.Circle;
    x: number;
    y: number;
    height: number;
    width: number;
    fill: Color;

    value?: string;
}

export type SquareLayer = {
    type: LayerType.Square;
    x: number;
    y: number;
    height: number;
    width: number;
    fill: Color;

    value?: string;
}

export type PathLayer = {
    type: LayerType.Path;
    x: number;
    y: number;
    height: number;
    width: number;
    fill: Color;
    points?: number[][];
    value?: string;
}


export type TextLayer = {
    type: LayerType.Text;
    x: number;
    y: number;
    height: number;
    width: number;
    fill: Color;

    value?: string;
}

export type NoteLayer = {
    type: LayerType.Note;
    x: number;
    y: number;
    height: number;
    width: number;
    fill: Color;
    value?: string;
}

export type Point = {
    x: number;
    y: number;
}

export type XYWH = {
    x: number;
    y: number;
    width: number;
    height: number;
}

export enum Side {
    Top = 1,
    Bottom = 2,
    Left = 4,
    Right = 8,
}


export type CanvasState =
    | {
        mode: CanvasMode.None;
    }

    | {
        mode: CanvasMode.Pressing;
    }

    | {
        mode: CanvasMode.SelectionNet;
        origin: Point;
        current?: Point;

    }

    | {
        mode: CanvasMode.Translating;
        current: Point;
    }

    | {
        mode: CanvasMode.Inserting;
        layerType: LayerType.Reactangle | LayerType.Square | LayerType.Circle | LayerType.Text | LayerType.Note;
    }

    | {
        mode: CanvasMode.Resizing;
        initialBounds: XYWH;
        corner: Side;
    }

    | {
        mode: CanvasMode.Pencil;
    }


export enum CanvasMode {
    None,
    Pressing,
    SelectionNet,
    Translating,
    Inserting,
    Resizing,
    Pencil,
}


export type Layer = ReactangleLayer | CircleLayer | SquareLayer | PathLayer | TextLayer | NoteLayer | NoteLayer;