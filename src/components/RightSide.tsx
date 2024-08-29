
"use client"
import React, { useState } from 'react'
import { Input } from "@/components/ui/input"
import { BiSearchAlt2 } from 'react-icons/bi'
import { FollowList, List } from '../../constants'
import { Button } from './ui/button'
import Image from 'next/image'
 
const class1 = "border-none group flex items-center w-[348px] mt-4 rounded-full bg-[#1e283266]"
const class2 = "border border-blue-500 group flex items-center w-[348px] mt-4 rounded-full bg-transparent"
export default function RightSide() {

  const [classname, setclassname] = useState("border-none group flex items-center w-[348px] mt-4 rounded-full bg-[#1e283266]");
  return (
    <div className="w-[300px] items-center text-center absolute right-80 top-0 flex flex-col gap-5 ">
      <div
        className={classname}
        onClick={() => setclassname(class2)}
        onBlur={() => {
          setclassname(class1);
        }}
      >
        <BiSearchAlt2
          className="text-white group-focus-within:text-blue-500"
          size={20}
        />
        <input
          className="p-3 bg-transparent outline-none placeholder:opacity-50 text-sm"
          placeholder="Search"
        />
      </div>

      <div className="border border-zinc-400 w-[350px] h-[162px] rounded-lg border-opacity-40 p-4 text-left">
        <div className="flex flex-col gap-4">
          <h1 className="font-bold">Subscribe to Premium</h1>
          <p className="text-sm">
            Subscribe to unlock new features and if eligible, receive a share of
            ads revenue.
          </p>
          <button className="w-[106px] h-[36px] bg-blue-500 text-white font-semibold rounded-full">
            Subscribe
          </button>
        </div>
      </div>

      <div className="flex flex-col border border-zinc-400 w-[350px] h-full break-words rounded-lg border-opacity-40 p-4 text-left cursor-pointer">
        {List.map((a) => (
          <div className="w-[348px] h-[82px] flex flex-col gap-0.5">
            <p className="font-thin text-zinc-400 text-sm">{a.type}</p>
            <p className="font-bold text-white text-md">{a.hashtag}</p>
            <p className="font-thin text-zinc-400 text-sm">{a.view} posts</p>
          </div>
        ))}
        <Button
          onClick={() => {
            return;
          }}
          className="float-left w-[100px] text-blue-500"
          variant="link"
        >
          Show more
        </Button>
      </div>

      <div className="flex gap-2 flex-col border border-zinc-500 rounded-lg w-[350px] h-[297px] text-left p-4">
        <h1 className="font-bold text-lg">Who to Follow</h1>
        {FollowList.map((d) => (
          <div className="flex flex-row gap-2 w-[348px] h-[65px]">
            <Image
              alt={d.name}
              src={d.pfp}
              width={36}
              height={2}
              className="rounded-full h-10"
            />
            <div className="flex flex-col w-30">
              <p className='text-md'>{d.name}</p>
              <p className="font-thin text-zinc-400">@{d.userName}</p>
            </div>
            <div className="ml-auto w-[78px] h-[32px]">
              <button className="rounded-full bg-white text-black font-bold">
                Follow
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
