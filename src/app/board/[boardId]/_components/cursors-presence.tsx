"use client";

import React from "react";
import { memo } from "react";
import { useOthersConnectionIds } from "@liveblocks/react/suspense";
import Cursor from "./cursor";

const Cursors = () => {
  const ids = useOthersConnectionIds();



  return (
    <>
      {ids.map((connectionId) =>  (
        <Cursor connectionId={connectionId} key={connectionId} />
      ))}
    </>
  );
};

const CursorPresence = memo(() => {
  return (
    <>
      <Cursors />
    </>
  );
});

CursorPresence.displayName = "CursorPresence";

export default CursorPresence;
