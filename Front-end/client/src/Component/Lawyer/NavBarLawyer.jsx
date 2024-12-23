import React, { useEffect, useState } from "react";
import { FaThList } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import User1 from "../../assets/user1.png";

const Navbar = () => {
  const navigate = useNavigate();
  const [sticky, setSticky] = useState(false);
  const [open, setOpen] = useState(false);
  const menuLinks = [
    { name: "Mes clients", link: "#mes-clients"},
     { name: "Log out", link: "/" }, // Added "Mes clients" link
  ];

  useEffect(() => {
    window.addEventListener("scroll", () => {
      document.querySelector("nav");
      window.scrollY > 0 ? setSticky(true) : setSticky(false);
    });
  }, []);

  return (
    <nav
      className={`fixed w-full bg-white left-0 top-0 z-[999] ${
        sticky ? "bg-white/60  text-gray-900" : "text-white"
      }`}
    >
      <div className="flex items-center ">
        <div className="mx-7">
          <h4 className="sm:text-3xl text-[#013656] text-3xl uppercase font-bold">
            DZ-<span className="text-[#EAB84C]">MOHAMI</span>
          </h4>
        </div>
        <div
          className={` ${
            sticky ? " md:bg-white/0 bg-white" : "bg-white"
          } text-gray-900 md:block hidden px-7 py-2 font-medium`}
        >
         <ul className="flex items-center justify-end gap-1 py-1 text-lg ">
            {menuLinks?.map((menu, i) => (
              <li key={i} className=" px-4 text-[#013656] hover:text-[#EAB84C] duration-150">
                <a href={menu?.link}>{menu?.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:hidden text-gray-900 m-5">
          <FaThList size={24} onClick={() => setOpen(!open)} />
        </div>
        <div
          className={`md:hidden text-gray-900 absolute w-[60%] h-screen px-7 py-2 font-medium bg-white top-0 duration-300 ${
            open ? "right-0" : "right-[-100%]"
          }`}
        >
          <ul className="flex flex-col justify-center h-full gap-8 py-2 sm:text-lg text-[15px]">
            {menuLinks?.map((menu, i) => (
              <li
                onClick={() => setOpen(false)}
                key={i}
                className="px-4 text-center hover:text-cyan-600"
              >
                <a href={menu?.link}>{menu?.name}</a>
              </li>
            ))}
          </ul>
        </div>
        
      </div>
    </nav>
  );
};

export default Navbar;