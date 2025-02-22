"use client";

import React from "react";
import EmptySearch from "./empty-search";
import EmptyFavorites from "./empty-favorites";
import EmptyBoards from "./empty-boards";

import { useQuery } from "convex/react";
import { api  } from "../../../../convex/_generated/api";

interface BoardListProps {
  orderId: string;
  query: {
    search?: string;
    favorites?: string;
  };
}

const BoardList = ({ orderId, query }: BoardListProps) => {
  const data = useQuery(api.boards.get,{orgId : orderId});

  if(data === undefined){
    return (
      <div>
        Loading....
      </div>
    )
  }

  if (!data?.length && query.search) {
    return <EmptySearch />;
  }

  if (!data?.length && query.favorites) {
    return <EmptyFavorites />;
  }

  if (!data?.length) {
    return <EmptyBoards />;
  }

  return <div id={orderId}>
    {JSON.stringify(data)}
  </div>;
};

export default BoardList;
