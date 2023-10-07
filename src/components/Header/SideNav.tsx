"use client";
import { LiaTimesSolid } from "react-icons/lia";

type Props = {
  toggleNav: boolean;
  setToggleNav: React.Dispatch<React.SetStateAction<boolean>>;
};
const SideNav = ({ setToggleNav, toggleNav }: Props) => {
  return (
    <div
      className={`fixed h-screen transition-all duration-300 w-[300px] z-[100] bg-white shadow-lg border ${
        toggleNav ? "right-0" : "right-[-300px]"
      }`}
    >
      <ul className="mt-[50px] p-10 grid gap-3">
        <li className="opacity-75">Menu</li>
        <li className="font-medium hover:text-blue-500 cursor-pointer text-lg">
          Category
        </li>
        <li className="font-medium hover:text-blue-500 cursor-pointer text-lg">
          Travels
        </li>
      </ul>
      {toggleNav && (
        <LiaTimesSolid
          size={30}
          className="cursor-pointer fixed right-6 top-6"
          onClick={() => setToggleNav(false)}
        />
      )}
    </div>
  );
};

export default SideNav;
