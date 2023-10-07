"use client";

import React from "react";
import Image from "next/image";

const TrendingCard = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-10 items-center mx-auto min-h-[300px] max-w-[1000px]">
      <Image
        width={500}
        height={300}
        src="/images/blog-1.jpg"
        alt="blog"
        className="w-full lg:max-w-[500px] max-h-[300px] object-cover rounded-lg"
      />
      <div>
        <div className="flex gap-3 text-sm">
          <div className="font-semibold">Business, Travel -</div>
          <div className="font-bold text-gray-500">july, 2023</div>
        </div>
        <h2 className="text-[28px] mt-3 font-black">
          Your most unhappy customers are your greatest source of learning.
        </h2>
        <div className="mt-2 font-medium text-gray-400 text-sm md:text-base">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts. Separated they
          live in Bookmarksgrove right at the coast of the Semantics, a large
          language ocean
        </div>
        <div className="mt-3 flex items-center gap-3 l">
          <Image
            src="/images/hannah.png"
            alt="hannah"
            width={60}
            height={60}
            className="rounded-full"
          />
          <div>
            <h2 className="font-semibold">Adaji Mukhtar</h2>
            <div className="text-sm">CEO and Founder</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingCard;
