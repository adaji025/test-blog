import React from "react";
import {
  AiFillFacebook,
  AiFillLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="max-w-[1300px] mx-auto px-10 py-20">
      <div className="flex justify-center gap-3">
        <div className="flex items-center gap-3">
          <AiOutlineTwitter size={30} />
          <AiFillFacebook size={30} />
          <AiFillLinkedin size={30} />
        </div>
      </div>
      <div className="mt-5 text-center">
        Copyright ©2023 All rights reserved
      </div>
      <div className="flex justify-center mt-3">
        <div>Terms & Conditions </div>/<div>Privacy Policy</div>
      </div>
    </footer>
  );
};

export default Footer;
