import React, { useState } from "react";
import LightboxImage from "./LightboxImage";

const images = [
  "/fotos-cursos/4a/recuerdos/1.jpg",
  "/fotos-cursos/4a/recuerdos/2.jpg",
  "/fotos-cursos/4a/recuerdos/3.jpg",
  "/fotos-cursos/4a/recuerdos/4.jpg",
  "/fotos-cursos/4a/recuerdos/5.jpg",
  "/fotos-cursos/4a/recuerdos/6.jpg",
  "/fotos-cursos/4a/recuerdos/7.jpg",
  "/fotos-cursos/4a/recuerdos/8.jpg",
];

const LightboxGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(null);

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const closeModal = () => {
    setCurrentIndex(null);
  };

  return (
    <>
      <div className="flex flex-wrap">
        {images.map((image, index) => (
          <div
            key={index}
            className="columns-2 md:columns-3 lg:columns-4 mt-40"
          >
            <LightboxImage
            className="mb-4"
              src={image}
              alt={`Imagen ${index}`}
              onClick={() => setCurrentIndex(index)}
            />
          </div>
        ))}
      </div>

      {currentIndex !== null && (
        <div className="fixed inset-0 z-50 overflow-auto bg-gray-900 bg-opacity-75 flex items-center justify-center">
          <div className="relative h-9/10">
            <button
              className="absolute bg-gray-800 p-2 rounded-xl top-4 right-4 z-50 text-xl text-white"
              onClick={closeModal}
            >
              X
            </button>
            <div className="w-full h-full overflow-hidden">
              <LightboxImage src={images[currentIndex]} alt="Imagen modal" />
            </div>
            <div className="absolute top-1/2 -mt-4 z-50 left-4">
              {images.length > 1 && (
                <button
                  onClick={prevImage}
                  className="text-white bg-gray-800 p-2 rounded-xl text-2xl hover:text-gray-300 transition ease-in-out duration-300 focus:outline-none"
                >
                  &lsaquo;
                </button>
              )}
            </div>
            <div className="absolute top-1/2 -mt-4 z-50 right-4">
              {images.length > 1 && (
                <button
                  onClick={nextImage}
                  className="text-white bg-gray-800 p-2 rounded-xl text-2xl hover:text-gray-300 transition ease-in-out duration-300 focus:outline-none"
                >
                  &rsaquo;
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LightboxGallery;
