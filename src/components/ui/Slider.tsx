"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs, Zoom } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

export default function Slider({ post }: { post: { image: { url: string }[] } }) {
  return (
    <Swiper
      style={{
        // @ts-ignore
        "--swiper-navigation-color": "#fff",
        "--swiper-pagination-color": "#fff",
      }}
      className="size-full"
      spaceBetween={10}
      navigation={true}
      modules={[FreeMode, Navigation, Thumbs, Zoom]}>
      {post.image.map((img, i) => (
        <SwiperSlide key={i}>
          <Image src={img.url} fill alt="image" className="size-full object-contain rounded-lg" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
