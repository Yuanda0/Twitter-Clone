import React from 'react'
import { Button } from './ui/button'
import { GearIcon } from '@radix-ui/react-icons';

export default function NavBar() {
  return (
    <div className="nav-div sticky top-0 flex py-2 w-full border-b bg-black z-10  border-zinc-500">
      <Button variant="ghost" className="w-[300px] py-2" size="lg">
        For You
      </Button>
      <Button variant="ghost" className="w-[300px] py-2" size="lg">
        Following
      </Button>
      <Button variant="ghost" className="rounded-full" size="icon">
        <GearIcon />
      </Button>
    </div>
  );
}