"use client"
import React, { useState } from 'react'
import { Button } from './ui/button';
import { Posts } from '../../constants';
import {  BookmarkIcon, DotsHorizontalIcon, HeartIcon, ImageIcon, Share2Icon } from "@radix-ui/react-icons"
import { GlobeIcon } from "@radix-ui/react-icons";
import { MdBlock, MdNotInterested, MdOutlineGifBox, MdPlaylistAddCircle } from "react-icons/md";
import { BiPoll } from "react-icons/bi";
import { BsEmojiSmile } from "react-icons/bs";
import { GrSchedulePlay } from "react-icons/gr";
import { FaRegComment, FaRegFlag } from "react-icons/fa6";
import { BiRepost } from "react-icons/bi";
import { AiFillSignal } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import NavBar from './NavBar';
import Linkify from "react-linkify";
import Link from 'next/link';
import { Avatar } from '@radix-ui/react-avatar';
import { AvatarFallback, AvatarImage } from './ui/avatar';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { TfiFaceSad } from "react-icons/tfi"
import { SlUserFollow } from 'react-icons/sl';
import { RiUserStarLine } from 'react-icons/ri';
import { TiVolumeMute } from "react-icons/ti";
import { IoIosStats } from 'react-icons/io';
import { ImEmbed2 } from "react-icons/im";

function PopOver (userName : string) {
  const datas = [
    { icon: <MdNotInterested />, text: `Not interested in ${userName}` },
    { icon: <TfiFaceSad />, text: "Not interested in this post" },
    { icon: <SlUserFollow />, text: `Follow @${userName}` },
    { icon: <RiUserStarLine />, text: `Subscribe to @${userName}` },
    { icon: <MdPlaylistAddCircle />, text: `Add/remove @${userName} from Lists` },
    { icon: <TiVolumeMute />, text: `Mute @${userName}` },
    { icon: <MdBlock />, text: `Block @${userName}` },
    { icon: <IoIosStats />, text: "View post engagements" },
    { icon: <ImEmbed2 />, text: "Embed Post" },
    { icon: <FaRegFlag />, text: "Report Post" }
  ];

  return datas.map((p) => (
    <div className="flex flex-col py-2">
      <div className="flex gap-1 cursor-pointer">
        <div className="mr-2">{p.icon}</div>
        <div>{p.text}</div>
      </div>
    </div>
  ));
}

