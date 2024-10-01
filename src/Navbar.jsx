import React, { useState } from 'react'
import { Link } from "react-scroll"
const Header = () => {

    const [brandName,setBrandName]=useState("Tahir Khan");
    const[btnName,setBtnName]=useState("Hire Me")
    const navItems = [
        {
            id: 1,
            text: "Home"
          },
          {
            id: 2,
            text: "About"
          },
          {
            id: 3,
            text: "Portfolio"
          },
         
          {
            id: 4,
            text: "Expert"
          },
    ]
  return (
    <>
      <div className=" h-10 border Main hidden w-full  md:flex justify-between items-center px-16 bg-gray-300 fixed
       z-50">
      <div>
       <h1 className='text-2xl font-bold'>{brandName}</h1>
    </div>
    <div className='space-x-6 '>
    <ul className='hidden md:flex space-x-9 mr-9 '>
              {
                navItems.map(({ id, text }) => (
                  <li className='hover:scale-105 duration-200 cursor-pointer' key={id}>
                    <Link to={text}
                      smooth={true}
                      duration={500}
                      offset={-70}
                      activeClass="active"

                    >{text}


                    </Link>

                  </li>
                ))
              }
            </ul>
        
        {/* {menuLinks.map((link)=>(
            <a key={link.id} href={link.link}className="hover:text-orange-600">
                {link.title}
                </a>
        
        
        ))} */}

        {/* <a href='/About'className="hover:text-orange-600">About</a>

        <a href='/Skills'className="hover:text-orange-600">Skills</a>
        <a href='Portfolio'className="hover:text-orange-600">Portfolio</a>
        <a href='/Contact'className="hover:text-orange-600">Contact</a> */}


    </div>


     <div>
        <a href='https://www.linkedin.com/in/tahir-khan-4968952b1/' target="_blank" className='px-3 py-2 bg-orange-600 text-white rounded-full'>{btnName}</a>
     </div>
     </div>
    </>
    
  )
}

export default Header
