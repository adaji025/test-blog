import React from "react";

const Subscription = () => {
  return (
    <div className="bg-green-50 py-5 lg:p-20 w-full mt-32">
      <div className="max-w-[1300px] mx-auto px-10">
        <h4 className="font-bold text-2xl text-center sm:text-start">Subscribe to newsletter</h4>
        <div className="flex flex-col justify-center items-center sm:flex-row gap-4 mt-3">
          <input type="text" className="w-full sm:w-4/5 border p-3 rounded-full" />
          <button className="flex-1 w-1/2 sm:w-1/5 p-3 bg-orange-600 rounded-full text-white font-bold">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
