import { useState } from "react";
import { ReactMutation, useMutation } from "convex/react";
import { FunctionArgs, FunctionReference } from "convex/server";


export const useApiMutation = (mutationFunction: FunctionReference<"mutation">) => {

    const [pending, setPending] = useState(false);
    const apiMutation: ReactMutation<typeof mutationFunction> = useMutation(mutationFunction);

    const mutate = async (payload: FunctionArgs<typeof mutationFunction>) => {
        setPending(true);
        return apiMutation(payload)
            .finally(() => setPending(false))
            .then((result) => {
                return result;
            })
            .catch((error) => {
                throw error;
            })
    }

    return {
        mutate,
        pending
    }

}