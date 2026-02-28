import Link from "next/link";
import type { ReactElement } from "react";

// Company SVG logos
const CompanyIcons: Record<string, ReactElement> = {
  Nomad: (
    <svg
      width="64"
      height="64"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <polygon
        points="20,4 35,12 35,28 20,36 5,28 5,12"
        fill="#56CDAD"
        opacity="0.15"
      />
      <polygon
        points="20,4 35,12 35,28 20,36 5,28 5,12"
        stroke="#56CDAD"
        strokeWidth="2"
        fill="none"
      />
      <text
        x="50%"
        y="55%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontFamily="Inter,sans-serif"
        fontWeight="700"
        fontSize="14"
        fill="#56CDAD"
      >
        N
      </text>
    </svg>
  ),
  Netlify: (
    <svg
      width="64"
      height="64"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M20 5L35 20L20 35L5 20Z" fill="#05BDBA" opacity="0.15" />
      <path
        d="M20 5L35 20L20 35L5 20Z"
        stroke="#05BDBA"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M12 20H28M20 12V28"
        stroke="#05BDBA"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  ),
  Dropbox: (
    <svg
      width="64"
      height="64"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 8L10 14L20 20L10 26L20 32L30 26L20 20L30 14Z"
        fill="#0061FF"
        opacity="0.15"
      />
      <path
        d="M20 8L10 14L20 20L10 26L20 32L30 26L20 20L30 14Z"
        stroke="#0061FF"
        strokeWidth="1.8"
        fill="none"
        strokeLinejoin="round"
      />
      <path
        d="M13 29L20 24.5L27 29"
        stroke="#0061FF"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  ),
  Maze: (
    <svg
      width="64"
      height="64"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="20" cy="20" r="14" fill="#FF6550" opacity="0.12" />
      <path
        d="M12 20C12 15.58 15.58 12 20 12C24.42 12 28 15.58 28 20"
        stroke="#FF6550"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M15 20C15 17.24 17.24 15 20 15C22.76 15 25 17.24 25 20"
        stroke="#FF6550"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="20" cy="20" r="2.5" fill="#FF6550" />
    </svg>
  ),
  Terraform: (
    <svg
      width="64"
      height="64"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17 10L17 22L26.5 16.5L26.5 4.5Z" fill="#7D2AE8" opacity="0.8" />
      <path d="M7 15.5L7 27.5L16.5 22L16.5 10Z" fill="#7D2AE8" opacity="0.5" />
      <path
        d="M17 24.5L17 36.5L26.5 31L26.5 19Z"
        fill="#7D2AE8"
        opacity="0.6"
      />
    </svg>
  ),
  Udacity: (
    <svg
      width="64"
      height="64"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="20" cy="20" r="14" fill="#02B3E4" opacity="0.15" />
      <circle
        cx="20"
        cy="20"
        r="14"
        stroke="#02B3E4"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M14 15V22C14 25.31 16.69 28 20 28C23.31 28 26 25.31 26 22V15"
        stroke="#02B3E4"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  ),
  Packer: (
    <svg
      width="64"
      height="64"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="6"
        y="6"
        width="28"
        height="28"
        rx="5"
        fill="#FF6550"
        opacity="0.15"
      />
      <path
        d="M13 13H22C24.76 13 27 15.24 27 18C27 20.76 24.76 23 22 23H13V13Z"
        stroke="#FF6550"
        strokeWidth="2"
        fill="none"
        strokeLinejoin="round"
      />
      <path
        d="M13 23V30"
        stroke="#FF6550"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  ),
  Webflow: (
    <svg
      width="64"
      height="64"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="10"
        width="30"
        height="20"
        rx="4"
        fill="#4353FF"
        opacity="0.12"
      />
      <path
        d="M8 14L14 26L17.5 19L21 26L27 14"
        stroke="#4353FF"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  ),
};

type LatestJob = {
  id: number;
  title: string;
  company: string;
  location: string;
  tags: { label: string; color: string; bg: string }[];
  logoColor: string;
};

