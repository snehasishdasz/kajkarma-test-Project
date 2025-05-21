"use client";

import { useState } from "react";
import { FiSearch, FiFilter } from "react-icons/fi";

const keywords = ["Web Design", "Graphic Design"];
const locations = ["Kolkata", "Mumbai", "Pune"];
const experiences = ["1-2 Yrs", "1-4 Yrs", "1-6 Yrs"];

export default function FilterSidebar() {
  const [selectedKeyword, setSelectedKeyword] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState([]);
  const [selectedExperience, setSelectedExperience] = useState(null);
  const [jobType, setJobType] = useState(null);

  const resetAll = () => {
    setSelectedKeyword([]);
    setSelectedLocation([]);
    setSelectedExperience(null);
    setJobType(null);
  };

  return (
    <div
      className="w-[224px] h-[362px] p-4 rounded-2xl bg-white flex flex-col justify-between border border-gray-100"
      style={{ boxShadow: "0 0 20px rgba(102, 186, 255, 0.4)" }}
    >
      <div className="space-y-3 overflow-hidden">
        <div className="flex justify-between items-center">
          <h2 className="text-base font-semibold text-gray-800">Filter Jobs</h2>
          <FiFilter className="text-gray-500" />
        </div>

        {/* Search By Keywords */}
        <div className="w-[182px] mb-[15px]">
          <p className="text-[12px] font-medium text-gray-700 mb-1">
            Search By Keywords
          </p>
          <div className="flex flex-row gap-1 text-[1px]">
            {keywords.map((keyword) => (
              <button
                key={keyword}
                onClick={() =>
                  setSelectedKeyword((prev) =>
                    prev.includes(keyword)
                      ? prev.filter((k) => k !== keyword)
                      : [...prev, keyword]
                  )
                }
                className={`flex items-center justify-start gap-1 w-fit h-[20px] px-2 text-[8px] bg rounded-[30px] ${
                  selectedKeyword.includes(keyword)
                    ? "bg-[#E6F4FF] text-[#39A6FF] border border-[#39A6FF]"
                    : "text-[#39A6FF] border border-[#B3E0FF]"
                }`}
              >
                <FiSearch className="w-3 h-3" />
                {keyword}
              </button>
            ))}
          </div>
        </div>

        {/* Location */}
        <div className="w-[182px] mb-[15px]">
          <p className="text-[12px] font-medium text-gray-700 mb-1">Location</p>
          <div className="flex flex-row gap-1 text-[1px] flex-wrap">
            {locations.map((loc) => (
              <button
                key={loc}
                onClick={() =>
                  setSelectedLocation((prev) =>
                    prev.includes(loc)
                      ? prev.filter((l) => l !== loc)
                      : [...prev, loc]
                  )
                }
                className={`flex items-center justify-center gap-1 w-fit h-[20px] px-2 text-[8px] rounded-[30px] ${
                  selectedLocation.includes(loc)
                    ? "bg-[#E6F4FF] text-[#39A6FF] border border-[#39A6FF]"
                    : "text-[#39A6FF] border border-[#B3E0FF]"
                }`}
              >
                {loc}
                <span className="text-[10px] leading-none">+</span>
              </button>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div className="w-[182px] mb-[15px]">
          <p className="text-[12px] font-medium text-gray-700 mb-1">
            Experience
          </p>
          <div className="flex flex-row gap-1 text-[1px] flex-wrap">
            {experiences.map((exp) => (
              <button
                key={exp}
                onClick={() =>
                  setSelectedExperience((prev) => (prev === exp ? null : exp))
                }
                className={`flex items-center justify-start gap-1 w-fit h-[20px] px-2 text-[8px] rounded-[30px] ${
                  selectedExperience === exp
                    ? "bg-[#E6F4FF] text-[#39A6FF] border border-[#39A6FF]"
                    : "text-[#39A6FF] border border-[#B3E0FF]"
                }`}
              >
                {exp}
              </button>
            ))}
            <button className="flex items-center justify-start gap-1 w-fit h-[20px] px-2 text-[10px] text-[#39A6FF] border border-[#B3E0FF] rounded-[30px]">
              More
            </button>
          </div>
        </div>

        {/* Job Type */}
        <div className="mb-[18px]">
          <p className="text-[12px] font-medium text-gray-700 mb-1">Job Type</p>
          <div className="flex flex-row gap-2 text-[10px] text-[#39A6FF] items-center">
            {["Full-time", "Internship", "Remote"].map((type) => (
              <label
                key={type}
                className="flex items-center gap-1 cursor-pointer"
              >
                <span className="whitespace-nowrap">{type}</span>
                <input
                  type="radio"
                  name="jobType"
                  value={type}
                  checked={jobType === type}
                  onChange={() => setJobType(type)}
                  className="accent-[#39A6FF]"
                />
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Divider Line */}
      <hr className="  border-t border-gray-300" />

      {/* Reset Button */}
      <div className="flex justify-center">
        <button
          onClick={resetAll}
          className="w-[71px] h-[26px] border-1 border-[#39A6FF] text-[#39A6FF] rounded-full text-[12px]  hover:bg-[#E6F4FF] transition mt-[17px]"
        >
          Reset All
        </button>
      </div>
    </div>
  );
}
