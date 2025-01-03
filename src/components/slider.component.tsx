"use client";

import React from "react";
import { Fade } from "react-slideshow-image";
import Image from "next/image";

export default function Slider({ images }: { images: string[] }) {
  const ImageComponent = ({ src }: { src: string }) => (
    <Image
      alt="Rocket Falcon"
      src={src}
      style={{
        width: "100%",
        height: "auto",
        borderRadius: 10,
        aspectRatio: "16 / 9",
      }}
      width={500}
      height={200}
    />
  );

  return (
    <>
      {images.length > 0 && (
        <Fade>
          <ImageComponent src={images[0]} />
          <ImageComponent src={images[1]} />
          <ImageComponent src={images[2]} />
        </Fade>
      )}
    </>
  );
}
