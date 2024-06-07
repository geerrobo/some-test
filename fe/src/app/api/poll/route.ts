import type { NextRequest } from "next/server";

import { NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const response = await fetch("http://localhost:8000/poll");
  const data = await response.json();
  return NextResponse.json(data);
}

export async function POST(request: NextRequest) {
  const { title, description } = await request.json();
  const response = await fetch("http://localhost:8000/poll/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title,
      description,
    }),
  });
  const data = await response.json();
  return NextResponse.json(data);
}
