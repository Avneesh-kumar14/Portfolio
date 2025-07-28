import React from 'react'

const Videos = ({ src ,alt,...args}) => {
  return (
    <video src={src} alt={alt} {...args} controls className='m-10  w-[75rem] h-[41.875rem] rounded-3xl'></video>
  )
}

export default Videos
// // const Image = ({ src, alt, ...args }) => {
//     return (
//         <img src={src} alt={alt} {...args} />
