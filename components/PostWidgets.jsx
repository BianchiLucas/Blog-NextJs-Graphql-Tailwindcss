import React, { useEffect, useState } from 'react'
import moment from 'moment'
import Link from 'next/link'
import { getRecentPosts, getSimilarPosts } from '../services'


const PostWidgets = ({ categories, slug }) => {

  const [relatedPosts, setRelatedPosts] = useState([])

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug)
        .then((result) => setRelatedPosts(result))
    } else {
      getRecentPosts()
        .then((result) => setRelatedPosts(result))
    }
  }, [slug])

  return (
    <div className='bg-white rounded-lg shadow-lg p-8 mb-8'>
      <h3 className='text-xl mb-8 font-semibold border-b pb-4'>
        {slug ? 'Related posts' : 'Recent posts'}
      </h3>
      {
        relatedPosts.map((post) => (
          <div key={post.title} className='flex items-center w-full mb-4'>
            <div className='w-16 flex-none'>
              <img
                src={post.featuredImage.url}
                alt={post.title}
                className='align-middle rounded-xl'
                height="60px"
                width="60px"
              />
            </div>
            <div className='flex-grow ml-4 text-gray-700'>
              <p className='text-xs text-gray-500'>
                {moment(post.createdAt).format('MMM DD, YYYY')}
              </p>
              <Link href={`/post/${post.slug}`}>
                {post.title}
              </Link>
            </div>
          </div>
        ))
      }
    </div>

  )
}

export default PostWidgets