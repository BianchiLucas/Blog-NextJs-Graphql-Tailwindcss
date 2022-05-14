import React from 'react'
import Image from 'next/image'

const Author = ({ author }) => {
  return (
    <div className='bg-black bg-opacity-40 mt-20 mb-8 p-12 relative rounded-lg text-center'>
      <div className='absolute left-0 right-0 -top-14'>
        <Image
          src={author.photo.url}
          alt={author.name}
          unoptimized={true}
          className='align-middle rounded-full shadow-md'
          height='100px'
          width='100px' />
      </div>
      <h3 className='text-white text-xl m-4 font-bold'>{author.name}</h3>
      <p className='text-white text-lg'>{author.bio}</p>
    </div>
  )
}

export default Author