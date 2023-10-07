import React from "react";
import Image from "next/image";

const CategoryCard = () => {
  return (
    <div className="flex gap-5 items-center mx-auto max-w-[1000px] mb-10">
      <div className="w-2/5">
        <img
          src="./images/blog-1.jpg"
          alt="blog"
          className="w-full h-[120px] object-cover rounded-lg"
        />
      </div>
      <div>
        <div className="flex gap-3 text-sm">
          <div className="font-semibold">Business, Travel -</div>
          <div className="font-bold text-gray-500">july, 2023</div>
        </div>
        <h2 className="text-[16px] mt-3 font-black">
          Your most unhappy customers are your greatest source of learning.
        </h2>
        <div className="mt-3 flex items-center gap-3 l">
          <Image
            src="/images/hannah.png"
            alt="hannah"
            width={40}
            height={40}
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

export default CategoryCard;
