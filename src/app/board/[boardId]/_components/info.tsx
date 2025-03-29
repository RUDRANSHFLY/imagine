"use client";

import Image from "next/image";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Hint from "@/components/hint";

import { useQuery } from "convex/react";
import React from "react";
import { api } from "../../../../../convex/_generated/api";
import { Id } from "../../../../../convex/_generated/dataModel";
import Link from "next/link";

interface InfoProps {
  boardId: string;
}
const font = Poppins({
  subsets: ["latin"],
  weight: ["600"]
});


const TabSeparator = () => {
  return (
    <div className="text-neutral-300 px-1.5">
      |
    </div>
  )
}

const Info = ({ boardId }: InfoProps) => {
  const data = useQuery(api.board.get, { id: boardId as Id<"boards"> });

  if (!data) {
    return <InfoSkeleton />;
  }

  return (
    <div className="absolute top-2 left-2 bg-white rounded-md px-1.5 h-12 flex items-center shadow-md">
      <Hint label="Go to boards" side="bottom" sideOffset={10}>
        <Button asChild className="px-2" variant={"board"}>
          <Link href={"/"}>
            <Image src={"/logo2.png"} alt="Board Logo" height={40} width={40} />
            <span
              className={cn(
                "font-semibold text-xl ml-2 text-black",
                font.className
              )}
            >
              Board
            </span>
          </Link>
        </Button>
      </Hint>
      <TabSeparator />
      <Button variant={"board"} className="text-base font-normal px-2">
          {data.title}
      </Button>
    </div>
  );
};

export function InfoSkeleton() {
  return (
    <div className="absolute top-2 left-2 bg-white rounded-md px-1.5 h-12 flex items-center shadow-md w-[300px]" />
  );
}

export default Info;
