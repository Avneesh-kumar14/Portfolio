import React, { useState } from 'react';
import Image from './Common/Image';
import Videos from './Common/Videos';

const ImageToVideo = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="flex justify-center items-center min-h-screen bg-primary ">
      {!showVideo ? (
        <div className="relative w-[75rem] h-[41.875rem]">

          <Image src="/assests/image.png" alt="Thumbnail" className=" rounded-lg shadow-lg w-[90rem] h-[41.875rem]" />

          <button
            onClick={() => setShowVideo(true)}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-buttoncolor  px-6 py-2 rounded-full shadow-md "
          >
            Play Video
          </button>
        </div>
      ) : (


          <Videos src="/assests/video.mp4" alt="Video"   controls
          autoPlay className="w-full rounded-lg shadow-lg"/>

      )}
    </div>
  );
};

export default ImageToVideo;
