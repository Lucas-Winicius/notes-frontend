"use client";
import arrow from "@/images/Arrow.svg";
import axios from "axios";
import { getCookie } from "cookies-next";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CreateNote() {
  const route = useRouter();
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const changeHandler = (event: React.ChangeEvent) => {
    const target = event.target as HTMLInputElement;
    setNote({ ...note, [target.name]: target.value });
  };

  const submitHandler = () => {
    const api_url = process.env.NEXT_PUBLIC_API_URL;
    const userId = getCookie("UserAuthentication");

    axios({
      method: "POST",
      url: `${api_url}/note`,
      data: note,
      headers: {
        userauthentication: userId,
      },
    }).finally(() => {
      route.push("/");
    });
  };

  const home = () => {
    route.push("/");
  };

  return (
    <div>
      <div>
        <button
          className="fixed top-4 left-4 flex justify-center items-center space-x-4"
          onClick={home}
        >
          <Image
            src={arrow}
            alt="Arrow Back"
            width={15}
            height={15}
            className="rotate-90"
          />
          <p className="text-white font-bold">Home</p>
        </button>
      </div>
      <div className="flex flex-col space-y-7">
        <input
          type="text"
          placeholder="Title"
          name="title"
          onChange={changeHandler}
          className="py-2 px-6 bg-transparent border-b-2 text-white"
        />
        <textarea
          placeholder="Content..."
          rows={1}
          autoCorrect="off"
          autoCapitalize=""
          name="content"
          onChange={changeHandler}
          className="py-2 px-6 bg-transparent border-b-2 text-white"
        />
        <button
          className="bg-green-600 py-2 px-4 rounded text-white font-bold hover:bg-green-700 transition"
          onClick={submitHandler}
        >
          Create
        </button>
      </div>
    </div>
  );
}
