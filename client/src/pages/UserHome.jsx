import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { CustomButton, About, Sidebar } from "../components";
import { logo, menu, search, thirdweb } from "../assets";
import { navlinks } from "../constants";

const UserHome = () => {
    return (
        <div>
        <div className="lg:flex-1 flex flex-row xl:max-w-[1000px] max-w-[650px] mx-auto mt-[50px] py-2 pl-4 pr-2 h-[52px] bg-[#1c1c24] rounded-[100px]">
                    <input
                        type="text"
                        placeholder="Search for domains"
                        className="flex  w-full font-epilogue font-normal text-[14px] placeholder:text-[#4b5264] text-[#ffffff] bg-transparent outline-none"
                    />
                    <div className="w-[72px] h-full rounded-[20px] bg-[#4acd8d] flex justify-center items-center cursor-pointer">
                        <img
                            src={search}
                            alt="search"
                            className="w-[15px] h-[15px] object-contain"
                        />
                    </div>
                </div>
            <div className="relative sm:-8 p-1 bg-[#13131a] min-h-screen flex flex-row">
                <div className="sm:flex hidden mr-10 relative">
                    <Sidebar />
                </div>
                
            </div>



        </div>
    );
};

export default UserHome;