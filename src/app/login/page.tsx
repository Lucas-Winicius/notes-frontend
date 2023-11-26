"use client";
import key from "@/images/key.svg";
import tag from "@/images/tag.svg";
import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import { setCookie } from "cookies-next";
import { redirect, useRouter } from "next/navigation";

function Login() {
  const route = useRouter()
  const [form, setForm] = useState({
    nick: "",
    pass: "",
    loginError: false,
  });

  const changeHandler = (event: React.ChangeEvent) => {
    const target = event.target as HTMLInputElement;
    setForm({ ...form, [target.name]: target.value, loginError: false });
  };

  const handleSubmit = async () => {
    const api_url = process.env.NEXT_PUBLIC_API_URL;

    try {
      const login = await axios({
        method: "post",
        url: `${api_url}/login`,
        data: form,
      });

      const userID = login.data.id;

      setCookie("UserAuthentication", userID, {
        expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
        path: "/",
      });

      route.push("/")
    } catch (e) {
      setForm({
        ...form,
        loginError: true,
      });
    }
  };

  return (
    <div className="bg-stone-900 lg:w-4/12 h-3/4 p-10 rounded-2xl flex flex-col justify-between space-y-16 shadow-xl hover:shadow-2xl transition">
      <div className="w-full flex justify-center">
        <h1 className="text-white text-2xl font-bold">NoteIt</h1>
      </div>
      <div className="space-y-10">
        <div className="flex flex-row space-x-3 border-b border-b-zinc-300 pb-2 px-3">
          <Image src={tag} alt="tag" height={13} width={13}></Image>
          <input
            type="text"
            className="w-full bg-transparent outline-none text-white"
            placeholder="Nick"
            name="nick"
            onChange={changeHandler}
          />
        </div>
        <div className="flex flex-row space-x-3 border-b border-b-zinc-300 pb-2 px-3">
          <Image src={key} alt="key" height={13} width={13}></Image>
          <input
            type="password"
            className="w-full bg-transparent outline-none text-white"
            placeholder="Password"
            name="pass"
            onChange={changeHandler}
          />
        </div>
        {form.loginError && (
          <p className="text-xs text-center text-red-600 font-bold">
            incorrect username or password.
          </p>
        )}
      </div>
      <div className="text-right">
        <button
          className="bg-white py-2 px-7 rounded-md text-sm font-medium"
          onClick={handleSubmit}
          type="submit"
        >
          Register
        </button>
      </div>
    </div>
  );
}

export default Login;
