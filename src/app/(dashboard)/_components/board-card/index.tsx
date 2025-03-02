"use client";

import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import Overlay from './overlay';


import { useAuth } from '@clerk/nextjs';
import {formatDistanceToNow} from "date-fns"
import Footer from './footer';



interface BoardCardProps {
  id : string;
  title : string;
  authorName : string ,
  authorId : string ,
  createdAt : number ,
  imageUrl : string ,
  orgId : string,
  isFavorite : boolean,
}


const BoardCard = ({authorId,authorName,createdAt,id,imageUrl,isFavorite,orgId,title} : BoardCardProps) => {

  const {userId} = useAuth();
  const authorLabel = userId === authorId ? "You" : authorName;
  const createdAtLabel = formatDistanceToNow(createdAt,{addSuffix : true})

  return (
    <Link href={`/board/${id}/${orgId}`}>
    <div className={'group aspect-[100/127] border rounded-lg flex flex-col justify-between overflow-hidden'}>
      <div className={'relative flex-1 bg-amber-50'}>
          <Image 
            src={imageUrl}
            alt={title}
            fill
            className={'object-fit'}
          />
          <Overlay />
      </div>
      <Footer  title={title} authorLabel={authorLabel} createdAtLabel={createdAtLabel} isFavorite={isFavorite} onClick={() => {}} disabled={false} />
    </div>
    </Link>
  )
}

export default BoardCard;
