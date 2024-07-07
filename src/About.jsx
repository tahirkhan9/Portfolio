import React, { useState } from 'react'
import Ban from './Assets/Ban.jpeg'
const About = () => {
    const[data,setData]=useState({
        image:Ban,
        title:"I am Frontend Developer",
        actionbutton:{
            title:'Read More ..',
            link:"./readmore"
        }
    })
  return (
    <>
    <div className="mainly-con py-16 bg-gray-100">

        <h1 className='text-4xl pb-16 font-bold underline  text-center'>About Me</h1>
        <div className="profile flex items-center">
        {/* image  */}
        <div className="w-full flex justify-center">
            <img src={data.image}/>
        </div>
        {/* content */}
        <div className="w-full flex justify-center">
            <div className="space-y-4 w-2/3">
            <h1 className='text-4xl font-semibold'>{data.title}</h1>
            <p>Web developer in Frontend Technologies. Has good sense of UI and UX design. Loves coding in Javascript and React. Familiar with Angular, NodeJS, AngularJS, AWS.</p>
            <button className="bg-orange-500 rounded-full px-2 py-1 shadow-lg hover:bg-slate-600">{data.actionbutton.title}</button>
            </div>
        </div>
        </div>
    </div>
    </>
  )
}

export default About
