import React, { useState, useEffect, useRef } from 'react'

import { submitComment } from '../services'


const Comments = ({ slug }) => {

  const [error, setError] = useState(false)
  const [localStorage, LocalStorage] = useState(null)
  const [showSuccessMsg, setShowSuccessMsg] = useState(false)
  const commentElem = useRef()
  const nameElem = useRef()
  const emailElem = useRef()
  const storeDataElem = useRef()


  useEffect(() => {
    nameElem.current.value = window.localStorage.getItem('name')
    emailElem.current.value = window.localStorage.getItem('email')
  }, [])


  const handleCommentSubmission = () => {
    setError(false)

    const { value: comment } = commentElem.current
    const { value: name } = nameElem.current
    const { value: email } = emailElem.current

    if (!comment || !name || !email) {
      setError(true)
      return
    }
    const commentObj = { name, email, comment, slug }

    if (storeDataElem.current.checked) {
      window.localStorage.setItem('name', name)
      window.localStorage.setItem('email', email)
    } else {
      window.localStorage.removeItem('name', name)
      window.localStorage.removeItem('email', email)
    }

    submitComment(commentObj)
      .then((res) => {
        setShowSuccessMsg(true)

        setTimeout(() => {
          setShowSuccessMsg(false)
        }, 3000)
      })
  }


  return (
    <div className='bg-white rounded-lg shadow-lg p-8 pb-12 mb-8'>
      <h3 className='text-xl font-semibold mb-8 border-b pb-4'>Leave a Comment</h3>
      <div className='grid grid-cols-1 gap-4 mb-4'>
        <textarea
          ref={commentElem}
          name='comment'
          placeholder='Comment'
          className='w-full p-4 outline-none rounded-lg focus:ring-2 focus:ring-gray-400 bg-gray-300 text-gray-800'
        />
      </div>
      <div className='grid grid-cols-1 gap-4 mb-4 lg:grid-cols-2'>
        <input
          type="text"
          name='name'
          placeholder='Name'
          ref={nameElem}
          className='w-full py-2 px-4 outline-none rounded-lg focus:ring-2 focus:ring-gray-400 bg-gray-300 text-gray-800'
        />
        <input
          type="text"
          name='email'
          placeholder='Email'
          ref={emailElem}
          className='w-full py-2 px-4 outline-none rounded-lg focus:ring-2 focus:ring-gray-400 bg-gray-300 text-gray-800'
        />
      </div>
      <div className='grid grid-cols-1 gap-4 mb-4'>
        <div>
          <input type="checkbox" ref={storeDataElem} id='storeData' name='storeData' value='true' />
          <label className='text-gray-500 cursor-pointer' htmlFor='storeData'> 	&nbsp;Save my name and email for the next time I comment</label>
        </div>
      </div>

      {error && <p className='text-red-500 text-sm'>All fields are required</p>}

      <div className='mt-8'>
        <button
          type='button'
          onClick={handleCommentSubmission}
          className='transition duration-400 ease bg-coffee3 hover:bg-coffee4 rounded-full px-3 py-2 text-white hover:text-coffee1 cursor-pointer'>Post comment</button>
      </div>

      {showSuccessMsg && <p className='text-green-500 text-sm'>Comment submited for review</p>}
    </div>
  )
}

export default Comments