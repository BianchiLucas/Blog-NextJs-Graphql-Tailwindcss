import React from 'react'
import Link from 'next/link'
import moment from 'moment'

const postcard = ({ post }) => {
  console.log(post)
  return (
    <div className='bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8'>
      <div className='relative overflow-hidden shadow-md pb-80 mb-6'>
        <img 
          className='objet-top absolute h-80 w-full objet-cover shadow-lg rounded-t-lg lg: rounded-lg'
          src={post.featuredImage.url}
          alt={post.title}
        />
      </div>
      <h1 className='transition duration-500 text-center mb-8 cursor-pointer hover:text-coffee4 text-3xl font-semibold'>
        <Link href={`/post/${post.slug}`}>
          {post.title}
        </Link>
      </h1>
    </div>
  )
}

export default postcard