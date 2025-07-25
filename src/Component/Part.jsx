import React from 'react'

const body = () => {
  return (
    <div>
      <div className='bg-primary text-textcolor flex m-10' >
        <div className='font-(family-name:graphik) font-bold text-6xl m-10 '>
            <h3>Why Ever Is The</h3>
            <h3>Best Choice?</h3>
          </div>
          <div className='text-textcolor text-2xl font-(family-name:nunito) py-5 m-10 opacity-70 px-10 relative'>
            <p >Watch this one minute video so you understand why you should </p>
            <p >use our services!</p>
          </div>

      </div>
      <div className='flex justify-center'><video  src="/assests/video.mp4" controls className='m-10 w-160 h-90 '></video></div>
    </div>
  )
}

export default body
