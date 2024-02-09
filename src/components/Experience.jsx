import React from 'react'
import html from '../../src/assets/html-5.png'
import css from '../../src/assets/css-3.png'
import js from '../../src/assets/js.png'
import science from '../../src/assets/science.png'
import tailwind from '../../src/assets/tailwind.png'
import github from '../../src/assets/github.png'
import database from '../../src/assets/postgresql.png'



function Experience() {
    const languages = [
        {
            id:1,
            src: html,
            name:"HTML",
            style: 'shadow-orange-500'
        },
        {
            id:2,
            src: css,
            name:"CSS",
            style: 'shadow-blue-500'
        },
        {
            id:3,
            src: js,
            name:"JavaScript",
            style: 'shadow-yellow-500'
        },
        {
            id:4,
            src: science,
            name:"React",
            style: 'shadow-blue-600'
        },
        {
            id:5,
            src: tailwind,
            name:"Tailwind CSS",
            style: 'shadow-sky-400'
        },
        {
            id:6,
            src: github,
            name:"GitHub",
            style: 'shadow-white'
        },
        {
            id:7,
            src: database,
            name: "PostgreSQL",
            style: 'shadow-white'
        },
    ]
  return (
    <div name="experience" className='bg-gradient-to-b from-gray-800 to-black w-full h-screen pt-20' >
       <div className=' max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
        <div>
            <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Experience</p>
            <p className='py-6'>These are the technologies i work with!</p>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
            {
                languages.map(({id, src, name, style}) => {
                   return <div key={id} className={'shadow-md hover:scale-105 duration-500 py-2 rounded-lg' + " " + style}>
                    <img src={src} alt="" className='w-20 mx-auto pt-3'/>
                    <p className='mt-4'>{name}</p>
                    </div>
                })
            }
        </div>
       </div>
    </div>
  )
}

export default Experience