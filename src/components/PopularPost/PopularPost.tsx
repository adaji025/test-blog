"use client";
import React from "react";
import Slider from "react-slick";
import BlogCard from "../BlogList/BlogCard";
import PopularPostCard from "./PopularPostCard";

const PopularPost = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1.5,
    slidesToScroll: 1.
  };
  return (
    <div className="overflow-hidden mt-16">
      <Slider {...settings}>
        {[...Array(6)].map((_, index) => (
          <div className="p-5">
            <PopularPostCard key={index} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PopularPost;
