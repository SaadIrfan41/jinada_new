import React from 'react'

const page = () => {
  return (
    <div>
      About page
      <div className='relative bg-red-400'>
        <div className='overflow-hidden rounded-full'>
          <div className='w-full h-full bg-gray-200 rounded-full'></div>
          <div
            className='absolute top-0 left-0 w-full h-full bg-blue-500 rounded-full transform origin-bottom'
            // style={{
            //   clipPath: 'inset(0 calc(100% - var(--percent)) 0 0)',
            // }}
          >
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-xl'>
              <span
                className='block'
                x-text="Math.round($refs.progress.getAttribute('style').match(/\d+/)[0] / 3.6)"
              ></span>
              <span className='block text-xs'>%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
