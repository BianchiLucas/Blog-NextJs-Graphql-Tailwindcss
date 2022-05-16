import React, { useState, useEffect } from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

import { FeaturedPostCard } from '../components'
import { getFeaturedPosts } from '../services'

const responsiveCarousel = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 1024 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 1024, min: 768 },
        items: 3,
    },
    tablet: {
        breakpoint: { max: 768, min: 640 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 640, min: 0 },
        items: 1,
    },
}

const FeaturedPosts = () => {

    const [featuredPosts, setFeaturedPosts] = useState([])
    const [dataLoaded, setDataLoaded] = useState(false)

    useEffect(() => {
        getFeaturedPosts()
            .then((res) => {
                setFeaturedPosts(res)
                setDataLoaded(true)
            })
    }, [])

    const leftArrow = (
        <div className='absolute arrow-btn left-0 text-center py-3 px-4 cursor-pointer bg-coffee4'>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
            </svg>
        </div>
    )

    const rightArrow = (
        <div className='absolute arrow-btn right-0 text-center py-3 cursor-pointer bg-coffee4'>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
            </svg>
        </div>
    )

    return (
        <div className='mb-8 items-center'>
            <Carousel infinite customLeftArrow={leftArrow} customRightArrow={rightArrow} responsive={responsiveCarousel} itemClass='px-4'>
                {dataLoaded && featuredPosts.map((post, index) => (
                    <FeaturedPostCard key={index} post={post} />
                ))}
            </Carousel>
        </div>
    )
}

export default FeaturedPosts