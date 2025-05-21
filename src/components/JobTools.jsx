"use client";
import { useState } from "react";
import { Bookmark, CheckSquare, FileText, File, Plus } from "lucide-react";
import { poppinsMedium, poppinsRegular } from "../app/fonts";

export default function JobTools() {
  const [tools] = useState([
    { name: "Saved Jobs", icon: <Bookmark className="w-6 h-6" /> },
    { name: "Applied Jobs", icon: <CheckSquare className="w-6 h-6" /> },
    { name: "Interview Tips", icon: <FileText className="w-6 h-6" /> },
    { name: "Resume Tips", icon: <File className="w-6 h-6" /> },
  ]);

  return (
    <div className={`flex flex-col items-center ${poppinsMedium.className}`}>
      <div
        className="bg-white rounded-[32px] w-[223px] px-6 pt-6 pb-4 flex flex-col"
        style={{ boxShadow: "0 0 20px rgba(102, 186, 255, 0.4)" }}
      >
        {/* Title */}
        <h2 className="text-[16px] text-[#222] mb-4 text-left">My Job Tools</h2>

        {/* Tool List */}
        <div className="w-[171px] h-[124px] flex flex-col gap-3 mb-4">
          {tools.map((tool, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-gray-400">{tool.icon}</span>
                <span className="text-[12px] text-gray-400">{tool.name}</span>
              </div>
              <button className="text-gray-400 hover:text-blue-500 p-1">
                <Plus className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-[#E5E5E5] mb-[20px] mt-[18px]" />

        {/* Add More Button */}
        <button
          className={`h-[26px] self-center rounded-full px-3 py-1 text-[12px] whitespace-nowrap hover:bg-blue-50 transition-all ${poppinsRegular.className}`}
          style={{
            border: "1px solid #39A6FF",
            color: "#39A6FF",
          }}
        >
          Add More
        </button>
      </div>
    </div>
  );
}
