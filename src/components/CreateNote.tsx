"use client";
import Image from "next/image";
import { useState } from "react";
import more from "@/images/more.svg";

export default function CreateNote() {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="w-40 h-40 bg-stone-900 flex items-center justify-center relative rounded cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="absolute transition-all duration-500 ease-in-out"
        style={{ top: hovered ? "25%" : "40%" }}
      >
        <Image src={more} alt="Plus Icon" width={32} height={32} />
      </div>
      <div
        className={`absolute ${
          hovered ? "opacity-100" : "opacity-0"
        } transition-all duration-500 ease-in-out`}
        style={{ top: hovered ? "70%" : "90%" }}
      >
        <p className="text-sm text-white font-semibold">Create note</p>
      </div>
    </div>
  );
}
