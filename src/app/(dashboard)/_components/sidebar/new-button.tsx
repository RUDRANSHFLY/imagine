"use client";

import React from "react";
import { Plus } from "lucide-react";
import { CreateOrganization } from "@clerk/clerk-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import Hint from "@/components/hint";

const NewButton = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className={"aspect-square"}>
          <Hint
            label={"create a organization"}
            side={"right"}
            align={"start"}
            sideOffset={18}
          >
            <button
              type={"button"}
              title={"Create new organization"}
              className={
                "bg-white/25 h-full w-full rounded-md flex items-center justify-center opacity-60 hover:opacity-100 transition"
              }
            >
              <Plus className={"text-white"} />
            </button>
          </Hint>
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Create new organization</DialogTitle>
        <CreateOrganization />
      </DialogContent>
    </Dialog>
  );
};

export default NewButton;
