// Define Liveblocks types for your application
// https://liveblocks.io/docs/api-reference/liveblocks-react#Typing-your-data
declare global {
  interface Liveblocks {
    UserMeta: {
      id: string;

      // Example, use any JSON-compatible data in your metadata
      info: {
        name: string;
        picture: string;
       
      }
    }
  }
}

export {};