export default function Feed() {

  const [postContent, setPostContent] = useState("");

  
  return (
    <div className="feed overflow-x-hidden w-[600px] flex flex-col h-full border-x border-zinc-500 overflow-auto">
      <NavBar />
      <div className="p-4 flex w-[598px] h-[153px] border-b border-zinc-500">
        <div className="w-10 h-[153px]">
          <img
            className="w-10 h-10 rounded-full mt-2"
            src="https://yt3.ggpht.com/yti/AGOGRCoS3f-KLrNS_6UrrG_yiH18KGtAmcnUO8rqKPsZ=s88-c-k-c0x00ffffff-no-rj"
          />
        </div>
        <div className="relative w-[514px] h-[52px]">
          <input
            onChange={(e) => setPostContent(e.target.value)}
            className="h-[52px] w-[514px] bg-transparent outline-none pl-2"
            type="text"
          />
          {postContent.length === 0 && (
            <span className="absolute pointer-events-none left-2 top-1/2 transform -translate-y-1/2 text-gray-500">
              What is happening?!
            </span>
          )}
          {postContent.length !== 0 && (
            <div className="border-b border-zinc-600">
              <Button
                className="text-blue-700 flex items-center hover:text-blue-700 rounded-2xl p-2 text-[12px]"
                variant="ghost"
              >
                <GlobeIcon /> Everyone can reply
              </Button>
            </div>
          )}
          <div className="w-[514px] h-[48px] flex">
            <div className="flex gap-4">
              <div className="selection-divs">
                <ImageIcon className="selection-buttons" />
              </div>
              <div className="selection-divs">
                <MdOutlineGifBox className="selection-buttons" />
              </div>
              <div className="selection-divs">
                <BiPoll className="selection-buttons" />
              </div>
              <div className="selection-divs">
                <BsEmojiSmile className="selection-buttons" />
              </div>
              <div className="selection-divs">
                <GrSchedulePlay className="selection-buttons" />
              </div>
              <div className="selection-divs">
                <CiLocationOn className="selection-buttons" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col'>
        {Posts.map((p) => {
          return (
            <div
              className="cursor-pointer border-y border-zinc-500 py-10  px-4 w-full flex hover:bg-zinc-900/60 duration-100 ease-out"
              key={p.id}
            >
              <div className="mr-2 rounded-lg">
                <Avatar>
                  <AvatarImage
                    src={p.pfp}
                    alt={p.userName}
                    className="w-10 h-10 rounded-full"
                  />
                  <AvatarFallback className="w-10 h-10 rounded-full">
                    {p.userName.slice(0, 2)}
                  </AvatarFallback>
                </Avatar>
              </div>
              <div className="flex flex-col w-full">
                <div className="flex gap-2 h-[20px] items-center">
                  <Button variant="link">{p.userName}</Button>
                  <span className="font-thin text-[15px]">
                    @{p.userName} &middot; 4h
                  </span>
                  <div className="ml-auto p-2 rounded-full hover:bg-blue-500 duration-200 ease-in-out">
                    <Popover>
                      <PopoverTrigger asChild>
                        <DotsHorizontalIcon />
                      </PopoverTrigger>
                      <PopoverContent className="w-80">
                        {PopOver(p.userName)}
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>
                <div className="break-words">
                  <Linkify
                    componentDecorator={(decoratedHref, decoratedText, key) => (
                      <Link
                        className="text-blue-700 hover:underline"
                        href={decoratedHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        key={key}
                      >
                        {decoratedText}
                      </Link>
                    )}
                  >
                    <p>{p.text}</p>
                  </Linkify>
                </div>
                <div className="max-w-[500px]">
                  <img className="rounded-lg mt-2" src={p.img} alt="" />
                </div>
                <div className="flex">
                  <button className="group items-center flex gap-1 font-thin w-20 h-10">
                    <div className="group-hover:bg-blue-500 p-2 rounded-full duration-300 ease-in-out">
                      <FaRegComment />
                    </div>
                    <span className="group-hover:text-sky-400 duration-200 ease-out">
                      {p.comment}
                    </span>
                  </button>
                  <button className="group items-center flex gap-1 font-thin w-20 h-10">
                    <div className="group-hover:bg-green-700 p-2 rounded-full duration-300 ease-in-out">
                      <BiRepost />
                    </div>
                    <span className="group-hover:text-emerald-600 duration-200 ease-out">
                      {p.repost}
                    </span>
                  </button>
                  <button className="group items-center flex gap-1 font-thin w-20 h-10">
                    <div className="group-hover:bg-pink-600 p-2 rounded-full duration-300 ease-in-out">
                      <HeartIcon />
                    </div>
                    <span className="group-hover:text-pink-400 duration-200 ease-out">
                      {p.like}
                    </span>
                  </button>
                  <button className="group items-center flex gap-1 font-thin w-20 h-10">
                    <div className="group-hover:bg-blue-500 p-2 rounded-full duration-300 ease-in-out">
                      <AiFillSignal />
                    </div>
                    <span className="group-hover:text-sky-400 duration-200 ease-out">
                      {p.view}
                    </span>
                  </button>
                  <div className="flex items-center ml-auto ">
                    <div className="p-2 group hover:bg-blue-500 duration-300 ease-in-out rounded-full">
                      <BookmarkIcon className="w-5 h-5 group-hover:text-blue-900" />
                    </div>
                    <div className="p-2 group hover:bg-blue-500 duration-300 ease-in-out rounded-full">
                      <Share2Icon className="w-5 h-5 group-hover:text-blue-900" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}