const latestJobs: LatestJob[] = [
  {
    id: 9,
    title: "Social Media Assistant",
    company: "Nomad",
    location: "Paris, France",
    tags: [
      { label: "Full Time", color: "#56CDAD", bg: "#EBFAF5" },
      { label: "Marketing", color: "#FFB836", bg: "#FFF0D9" },
      { label: "Design", color: "#4640DE", bg: "#E9EBFD" },
    ],
    logoColor: "#56CDAD",
  },
  {
    id: 10,
    title: "Social Media Assistant",
    company: "Netlify",
    location: "Paris, France",
    tags: [
      { label: "Full Time", color: "#56CDAD", bg: "#EBFAF5" },
      { label: "Marketing", color: "#FFB836", bg: "#FFF0D9" },
      { label: "Design", color: "#4640DE", bg: "#E9EBFD" },
    ],
    logoColor: "#05BDBA",
  },
  {
    id: 11,
    title: "Brand Designer",
    company: "Dropbox",
    location: "San Francisco, USA",
    tags: [
      { label: "Full Time", color: "#56CDAD", bg: "#EBFAF5" },
      { label: "Marketing", color: "#FFB836", bg: "#FFF0D9" },
      { label: "Design", color: "#4640DE", bg: "#E9EBFD" },
    ],
    logoColor: "#0061FF",
  },
  {
    id: 12,
    title: "Brand Designer",
    company: "Maze",
    location: "San Francisco, USA",
    tags: [
      { label: "Full Time", color: "#56CDAD", bg: "#EBFAF5" },
      { label: "Marketing", color: "#FFB836", bg: "#FFF0D9" },
      { label: "Design", color: "#4640DE", bg: "#E9EBFD" },
    ],
    logoColor: "#FF6550",
  },
  {
    id: 13,
    title: "Interactive Developer",
    company: "Terraform",
    location: "Hamburg, Germany",
    tags: [
      { label: "Full Time", color: "#56CDAD", bg: "#EBFAF5" },
      { label: "Marketing", color: "#FFB836", bg: "#FFF0D9" },
      { label: "Design", color: "#4640DE", bg: "#E9EBFD" },
    ],
    logoColor: "#7D2AE8",
  },
  {
    id: 14,
    title: "Interactive Developer",
    company: "Udacity",
    location: "Hamburg, Germany",
    tags: [
      { label: "Full Time", color: "#56CDAD", bg: "#EBFAF5" },
      { label: "Marketing", color: "#FFB836", bg: "#FFF0D9" },
      { label: "Design", color: "#4640DE", bg: "#E9EBFD" },
    ],
    logoColor: "#02B3E4",
  },
  {
    id: 15,
    title: "HR Manager",
    company: "Packer",
    location: "Lucern, Switzerland",
    tags: [
      { label: "Full Time", color: "#56CDAD", bg: "#EBFAF5" },
      { label: "Marketing", color: "#FFB836", bg: "#FFF0D9" },
      { label: "Design", color: "#4640DE", bg: "#E9EBFD" },
    ],
    logoColor: "#FF6550",
  },
  {
    id: 16,
    title: "HR Manager",
    company: "Webflow",
    location: "Lucern, Switzerland",
    tags: [
      { label: "Full Time", color: "#56CDAD", bg: "#EBFAF5" },
      { label: "Marketing", color: "#FFB836", bg: "#FFF0D9" },
      { label: "Design", color: "#4640DE", bg: "#E9EBFD" },
    ],
    logoColor: "#4353FF",
  },
];

function LatestJobItem({ job }: { job: LatestJob }) {
  return (
    <Link
      href={`/jobs/${job.id}`}
      className="group flex items-center gap-5 bg-white p-6 hover:shadow-sm transition-all"
    >
      {/* Logo */}
      <div className="w-[72px] h-[72px] flex items-center justify-center flex-shrink-0">
        {CompanyIcons[job.company] ?? (
          <div
            className="w-[72px] h-[72px] rounded-xl flex items-center justify-center font-bold text-[22px]"
            style={{
              backgroundColor: job.logoColor + "18",
              color: job.logoColor,
            }}
          >
            {job.company.charAt(0)}
          </div>
        )}
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <h3 className="text-[17px] font-semibold text-neutral-900 group-hover:text-brand transition-colors truncate">
          {job.title}
        </h3>
        <p className="text-[14px] text-neutral-500 mb-2 truncate">
          {job.company} • {job.location}
        </p>
        <div className="flex flex-wrap gap-2">
          {job.tags.map((tag) => (
            <span
              key={tag.label}
              className="text-[11px] font-medium px-3 py-[3px] rounded-full"
              style={{ color: tag.color, backgroundColor: tag.bg }}
            >
              {tag.label}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}

export default function LatestJobs() {
  const leftCol = latestJobs.filter((_, i) => i % 2 === 0);
  const rightCol = latestJobs.filter((_, i) => i % 2 !== 0);

  return (
    <section className="py-16 bg-page-bg">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-[32px] font-bold text-neutral-900">
            Latest <span className="text-accent">jobs open</span>
          </h2>
          <Link
            href="/jobs"
            className="flex items-center gap-2 text-[15px] font-semibold text-brand hover:gap-3 transition-all"
          >
            Show all jobs
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                d="M5 12h14M13 6l6 6-6 6"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>

        {/* Two-column list */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div className="flex flex-col gap-4">
            {leftCol.map((job) => (
              <LatestJobItem key={job.id} job={job} />
            ))}
          </div>
          <div className="flex flex-col gap-4">
            {rightCol.map((job) => (
              <LatestJobItem key={job.id} job={job} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
