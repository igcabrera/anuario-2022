import React, { useState } from 'react';

const LightBox = ({ children, src, alt, Wrapper = 'div', zIndex = 100 }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Wrapper onClick={toggleIsOpen} className="relative">
      {children}
      {isOpen ? (
        <div
          onClick={toggleIsOpen}
          className="fixed top-0 left-0 h-full w-full bg-black bg-opacity-70 cursor-pointer z-[zIndex]"
          style={{ zIndex }}
        >
          <div
            className="absolute top-5 right-5 bg-black text-white text-xl font-bold py-2 px-4 cursor-pointer z-[zIndex]"
            onClick={toggleIsOpen}
          >
            X
          </div>
          <img
            src={src}
            alt={alt}
            className="cursor-pointer max-w-[80%] max-h-screen mx-auto my-10"
            style={{ width: '80%' }}
          />
        </div>
      ) : null}
    </Wrapper>
  );
};

export default LightBox;
