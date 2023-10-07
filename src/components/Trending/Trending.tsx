"use client";

import React from "react";
import Slider from "react-slick";

import TrendingCard from "./TrendingCard";

const Trending = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="overflow-hidden pb-20">
      <Slider {...settings}>
        <TrendingCard />
        <TrendingCard />
        <TrendingCard />
      </Slider>
    </div>
  );
};

export default Trending;
