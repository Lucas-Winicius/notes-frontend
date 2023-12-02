/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useEffect, useState } from "react";
import { getCookie, setCookie } from "cookies-next";
import axios from "axios";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CreateNote from "@/components/CreateNote";
import { useRouter } from "next/navigation";

export default function Home() {
  const [user, setUser] = useState<UserType>();
  const userId = getCookie("UserAuthentication");
  const route = useRouter();
  const api_url = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    axios({
      method: "get",
      url: `${api_url}/user`,
      headers: {
        userauthentication: userId,
      },
    })
      .then((r) => r.data)
      .then((d) => setUser(d))
      .catch(() => {
        setCookie("UserAuthentication", null, {
          expires: new Date(),
        });
      });
  }, []);

  const handleFormOpen = () => {
    route.push("/create");
  };

  return (
    <div>
      <Header nick={user?.nick} />
      <div className="min-h-[calc(100vh-120px)] px-4 py-5 flex flex-wrap justify-between">
        <div onClick={handleFormOpen}>
          <CreateNote />
        </div>
      </div>
      <Footer />
    </div>
  );
}
