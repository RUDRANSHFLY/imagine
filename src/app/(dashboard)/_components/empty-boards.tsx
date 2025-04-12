"use client";

import React from "react";
import Image from "next/image";

import { api } from "../../../../convex/_generated/api";
import { Button } from "@/components/ui/button";
import { useOrganization } from "@clerk/clerk-react";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useAction } from "convex/react"; 

const EmptyBoards = () => {
  const router = useRouter();
  const { organization } = useOrganization();
  const { mutate, pending } = useApiMutation(api.board.create);
  const getRandomPokemon= useAction(api.action.getRandomPokemon)

  const onClick = async () => {
    if (!organization) return;

    const imageUrl = await getRandomPokemon();

    mutate({
      orgId: organization.id,
      title: "Untitled board",
      imageUrl,
    }).then((id) => {
      if (id) {
        toast.success("Board created");
        router.push(`/board/${id}`);
      }
    }).catch(() => toast.error("Failed to create board"))
    ;
  };

  return (
    <div className={"h-full flex flex-col items-center justify-center"}>
      <Image src={"/icons/note.svg"} width={140} height={140} alt={"Empty"} />
      <h2 className={"text-2xl font-semibold mt-6"}>
        Create your first board!
      </h2>
      <p className={"text-muted-foreground text-sm mt-2"}>
        Start by creting a board to get started
      </p>
      <div className={"mt-6"}>
        <Button size={"lg"} disabled={pending} onClick={onClick}>
          Create board
        </Button>
      </div>
    </div>
  );
};

export default EmptyBoards;
