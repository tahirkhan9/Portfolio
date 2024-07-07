import React, { useState } from 'react'

const Header = () => {

    const [brandName,setBrandName]=useState("Tahir Khan");
    const[btnName,setBtnName]=useState("Hire Me")
   const[menuLinks,setMenuLinks]=useState([
        {
            title: "Home",
            link: "/Home",
            id: 1,
        },
        {
            title: "About",
            link: "/About",
            id: 2,
        },
        {
            title: "Skills",
            link: "/Skills",
            id: 3,
        },
        {
            title: "Portfolio",
            link: "/Portfolio",
            id: 4,
        },
        {
            title: "Contact",
            link: "/Contact",
            id: 5,
        }
    ])
  return (
    <>
      <div className=" h-20 border Main flex justify-between items-center px-16 bg-gray-300">
      <div>
       <h1 className='text-2xl font-bold'>{brandName}</h1>
    </div>
    <div className='space-x-6'>
        
        {menuLinks.map((link)=>(
            <a key={link.id} href={link.link}className="hover:text-orange-600">
                {link.title}
                </a>
        
        
        ))}

        {/* <a href='/About'className="hover:text-orange-600">About</a>

        <a href='/Skills'className="hover:text-orange-600">Skills</a>
        <a href='Portfolio'className="hover:text-orange-600">Portfolio</a>
        <a href='/Contact'className="hover:text-orange-600">Contact</a> */}


    </div>


     <div>
        <button className='px-3 py-2 bg-orange-600 text-white rounded-full'>{btnName}</button>
     </div>
     </div>
    </>
    
  )
}

export default Header
