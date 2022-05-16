import React from 'react'
import moment from 'moment'
import Image from 'next/image'
import Link from 'next/link'


const FeaturedPostCard = ({ post }) => {
    return (
        <div className='relative h-72'>
            <div className='absolute rounded-lg shadow-lg bg-center bg-no-repeat bg-cover inline-block w-full h-72' style={{ backgroundImage: `url('${post.featuredImage.url}')`}} />
            <div className='absolute rounded-lg bg-center bg-gradient-to-b from-gray-300 via-gray-700 to-black opacity-60 w-full h-72' />
            <div className='flex flex-col rounded-lg p-4 items-center justify-center absolute w-full h-full'>
                <p className='text-white mb-4 font-semibold text-xs'>{moment(post.createdAt).format('MMM DD, YYYY')}</p>
                <p className='text-white mb-4 font-semibold text-xl'>{post.title}</p>
                <div className='flex items-center justify-center absolute bottom-5 w-full'>
                    <Image 
                        unoptimized
                        alt={post.author.name}
                        src={post.author.photo.url}
                        height='30px'
                        width='30px'
                        className='align-middle drop-shadow-lg rounded-full'
                    />
                    <p className='inline align-middle text-white font-medium ml-2'>{post.author.name}</p>
                </div>
            </div>
            <Link href={`/post/${post.slug}`}>
                <span className='cursor-pointer absolute w-full h-full' />
            </Link>
        </div>
    )
}

export default FeaturedPostCard