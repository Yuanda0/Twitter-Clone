"use client"
import React from 'react'
import { Button } from './ui/button';
import { RiHome5Line } from "react-icons/ri";
import { FaSearch } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoMdNotificationsOutline } from "react-icons/io";
import { TbNotes } from "react-icons/tb";
import { CiMail, CiBookmark } from "react-icons/ci";
import { BsPeople } from "react-icons/bs";
import { IoPersonOutline } from "react-icons/io5";
import { CiCircleMore } from "react-icons/ci";
import Link from 'next/link';
import { IoIosMore } from "react-icons/io";


export default function LeftBar() {
  return (
    <div>
      <div className="w-[244px] h-[574.25px] flex flex-col absolute top-0 left-80">
        <FaXTwitter size={40} className="ml-6" />
        <div className="flex flex-col gap-2 justify-start h-full text-left">
          <Link href="/">
            <Button
              variant="ghost"
              size="lg"
              className="text-lg gap-4 flex justify-start"
            >
              <RiHome5Line size={30} />
              Home
            </Button>
          </Link>
          <Link href="/explore">
            <Button
              variant="ghost"
              size="lg"
              className="text-lg gap-4 flex justify-start"
            >
              <FaSearch />
              Explore
            </Button>
          </Link>
          <Link href="/notifications">
            <Button
              variant="ghost"
              size="lg"
              className="text-lg gap-4 flex justify-start "
            >
              <IoMdNotificationsOutline size={30} />
              Notifications
            </Button>
          </Link>
          <Link href="/messages">
            <Button
              variant="ghost"
              size="lg"
              className="text-lg gap-4 flex justify-start fill-"
            >
              <CiMail size={30} />
              Messages
            </Button>
          </Link>
          <Link href="/lists">
            <Button
              variant="ghost"
              size="lg"
              className="text-lg gap-4 flex justify-start"
            >
              <TbNotes size={30} />
              Lists
            </Button>
          </Link>
          <Link href="/bookmarks">
            <Button
              variant="ghost"
              size="lg"
              className="text-lg gap-4 flex justify-start"
            >
              <CiBookmark size={30} />
              Bookmarks
            </Button>
          </Link>
          <Link href="/communities">
            <Button
              variant="ghost"
              size="lg"
              className="text-lg gap-4 flex justify-start"
            >
              <BsPeople size={30} />
              Communities
            </Button>
          </Link>
          <Link href="/premium">
            <Button
              variant="ghost"
              size="lg"
              className="text-lg gap-4 flex justify-start"
            >
              <FaXTwitter size={30} />
              Premium
            </Button>
          </Link>
          <Link href="/profile">
            <Button
              variant="ghost"
              size="lg"
              className="text-lg gap-4 flex justify-start"
            >
              <IoPersonOutline size={30} />
              Profile
            </Button>
          </Link>
          <Link href="/more">
            <Button
              variant="ghost"
              size="lg"
              className="text-lg gap-4 flex justify-start"
            >
              <CiCircleMore size={30} />
              More
            </Button>
          </Link>
        </div>
        <Button variant="blue" size="lg" className="h-14 rounded-full">
          Post
        </Button>
      </div>
        <div className='absolute bottom-4 left-80 flex gap-3 rounded-full hover:bg-zinc-800 p-4 duration-200 ease-in-out cursor-pointer'>
          <div>
          <img
            src="https://avatars.githubusercontent.com/u/6897348?v=4"
            className="w-10 h-10 rounded-full"
          />
          </div>
          <div className='flex flex-col'>
            <h1>Yuanda</h1>
            <p className='text-sm font-thin'>@EmirYuanda35037</p>
          </div>
          <IoIosMore />
        </div>
    </div>
  );
}
