"use client"


import React from "react";

import { useOrganizationList } from "@clerk/nextjs";
import Item from "./item";

const List = () => {
  const { userMemberships } = useOrganizationList({
    userMemberships: {
      infinite: true
    }
  });

  if (!userMemberships?.data?.length) return null;

  return (
    <div>
      <ul className={"space-y-4"}>
        {userMemberships?.data?.map((mem) => (
          <li key={mem.organization.id}>
            <Item id={mem.organization.id} name={mem.organization.name} imageUrl={mem.organization.imageUrl} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
