'use client'

import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

// 더미 데이터 (실제로는 데이터베이스에서 가져와야 함)
const posts = {
  '1': {
    id: 1,
    title: '첫 번째 게시글입니다',
    author: '홍길동',
    date: '2024-03-20',
    views: 0,
    content: '첫 번째 게시글의 내용입니다. 반갑습니다.',
  },
  '2': {
    id: 2,
    title: '영화 리뷰 작성했습니다',
    author: '김철수',
    date: '2024-03-21',
    views: 5,
    content: '오늘 본 영화에 대한 리뷰입니다. 정말 재미있었습니다.',
  },
}

export default function EditPost({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [post, setPost] = useState({
    title: '',
    content: '',
  })

  useEffect(() => {
    // 기존 게시글 데이터 불러오기
    const existingPost = posts[params.id]
    if (existingPost) {
      setPost({
        title: existingPost.title,
        content: existingPost.content,
      })
    }
  }, [params.id])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // 여기에 실제 데이터 수정 로직 구현
    console.log('수정된 게시글:', post)

    // 수정 완료 후 상세 페이지로 돌아가기
    router.push(`/board/${params.id}`)
  }

  return (
    <div className="container mx-auto px-4 py-24">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">게시글 수정</h1>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-gray-700 font-medium mb-2"
            >
              제목
            </label>
            <input
              type="text"
              id="title"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={post.title}
              onChange={(e) => setPost({ ...post, title: e.target.value })}
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="content"
              className="block text-gray-700 font-medium mb-2"
            >
              내용
            </label>
            <textarea
              id="content"
              rows={10}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={post.content}
              onChange={(e) => setPost({ ...post, content: e.target.value })}
              required
            />
          </div>

          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={() => router.push(`/board/${params.id}`)}
              className="px-4 py-2 text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
            >
              취소
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
            >
              수정완료
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
