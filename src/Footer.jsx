import React from 'react'

const Footer = () => {
  return (
    <>
    <div className="py-5 bg-gray-200 flex justify-between px-64">
       <div>
        <p>@2024 Tahir Khan <span>All Rights Reserved</span></p>
       </div>

       <div className='space-x-5'>
        <a href=' About'className='hover:underline'>About</a>
        <a href='Privacy Policy'className='hover:underline'>Privacy Policy</a>
        <a href='License'className='hover:underline'>License</a>
        <a href='Contact'className='hover:underline'>Contact</a>
       </div>
    </div>
    </>
  )
}

export default Footer
