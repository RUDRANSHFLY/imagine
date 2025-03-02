import { v } from "convex/values"
import { mutation } from "./_generated/server"


const images = [
    '/placeholders/1.png',
    '/placeholders/2.png',
    '/placeholders/3.png',
    '/placeholders/4.png',
    '/placeholders/5.png',
    '/placeholders/6.png',
    '/placeholders/7.png',
    '/placeholders/8.png',
    '/placeholders/9.png',
    '/placeholders/10.png',
    '/placeholders/11.svg',
    '/placeholders/12.svg',
    '/placeholders/13.svg',
]


export const create = mutation({
    args : {
        orgId : v.string(),
        title : v.string(),
    },
    handler : async (ctx,args) => {
        const identity = await ctx.auth.getUserIdentity();

        if(!identity){
            throw new Error("Unauthorized");
        }

        const randomImage = images[Math.floor(Math.random() * images.length)]

        const board = await ctx.db.insert("boards",{
            title : args.title,
            orgId : args.orgId,
            authorId : identity.subject,
            authorName : identity.name!,
            imageUrl : randomImage,
        });

        return board;
            
    }
})