import { UserButton } from '@clerk/nextjs'
import React from 'react'

const NavBar = () => {
  return (
    <header className={'flex items-center gapx-x-4 p-5 bg-green-400'}>
      NavBar
      <div className={"hidden lg:flex lg:flex-1 bg-yellow-600"}>
        {/* Search */}
        Search
      </div>
      <UserButton />
    </header>
  )
}

export default NavBar
