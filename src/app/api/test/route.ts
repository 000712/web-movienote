import { connectDB } from '@/libs/mongodb'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    await connectDB()
    console.log('MongoDB connection test...')
    return NextResponse.json({ message: 'MongoDB connected successfully' })
  } catch (error) {
    console.error('Connection error:', error)
    return NextResponse.json(
      { error: 'Failed to connect to MongoDB' },
      { status: 500 }
    )
  }
}
