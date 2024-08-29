import React from 'react'
import { IoMdHome } from "react-icons/io";
import { CiSearch, CiBookmark, CiCircleMore } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { GoBell, GoPeople } from "react-icons/go";
import { SlEnvolopeLetter } from "react-icons/sl";
import { RiFileList2Fill, RiMoreLine } from "react-icons/ri";
import { IoPersonOutline } from "react-icons/io5";
import { Button } from './ui/button';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import Link from 'next/link';

export default function LeftBar() {

   const content = [
      {
         icon: <IoMdHome size={25} />,
         text: "Home",
         to: "/"
      },
      {
         icon: <CiSearch size={25} />,
         text: "Explore",
         to: "/explore"
      },
      {
         icon: <GoBell size={25} />,
         text: "Notifiations",
         to: "/notifications"
      },
      {
         icon: <SlEnvolopeLetter size={25} />,
         text: "Messages",
         to: "/messages"
      },
      {
         icon: <RiFileList2Fill size={25} />,
         text: "Lists",
         to: "/lists"
      },
      {
         icon: <CiBookmark size={25} />,
         text: "Bookmarks",
         to: "/bookmarks"
      },
      {
         icon: <GoPeople size={25} />,
         text: "Communities",
         to: "/communities"
      },
      {
         icon: <FaXTwitter size={25} />,
         text: "Premium",
         to: "/premium"
      },
      {
         icon: <IoPersonOutline size={25}/>,
         text: "Profile",
         to: "/profile"
      },
      {
         icon: <CiCircleMore size={25} />,
         text: "More",
         to: "/more"
      }
   ]
  return (
    <div className="w-[300px]">
      <div className="w-[244px] h-[574.25px] flex flex-col absolute top-0 left-80">
        <div className="flex flex-col gap-2 justify-start h-full text-left">
          <div  className='mt-5 rounded-full hover:bg-zinc-800 duration-200 w-[40px] h-[40px]'>
            <FaXTwitter size={40} />
          </div>
          {content.map((b) => (
            <Link href={b.to}>
              <button className="items-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent/50 hover:text-accent-foreground h-10 rounded-full px-8 text-lg gap-4 flex justify-start">
                {b.icon} {b.text}
              </button>
            </Link>
          ))}
        </div>
        <button className="inline-flex items-center mt-5 justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-blue-500 text-white hover:bg-blue-600 p-4 px-8 h-14 rounded-full">
          Post
        </button>
      </div>
      <div className="absolute bottom-4 left-80 flex gap-3 rounded-full hover:bg-zinc-800 p-4 duration-200 ease-in-out cursor-pointer">
        <div>
          <img
            src="https://avatars.githubusercontent.com/u/6897348?v=4"
            className="w-10 h-10 rounded-full"
          />
        </div>
        <div className="flex flex-col">
          <h1>Yuanda</h1>
          <p className="text-sm font-thin">@EmirYuanda35037</p>
        </div>
        <RiMoreLine />
      </div>
    </div>
  );
}
