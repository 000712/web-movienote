import { connectDB } from '@/libs/mongodb'
import Post from '@/models/Post'
import { NextResponse } from 'next/server'

// 게시글 목록 조회
export async function GET() {
  try {
    await connectDB()
    const posts = await Post.find().sort({ date: -1 })
    return NextResponse.json(posts)
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}

// 게시글 작성
export async function POST(request: Request) {
  try {
    await connectDB()
    const data = await request.json()
    const post = await Post.create(data)
    return NextResponse.json(post)
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}
