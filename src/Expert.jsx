import React from 'react'

const Expert = () => {
  return (
    <>
    <div className='Main-container my14'>
        <h1 className='text-4xl font-bold text-center underline'>My Expertise</h1>
        {/* Expertise Section */}
        <div className="box-container flex space-y-4 my-14">
            <div className='flex justify-center'>
            {/* Text */}

            <div className='w-2/3 space-y-4 text-center'>
            <h1 className='text-4xl font-bold '>I love these Technologies</h1>
            <p>Web developer in Frontend Technologies. Has good sense of UI and UX design. Loves coding in Javascript and React. Familiar with Angular, NodeJS, AngularJS, AWS.</p>
            
            <button className='bg-orange-500 px-3 py-2 rounded-full shadow-lg '>Hire Me</button>

            
            </div>
            </div>
            <div className=' flex justify-center'>
                {/* Skill */}
                <div className='flex w-2/3 space-x-3 h-fit flex-wrap'>
                <p className= 'bg-gray-300  px-3 py-2 mt-3  hover:bg-orange-500  rounded-full w-fit'>    
                React</p>
                <p className='bg-gray-300 px-3 py-2 mt-3  hover:bg-orange-500 rounded-full w-fit'>    
                Javascript</p>

                <p className='bg-gray-300 px-3 py-2 mt-3  hover:bg-orange-500 rounded-full w-fit'>    
                CSS/SCSS</p>

                <p className='bg-gray-300 px-3 py-2 mt-3  hover:bg-orange-500 rounded-full w-fit'>    
                Talwind CSS</p>

                <p className='bg-gray-300 px-3 py-2 mt-3  hover:bg-orange-500 rounded-full w-fit'>    
                Next JS</p>

                <p className='bg-gray-300 px-3 py-2 mt-3  hover:bg-orange-500 rounded-full w-fit'>    
                Angular</p>

                <p className='bg-gray-300 px-3 py-2 mt-3  hover:bg-orange-500 rounded-full w-fit'>    
                Deployment</p>
                <p className='bg-gray-300 px-3 py-2 mt-3  hover:bg-orange-500 rounded-full w-fit'>    
                UI/UX Design</p>

               
                <p className='bg-gray-300 px-3 py-2 mt-3  hover:bg-orange-500 rounded-full w-fit'>    
                Boostrap</p>

                </div>





            </div>
        </div>
    </div>
    </>
  )
}

export default Expert
