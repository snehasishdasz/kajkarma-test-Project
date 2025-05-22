"use client";

import {
  FiSearch,
  FiFilter,
  FiMessageCircle,
  FiBell,
  FiSettings,
} from "react-icons/fi";
import { poppinsMedium } from "../app/fonts";

export default function Navbar() {
  return (
    <div
      className={`w-full px-6 pb-4 flex items-center justify-between backdrop-blur-sm bg-transparent ${poppinsMedium.className}`}
    >
      <div className="mt-[9px] h-[56px] flex items-center">
        {/* Nav Items */}
        <div className="p-4 bg-white rounded-2xl mb-8"
        style={{ marginLeft: "109px",
          clipPath: "polygon(-5% 0%, 100% 1%, 98% 100%, 3% 100%)",
          borderRadius: "0px 0px 59px 59px",
         }}>
         
        <div
          className="w-[594px] h-[56px] flex items-center justify-between px-4 pt-2 bg-white rounded-full shadow text-[16px] mt-[9px]"
          
        >
          {["Home", "Community", "Jobs", "Mentors", "Courses", "Events"].map(
            (item) => (
              <button
                key={item}
                className={`text-sm font-medium px-4 py-2 rounded-full transition-all duration-200 ${
                  item === "Jobs"
                    ? "bg-[#66BAFF] text-white"
                    : "text-gray-500 hover:text-blue-500"
                }`}
              >
                {item}
              </button>
            )
          )}
        </div>

        </div>

        {/* Search & Icons */}
        <div className="flex items-center gap-4">
          {/* Search Box */}
          <div className="flex items-center bg-white rounded-full px-3 h-[36px] w-[320px] shadow ml-8">
            <FiSearch className="text-gray-400 " />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent outline-none w-full text-sm h-full"
            />
            <FiFilter className="text-gray-400 ml-2" />
          </div>

          {/* Action Icons */}
          <div className=" flex flex-row">
            {[FiMessageCircle, FiBell, FiSettings].map((Icon, idx) => (
              <button
                key={idx}
                className="bg-white p-2 rounded-full shadow hover:bg-blue-50 transition ml-[12px]"
              >
                <Icon className="text-gray-500 w-5 h-5" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}