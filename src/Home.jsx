import React, { useEffect, useRef } from 'react'
import Ban from './Assets/Ban.jpeg'
import Typed from 'typed.js'


const Banner = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {

      strings: ["Frontend Developer", "Web Developer", "UI UX Designer"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 100,
      typeSpeed: 50,
      backSpeed: 170,
      backDelay: 100
    });

    // Destropying
    return () => {
      typed.destroy();
    };


  }, [])
  return (
    <div  name="Home" className='main-content flex lg:items-center flex-col lg:flex-row '>

      <div className=' w-full  flex justify-center  mt-20 '>
        <div className='w-2/3 '>
          <h3 className="text-3xl font-semibold">Hi,I am</h3>
          <h1 className=" mt-4 text-5xl font-bold">Tahir Khan</h1>
          <h2 className=" mt-4 text-3xl"> And I,am  <span className='font-bold underline-' ref={el}></span></h2>
          <p>Front-end developer with 1 year of  experience in building user interfaces using HTML, CSS, JavaScript, and ReactJs, Angular. Seeking a challenging role to utilize my skills and contribute to a growing organization.</p>
          <div className='container-icon space-x-3 text-3xl mt-3 cursor-pointer'>
            <div className='space-x-2 '>
              <a href='https://github.com/tahirkhan9' target='_blank'><i class="fa-brands fa-github" aria-hidden="true"></i></a>

              <a href='https://www.linkedin.com/in/tahir-khan-4968952b1/' target="_blank"><i class="fa-brands fa-linkedin"></i> </a>

              <a href='https://pregnancy-tracker-tau.vercel.app/' target="_blank"><i class="fa-solid fa-globe"></i></a>

              <a href='https://pregnancy-tracker-tau.vercel.app/' target="_blank"><i class="fas fa-briefcase"></i></a>

              <a href='https://token2049events.info/' target="_blank"><i class="fa-brands fa-web-awesome"></i></a>



            </div>
            
          </div>
          <br />
          <a className="px-3 py-2 bg-orange-500 shadow-lg rounded-full" href='https://www.linkedin.com/in/tahir-khan-4968952b1/' target='_blank'>Contact Me</a>
        </div>
      </div>
      <div className=' w-full flex justify-center'>
        <img className=" rounded-full shadow-lg w-1/2" src={Ban} />
       


      </div>
    </div>
  )
}

export default Banner
