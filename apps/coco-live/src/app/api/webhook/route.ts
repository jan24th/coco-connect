import { NextResponse } from 'next/server'

export function GET(request: Request) {
  return new NextResponse(`GET: ${request.url}`, {
    status: 200,
  })
}

export function POST(request: Request) {
  return new NextResponse(`POST: ${request.url}`, {
    status: 200,
  })
}
