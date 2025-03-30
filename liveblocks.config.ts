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
    };
  }
}

export {};