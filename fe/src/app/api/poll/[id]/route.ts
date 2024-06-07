import type { NextRequest } from "next/server";

import { NextResponse } from "next/server";

export async function PATCH(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const splitPathName = pathname.split("/");
  const id = splitPathName?.findLast((v) => v);
  const response = await fetch(`http://localhost:8000/poll/${id}/`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      is_done: true,
    }),
  });
  const data = await response.json();
  return NextResponse.json(data);
}
