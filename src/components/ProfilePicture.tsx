"use client";

import Image from 'next/image';
import { useState, useEffect } from 'react';

type ProfilePictureProps = {
  src: string;
  alt: string;
};

export function ProfilePicture({ src, alt }: ProfilePictureProps) {
  const [imageUrl, setImageUrl] = useState(src);

  useEffect(() => {
    // Appending a timestamp forces the browser to reload the image, bypassing the cache.
    setImageUrl(`${src}?t=${new Date().getTime()}`);
  }, [src]);

  return (
     <Image
        src={imageUrl}
        alt={alt}
        fill
        priority
        className="rounded-full object-cover object-top shadow-xl transition-transform hover:scale-105 duration-300" 
       />
  );
}
