import React from "react";

const ImageResults = ({ results }) => (
  <div className="flex flex-wrap justify-center items-center">
    {results?.map(({ image, link: { href, title } }, index) => (
      <a className="sm:p-3 p-5" href={href} key={index} target="_blank" rel="noreferrer">
        <img src={image?.src} alt={title} loading="lazy" className="rounded shadow-md max-w-xs max-h-60 object-cover" />
        <p className="w-36 break-words text-sm mt-2">{title}</p>
      </a>
    ))}
  </div>
);

export default ImageResults; 