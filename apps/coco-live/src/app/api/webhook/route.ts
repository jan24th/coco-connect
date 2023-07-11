import { NextResponse } from 'next/server'

export function GET(request: Request) {
  return new NextResponse(`GET: ${request.url}`, {
    status: 200,
  })
}

export async function POST(request: Request) {
  const body = await request.json()
  return new NextResponse(JSON.stringify({ body, url: request.url }), {
    status: 200,
  })
}
