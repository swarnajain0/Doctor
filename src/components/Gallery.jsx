// src/components/Gallery.jsx
import React from "react";

import img1 from "../assets/galleryyy/images/img1.PNG";
import img2 from "../assets/galleryyy/images/img2.JPG";
import img3 from "../assets/galleryyy/images/img3.JPG";
import img4 from "../assets/galleryyy/images/img4.PNG";
import img5 from "../assets/galleryyy/images/img5.JPG";
import img6 from "../assets/galleryyy/images/img6.PNG";
import img7 from "../assets/galleryyy/images/img7.JPG";
import img8 from "../assets/galleryyy/images/img8.JPG";
import img9 from "../assets/galleryyy/images/img9.JPG";
import img10 from "../assets/galleryyy/images/img10.jpg";
import img11 from "../assets/galleryyy/images/img11.jpg";
import img12 from "../assets/galleryyy/images/img12.JPG";
import img13 from "../assets/galleryyy/images/img13.JPG";
import img14 from "../assets/galleryyy/images/img14.PNG";
import img15 from "../assets/galleryyy/images/img15.jpg";
import img16 from "../assets/galleryyy/images/img16.png";
import img17 from "../assets/galleryyy/images/img17.jpg";
import img18 from "../assets/galleryyy/images/img18.png";
import img19 from "../assets/galleryyy/images/img19.JPEG";
// import img20 from "../assets/galleryyy/images/img20.JPG";
// import img21 from "../assets/galleryyy/images/img21.JPG";
// import img22 from "../assets/galleryyy/images/img22.png";



import vid1 from "../assets/galleryyy/videos/vid1.MP4";
import vid2 from "../assets/galleryyy/videos/vid2.MP4";
import logo from "../assets/logo-spine-plus.png";

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19];

const videos = [vid1, vid2];

export default function Gallery({ onNavigateHome }) {

 const handleBack = () => {
  onNavigateHome();
};



  // Combine images and videos in blocks of 6 images + 2 videos
  const blocks = [];
  let imageIndex = 0;
  let videoIndex = 0;

  while (imageIndex < images.length || videoIndex < videos.length) {
    const imageBlock = images.slice(imageIndex, imageIndex + 6);
    const videoBlock = videos.slice(videoIndex, videoIndex + 2);
    blocks.push({ images: imageBlock, videos: videoBlock });
    imageIndex += 6;
    videoIndex += 2;
  }

  return (
    <section className="bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 bg-white shadow-md sticky top-0 z-50">
        <div className="flex items-center space-x-3">
          <img src={logo} alt="Spine Plus Logo" className="h-12 w-auto" />
          <span className="text-2xl font-bold text-blue-700">Spine Plus</span>
        </div>
        <button
  onClick={handleBack}
  className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition"
>
  ← Go Back
</button>


      </div>

      <div className="px-6 py-12">
        <h2 className="text-3xl font-bold text-center mb-10">Gallery</h2>

        {blocks.map((block, idx) => (
          <div key={idx} className="mb-12">
            {/* Image Block */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
              {block.images.map((img, index) => (
                <img
                  key={`img-${idx}-${index}`}
                  src={img}
                  alt={`Gallery image ${imageIndex + index}`}
                  className="rounded-lg shadow-md w-full h-[400px] object-cover object-top
"
                />
              ))}
            </div>

            {/* Video Block */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {block.videos.map((video, index) => (
                <video
                  key={`vid-${idx}-${index}`}
                  controls
                  className="w-full h-[500px] rounded-lg shadow-md object-cover"
                >
                  <source src={video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
