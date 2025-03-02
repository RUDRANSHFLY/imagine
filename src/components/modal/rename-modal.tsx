"use client";

import { useRenameModal } from "@/store/use-rename-modal";
import { 
    Dialog , 
    DialogContent , 
    DialogTitle,
    DialogDescription,
    DialogHeader,
    DialogFooter,
    DialogClose 
} from "../ui/dialog";
import { useState ,  useEffect, FormEventHandler } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { api } from "../../../convex/_generated/api";
import { toast } from "sonner";


export const RenameModal = () => {

    const {mutate , pending} = useApiMutation(api.board.update)
    
    const {isOpen , initialValues , onClose   } = useRenameModal();
    const [title ,setTitle] = useState(initialValues.title)

    useEffect(() => {
        setTitle(initialValues.title)

    }, [initialValues.title])
    
    const onSubmit : FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();

        mutate({
            id : initialValues.id,
            title,
        })
        .then(() => {
            toast.success("Board title updated")
            onClose()
        })
        .catch(() => {
            toast.error("Failed to update board title")
        })
    }


    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                    Edit Board Title
                    </DialogTitle>
                    <DialogDescription>
                        Enter a new title for this board
                    </DialogDescription>
                </DialogHeader>
                <form className="space-y-4" onSubmit={onSubmit}>
                    <Input 
                        disabled={pending}
                        maxLength={60}
                        required
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Board title"
                    />
                    <DialogFooter>
                        <DialogClose asChild>
                            <Button type="button" variant={"outline"}>
                                Cancel 
                            </Button>
                        </DialogClose>
                        <Button disabled={pending} type="submit">
                            Save
                        </Button>
                    </DialogFooter>
             </form>
            </DialogContent>
        </Dialog>
    )
}