import React from 'react'

const Services = () => {
    return (
        <>
            <div className="Main-container py-10">
                <h1 className="text-5xl font-bold underline text-center">My Services</h1>
                <div className='services-container flex space-x-6 mt-12 px-10 flex-col md:flex-row '>
                    <div className=' bg-slate-200 text-center p-5 shadow-lg hover:bg-gray-100 rounded-xl space-y-4'>

                        <h1 className="text-4xl font-bold ">Web Development</h1>
                        <p>Web developer in Frontend Technologies.
                            Has good sense of UI and UX design.
                            Loves coding in Javascript and React.
                            Familiar with Angular, NodeJS, AngularJS, AWS.</p>


                    </div>

                    <div className=' bg-slate-200 text-center p-5 shadow-lg  hover:bg-gray-100 rounded-xl space-y-4'>

                        <h1 className="text-4xl font-bold ">Frontend Developer</h1>
                        <p>Love to work with Javascript in Frontend , have good understanding of frontend technology and work</p>

                    </div>

                    <div className=' bg-slate-200 text-center p-5 shadow-lg hover:bg-gray-100 rounded-xl space-y-4'>

                        <h1 className="text-4xl font-bold ">UI UX Design</h1>
                        <p>Design and Developed many pages with responsiveness. evolving more.</p>

                    </div>
                </div>
            </div>

        </>
    )
}

export default Services
