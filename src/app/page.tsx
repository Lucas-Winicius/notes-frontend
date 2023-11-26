/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useEffect, useState } from "react";
import { getCookie, setCookie } from "cookies-next";
import axios from "axios";

export default function Home() {
  const [notes, setNotes] = useState<NoteType[]>();
  const userId = getCookie("UserAuthentication");
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
      .then((d) => setNotes(d.notes))
      .catch(() => {
        setCookie("UserAuthentication", null, {
          expires: new Date(Date.now()),
        });
      })
  }, []);

  return <div></div>;
}
