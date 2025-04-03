import { LiveMap , LiveObject , LiveList } from "@liveblocks/client";
import { Layer  } from "@/types/canvas";
declare global {
  interface Liveblocks {
    UserMeta: {
      id: string;

      // Example, use any JSON-compatible data in your metadata
      info: {
        name: string;
        picture: string;
      };
    };

    Presence: {
      cursor: {
        x: number;
        y: number;
      } | null;
      selection : string[];
    };

    Storage : {
      layers : LiveMap<string , LiveObject<Layer>>;
      layerIds : LiveList<string>;
    };  
  }
}

export {};