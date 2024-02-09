import React from 'react'
import img1 from '../../src/assets/img1.jpg'
import img2 from '../../src/assets/img2.jpg'
import img3 from '../../src/assets/img3.jpg'
import img4 from '../../src/assets/img4.jpg'
import img5 from '../../src/assets/img5.jpg'
import img6 from '../../src/assets/img6.jpg'


function Porfolio() {

    const photos = [
        {
            id: 1,
            src: img1,
        },
        {
            id: 2,
            src: img2,
        },
        {
            id: 3,
            src: img3,
        },
        {
            id: 4,
            src: img4,
        },
        {
            id: 5,
            src: img5,
        },
        {
            id: 6,
            src: img6,
        },
    ]

  return (
    <div name="portfolio" className=' bg-gradient-to-b from-black to-gray-800 w-ful text-white md:h-screen pt-20'>
        <div className=' max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-ful h-full'>
            <div className='pb-4'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                <p className='py-6'>Check Out My Work!</p>
            </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                {photos.map(({id, src}) =>{
                return <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                    <img src={src} alt="project-image" className='rounded-md duration-200 hover:scale-105'/>
                    <div className='flex items-center justify-center'>
                    <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Photograph</button>
                    <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>View</button>
                    </div>
                </div>
                })}
            </div>

        </div>
    </div>
  )
}

export default Porfolio