import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { CustomButton } from "./";
import { logo, menu, search, thirdweb } from "../assets";
import { navlinks } from "../constants";

const Navbar = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState("dashboard");
  const [toggleDrawer, setToggleDrawer] = useState(false);
  // const { connect, address } = useStateContext();

  const address = "0xabc";

  return (
    <div className="flex flex-col-reverse mb-[35px] gap-6 mt-5"> {/* removed md:flex-reverse to align the help and profile button to the right*/}
      {/* div for logo  */}
      {/* search bar */}
      {/* <div className="lg:flex-1 flex flex-row max-w-[458px] py-2 pl-4 pr-2  h-[52px] bg-[#1c1c24] rounded-[100px]">
        <input type="text" placeholder="Search for domains" className="flex  w-full font-epilogue font-normal text-[14px] placeholder:text-[#4b5264] text-white bg-transparent outline-none" />

        <div className="w-[72px] h-full rounded-[20px] bg-[#4acd8d] flex justify-center items-center cursor-pointer">
          <img src={search} alt="search" className="w-[15px] h-[15px] object-contain" />

        </div>
      </div> */}

      {/* search bar trial*/}
      {/* <div> */}
      {/* <input type="text" placeholder="Search for domains" className="flex  w-full font-epilogue font-normal text-[14px] placeholder:text-[#4b5264] text-white bg-transparent outline-none" />

        <div className="w-[72px] h-full rounded-[20px] bg-[#4acd8d] flex justify-center items-center cursor-pointer">
          <img src={search} alt="search" className="w-[15px] h-[15px] object-contain" />

        </div> */}
      {/* </div> */}

      {/* tried to do something but ended up doing nothing */}
      {/* Well the search bar isn't needed here as it is in the center*/}
      {/* <div className=" lg:flex-1 bg-[#1c1c24] rounded-[100px] pb-5">
        <div>
          <input
            type="text"
            placeholder="Search for domains"
            className="flex  w-full font-epilogue font-normal text-[14px] placeholder:text-[#4b5264] text-white bg-transparent outline-none"
          />
        </div>
      </div> */}

      {/* CREATE PROFILE BUTTON FOR small devices*/}
      <div className="sm:flex hidden flex-row justify-end gap-[10px] ">
        <CustomButton
          btnType="button"
          title={address ? "Create a profile" : "Connect"}
          styles={address ? "bg-[#1dc071]" : "bg-[#8c6dfd]"}
          handleClick={() => {
            if (address) navigate("create-campaign");
            else "connect()";
          }}
        />

        <CustomButton
          btnType="button"
          title={address ? "Help" : "Connect"}
          styles={address ? "bg-[#1dc071]" : "bg-[#8c6dfd]"}
          handleClick={() => {
            if (address) navigate("create-campaign");
            else "connect()";
          }}
        />

        <Link to="/profile">
          <div className="w-[52px] h-[52px] rounded-full bg-[#2c2f32] flex justify-center items-center cursor-pointer">
            <img
              src={thirdweb}
              alt="user"
              className="w-[60%] h-[60%] object-contain"
            />
          </div>
        </Link>
      </div>

      {/* added help button for small devices*/}
      <div className="sm:hidden flex justify-between items-center relative">
        <div className="w-[40px] h-[40px] rounded-[10px] bg-[#2c2f32] flex justify-center items-center cursor-pointer">
          <img
            src={logo}
            alt="user"
            className="w-[60%] h-[60%] object-contain"
          />
        </div>

        <img
          src={menu}
          alt="menu"
          className="w-[34px] h-[34px] object-contain cursor-pointer"
          onClick={() => setToggleDrawer((prev) => !prev)}
        />

        <div
          className={`absolute top-[60px] right-0 left-0 bg-[#1c1c24] z-10 shadow-secondary py-4 ${
            !toggleDrawer ? "-translate-y-[100vh]" : "translate-y-0"
          } transition-all duration-700`}
        >
          <ul className="mb-4">
            {navlinks.map((link) => (
              <li
                key={link.name}
                className={`flex p-4 ${
                  isActive === link.name && "bg-[#3a3a43]"
                }`}
                onClick={() => {
                  setIsActive(link.name);
                  setToggleDrawer(false);
                  navigate(link.link);
                }}
              >
                <img
                  src={link.imgUrl}
                  alt={link.name}
                  className={`w-[24px] h-[24px] object-contain ${
                    isActive === link.name ? "grayscale-0" : "grayscale"
                  }`}
                />
                <p
                  className={`ml-[20px] font-epilogue font-semibold text-[14px] ${
                    isActive === link.name ? "text-[#1dc071]" : "text-[#808191]"
                  }`}
                >
                  {link.name}
                </p>
              </li>
            ))}
          </ul>

          {/* create profile for small devices */}
          {/* This should'nt actually be in the navbar but on the homepage where there would be a create profile button on the homepage itself*/}
          <div className="flex mx-4">
            <CustomButton
              btnType="button"
              title={address ? "Create a profile" : "Connect"}
              styles={address ? "bg-[#1dc071]" : "bg-[#8c6dfd]"}
              handleClick={() => {
                if (address) navigate("create-campaign");
                else connect();
              }}
            />

            {/* added help button for large devices */}
            <CustomButton
              btnType="button"
              title={address ? "H" : "Connect"}
              styles={address ? "bg-[#1dc071]" : "bg-[#8c6dfd]"}
              handleClick={() => {
                if (address) navigate("create-campaign");
                else connect();
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
