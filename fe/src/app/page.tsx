"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const fetchData = async () => {
    const response = await fetch("/api/poll", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    setData(data);
  };

  const postData = async () => {
    const response = await fetch("/api/poll", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        description,
      }),
    });
    fetchData();
  };

  const updateData = async (id: string) => {
    const response = await fetch(`/api/poll/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        is_done: true,
      }),
    });
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="bg-white w-full min-h-screen flex flex-col">
      {data.map((item: any, index) => (
        <div
          key={item.id}
          onClick={() => updateData(item.id)}
          className={`${item.is_done ? "text-green-500" : "text-black"}`}
        >
          {item.title}: {item.description}
        </div>
      ))}
      <input
        type="text"
        className="border text-black"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        className="border text-black"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={postData} className="text-black">
        Submit
      </button>
    </div>
  );
}
