import {
  FiSearch,
  FiFilter,
  FiMessageCircle,
  FiBell,
  FiSettings,
} from "react-icons/fi";

export default function Navbar() {
  return (
    <div
      className="w-full px-6 pb-3 flex items-center justify-between backdrop-blur-sm"
      style={{
        background:
          "linear-gradient(90deg, #F5FBFF 0%, #C5E5FF 55%, #d2ebfe 100%)",
        boxShadow: "0px 4px 24px 0px #0000000A",
      }}
    >
      <div className="mt-[9px] h-[56px] flex items-center gap-[45px]">
        {/* Nav Items */}
        <div
          className="w-[594px] h-[56px] flex items-center justify-between px-4 py-2 bg-white rounded-full shadow text-[16px]"
          style={{ marginLeft: "109px" }}
        >
          {["Home", "Community", "Jobs", "Mentors", "Courses", "Events"].map(
            (item) => (
              <button
                key={item}
                className={`text-sm font-medium px-4 py-2 rounded-full transition-all duration-200 ${
                  item === "Jobs"
                    ? "bg-[#66BAFF] text-white"
                    : "text-gray-700 hover:text-blue-500"
                }`}
              >
                {item}
              </button>
            )
          )}
        </div>

        {/* Search & Icons */}
        <div className="flex items-center gap-4">
          {/* Search Box */}
          <div className="flex items-center bg-white rounded-full px-3 h-[36px] w-[320px] shadow">
            <FiSearch className="text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent outline-none w-full text-sm h-full"
            />
            <FiFilter className="text-gray-400 ml-2" />
          </div>

          {/* Action Icons */}
          <div className="ml-[60px]">

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
