"use client";

import React from "react";
import EmptySearch from "./empty-search";
import EmptyFavorites from "./empty-favorites";
import EmptyBoards from "./empty-boards";

import { useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import BoardCard from "./board-card";
import NewBoardButton from "./new-board-button";

interface BoardListProps {
  orgId: string;
  query: {
    search?: string;
    favorites?: string;
  };
}

const BoardList = ({ orgId, query }: BoardListProps) => {
  const data = useQuery(api.boards.get, { orgId: orgId , ...query});

  if (data === undefined) {
    return (
      <div>
        <h2 className={"text-3xl"}>
          {query.favorites ? "Favorite Boards" : "Team Boards"}
        </h2>
        <div
          className={
            "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5 mt-8 pb-10 "
          }
        >
          <NewBoardButton orgId={orgId} disabled />
          <BoardCard.Skeleton />
          <BoardCard.Skeleton />
          <BoardCard.Skeleton />
          <BoardCard.Skeleton />
        </div>  
      </div>
    );
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

  return (
    <div id={orgId}>
      <h2 className={"text-3xl"}>
        {query.favorites ? "Favorite Boards" : "Team Boards"}
      </h2>
      <div
        className={
          "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5 mt-8 pb-10 "
        }
      >
        <NewBoardButton orgId={orgId} />
        {data.map((board) => (
          <BoardCard
            key={board._id}
            id={board._id}
            title={board.title}
            authorName={board.authorName}
            authorId={board.authorId}
            createdAt={board._creationTime}
            imageUrl={board.imageUrl}
            orgId={board.orgId}
            isFavorite={board.isFavorite}
          />
        ))}
      </div>
    </div>
  );
};

export default BoardList;
