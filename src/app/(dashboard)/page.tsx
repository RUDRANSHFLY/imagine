"use client";

import React, { use } from 'react';
import EmptyOrg from './_components/empty-org'
import { useOrganization } from '@clerk/nextjs'
import BoardList from './_components/board-list';

interface DashboardPageProps{
  searchParams : Promise<{
    search? : string,
    favorites? : string,
  }>
}


const DashBoardPage = (props: DashboardPageProps) => {
  const searchParams = React.use(props.searchParams);


  const {organization} = useOrganization()




  return (
    <div className={'flex-1 h-[calc(100%-80px)]'}>
      Dashboard Page
      {
        !organization ? (

          <EmptyOrg />
        ) : (
          <>
            <BoardList orderId={organization.id} query={searchParams} />
          </>
        )
      }
    </div>
  )
}

export default DashBoardPage