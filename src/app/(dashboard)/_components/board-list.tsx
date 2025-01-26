"use client"

import React from 'react'


interface BoardListProps{
    orderId : string,
    query : {
        search? : string;
        favorites? : string;
    }
}

const BoardList = ({orderId,query} : BoardListProps) => {
  

    const data = [] ;
    
    

    if(!data?.length && query.search){
        return (
            <div>
                Try Searching for something else
            </div>
        )
    }
  
  
        if(!data?.length && query.favorites){
        return (
            <div>
                No Favorites Found
            </div>
        )
    }

        if(!data?.length){
        return (
            <div>
                No Boards Found
            </div>
        )
    }
  
  
  
    return (
    <div>
      
    </div>
  )
}

export default BoardList
