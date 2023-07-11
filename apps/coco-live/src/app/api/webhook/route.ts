import { NextResponse } from 'next/server'

export function GET(request: Request) {
  return new NextResponse(request.url, {
    status: 200,
  })
}
