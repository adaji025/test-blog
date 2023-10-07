"use client";
import React from "react";
import { CiSearch } from "react-icons/ci";
import { HiOutlineBars3CenterLeft } from "react-icons/hi2";
import { AiOutlineTwitter, AiFillFacebook } from "react-icons/ai";
import SideNav from "./SideNav";

const Navbar = () => {
  const [toggleNav, setToggleNav] = React.useState(false);
  return (
    <>
      <SideNav {...{ setToggleNav, toggleNav }} />
      <nav className="max-w-[1300px] mx-auto px-10 py-5 flex gap-5 flex-col md:flex-row items-center justify-between min-h-[100px] border-b">
        <div className="border flex gap-2 p-2 rounded-full w-full md:w-1/3 max-w-[400px] md:max-w-[300px] order-3 md:order-1">
          <CiSearch size={24} color="gray" />
          <input type="text" className="outline-none" placeholder="Search..." />
        </div>

        <div className="text-2xl font-medium w-full md:w-1/3 text-center ml-auto order-1 md:order-2">
          Alterative Blog
        </div>

        <div className="flex items-center justify-between md:justify-end gap-10 w-full md:w-1/3 order-2 md:order-3">
          <div className="flex items-center gap-3">
            <AiOutlineTwitter size={20} />
            <AiFillFacebook size={20} />
            <AiOutlineTwitter size={20} />
          </div>
          <div>
            <HiOutlineBars3CenterLeft
              size={30}
              color="gray"
              className="cursor-pointer"
              onClick={() => setToggleNav(true)}
            />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
