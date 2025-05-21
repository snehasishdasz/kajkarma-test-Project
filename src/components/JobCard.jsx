import { Briefcase, IndianRupee, MapPin, FileText } from "lucide-react";

export default function JobCard() {
  return (
    <div
      className="bg-white rounded-2xl p-5 w-full max-w-2xl"
      style={{ boxShadow: "0 0 20px rgba(102, 186, 255, 0.4)" }}
    >
      {/* Title and Company */}
      <div>
        <h3 className="text-lg font-semibold">Web Designer</h3>
        <p className="text-gray-500 text-sm">Digitally Pvt. Ltd.</p>
      </div>

      {/* Meta Info */}
      <div className="flex flex-wrap gap-4 mt-4 text-sm text-gray-600">
        <div className="flex items-center gap-1">
          <Briefcase className="w-4 h-4" />
          <span>1-5 Yrs</span>
        </div>
        <div className="flex items-center gap-1">
          <IndianRupee className="w-4 h-4" />
          <span>1–2.5 Lacs PA</span>
        </div>
        <div className="flex items-center gap-1">
          <MapPin className="w-4 h-4" />
          <span>West Bengal (Kolkata)...</span>
        </div>
      </div>

      {/* Description */}
      <div className="flex items-start gap-2 mt-3 text-gray-700 text-sm">
        <FileText className="w-4 h-4 mt-0.5" />
        <p>Create banners, social media creatives, and branding elements...</p>
      </div>

      {/* Footer Info */}
      <div className="flex justify-between items-center mt-4 pt-3 border-t [border-top-color:#0000001A] text-sm text-gray-500">
        <div className="flex gap-4">
          <span>
            Posted:{" "}
            <strong className="[color:#00000099] font-medium">Now</strong>
          </span>
          <span>
            Openings:{" "}
            <strong className="[color:#00000099] font-medium">10</strong>
          </span>
          <span>
            Applicants:{" "}
            <strong className="[color:#00000099] font-medium">14</strong>
          </span>
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          <button
            className="px-3 py-1 rounded-full text-sm hover:bg-blue-50 transition font-semibold text-[14px]"
            style={{
              border: "2px solid #66BAFF",
              color: "#66BAFF",
            }}
          >
            Save
          </button>
          <button
            className="px-4 py-1 rounded-full text-sm hover:brightness-90 transition"
            style={{
              backgroundColor: "#66BAFF",
              color: "#fff",
            }}
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
}
