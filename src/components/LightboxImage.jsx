import React from "react";

const LightboxImage = ({ src, alt, onClick }) => {
  return (
    <div className="h-full" onClick={onClick}>
      <div className="aspect-w-1 aspect-h-1">
        <img src={src} alt={alt} className="object-cover w-full h-full" />
      </div>
    </div>
  );
};

export default LightboxImage;
