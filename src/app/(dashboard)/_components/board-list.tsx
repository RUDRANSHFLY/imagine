"use client";

import React from "react";
import EmptySearch from "./empty-search";
import EmptyFavorites from "./empty-favorites";
import EmptyBoards from "./empty-boards";

interface BoardListProps {
  orderId: string;
  query: {
    search?: string;
    favorites?: string;
  };
}

const BoardList = ({ orderId, query }: BoardListProps) => {
  const data = [];

  if (!data?.length && query.search) {
    return <EmptySearch />;
  }

  if (!data?.length && query.favorites) {
    return <EmptyFavorites />;
  }

  if (!data?.length) {
    return <EmptyBoards />;
  }

  return <div id={orderId}></div>;
};

export default BoardList;
