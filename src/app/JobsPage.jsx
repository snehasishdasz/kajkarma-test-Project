import FilterSidebar from "@/components/FilterSidebar";
import JobCard from "@/components/JobCard";
import JobTools from "@/components/JobTools";
import Navbar from "@/components/Navbar";


export default function JobsPage() {
  const jobs = [
    {
      title: "Web Designer",
      company: "Digitally Pvt. Ltd.",
      experience: "1-5 Yrs",
      salary: "1–2.5 Lacs PA",
      location: "West Bengal (Kolkata)",
      description:
        "Create banners, social media creatives, and branding elements...",
      posted: "Now",
      openings: 10,
      applicants: 14,
    },
    {
      title: "Frontend Developer",
      company: "TechNova Solutions",
      experience: "2-4 Yrs",
      salary: "4–6 Lacs PA",
      location: "Bangalore",
      description: "Develop responsive web apps using React and Next.js...",
      posted: "1 day ago",
      openings: 5,
      applicants: 22,
    },
    {
      title: "UI/UX Designer",
      company: "Creative Minds Inc.",
      experience: "0-2 Yrs",
      salary: "2–3 Lacs PA",
      location: "Remote",
      description:
        "Design intuitive UI layouts and collaborate with frontend team...",
      posted: "3 days ago",
      openings: 2,
      applicants: 9,
    },
  ];


  return (
    <div
      className="min-h-screen  p-4 pt-0"
      style={{
        background:
          "linear-gradient(90deg, #F5FBFF 0%, #C5E5FF 55%, #d2ebfe 70%)",
      }}
    >
      <Navbar />
      <div className="flex mx-[136px] gap-[34px]">
        <FilterSidebar />
        <div className="flex flex-col gap-6 w-full max-w-4xl  justify-center items-center" >
          {jobs.map((job, index) => (
            <JobCard key={index} {...job} />
          ))}
        </div>
        <JobTools />
      </div>
    </div>
  );
}
