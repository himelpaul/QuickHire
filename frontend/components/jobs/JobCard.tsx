import Link from "next/link";
import type { ReactElement } from "react";
import Badge from "@/components/ui/Badge";
import { Job } from "@/lib/api";

const categoryColors: Record<string, string> = {
  Design: "#56CDAD",
  Sales: "#FF6550",
  Marketing: "#FFB836",
  Finance: "#26A4FF",
  Technology: "#4640DE",
  Engineering: "#56CDAD",
  "Human Resource": "#FF82AC",
  Education: "#7B61FF",
};

const companyIcons: Record<string, (color: string) => ReactElement> = {
  Nomad: (c) => (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
      <polygon
        points="22,4 38,13 38,31 22,40 6,31 6,13"
        fill={c}
        opacity="0.15"
      />
      <polygon
        points="22,4 38,13 38,31 22,40 6,31 6,13"
        stroke={c}
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
        fontSize="16"
        fill={c}
      >
        N
      </text>
    </svg>
  ),
  Netlify: (c) => (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
      <path d="M22 5L39 22L22 39L5 22Z" fill={c} opacity="0.15" />
      <path
        d="M22 5L39 22L22 39L5 22Z"
        stroke={c}
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M13 22H31M22 13V31"
        stroke={c}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  ),
  Dropbox: (c) => (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
      <path
        d="M22 8L11 15L22 22L11 29L22 36L33 29L22 22L33 15Z"
        fill={c}
        opacity="0.15"
      />
      <path
        d="M22 8L11 15L22 22L11 29L22 36L33 29L22 22L33 15Z"
        stroke={c}
        strokeWidth="1.8"
        fill="none"
        strokeLinejoin="round"
      />
      <path
        d="M14 32L22 27.5L30 32"
        stroke={c}
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  ),
  Maze: (c) => (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
      <circle cx="22" cy="22" r="15" fill={c} opacity="0.12" />
      <path
        d="M13 22C13 17.03 17.03 13 22 13C26.97 13 31 17.03 31 22"
        stroke={c}
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M17 22C17 19.24 19.24 17 22 17C24.76 17 27 19.24 27 22"
        stroke={c}
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="22" cy="22" r="2.5" fill={c} />
    </svg>
  ),
  Terraform: (c) => (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
      <path d="M19 11L19 24L29.5 18L29.5 5Z" fill={c} opacity="0.85" />
      <path d="M7 17L7 30L17.5 24L17.5 11Z" fill={c} opacity="0.5" />
      <path d="M19 27L19 40L29.5 34L29.5 21Z" fill={c} opacity="0.65" />
    </svg>
  ),
  Udacity: (c) => (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
      <circle cx="22" cy="22" r="15" fill={c} opacity="0.15" />
      <circle cx="22" cy="22" r="15" stroke={c} strokeWidth="2" fill="none" />
      <path
        d="M15 16V24C15 27.87 18.13 31 22 31C25.87 31 29 27.87 29 24V16"
        stroke={c}
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  ),
  Packer: (c) => (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
      <rect x="7" y="7" width="30" height="30" rx="5" fill={c} opacity="0.12" />
      <path
        d="M14 14H24C27.31 14 30 16.69 30 20C30 23.31 27.31 26 24 26H14V14Z"
        stroke={c}
        strokeWidth="2"
        fill="none"
        strokeLinejoin="round"
      />
      <path d="M14 26V33" stroke={c} strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  Webflow: (c) => (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
      <rect x="5" y="11" width="34" height="22" rx="4" fill={c} opacity="0.1" />
      <path
        d="M8 15L15 29L19.5 21L24 29L31 15"
        stroke={c}
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  ),
};

function CompanyLogo({
  company,
  category,
}: {
  company: string;
  category: string;
}) {
  const color = categoryColors[category] || "#4640DE";
  const iconFn = companyIcons[company];

  if (iconFn) {
    return (
      <div className="w-12 h-12 flex items-center justify-center shrink-0">
        {iconFn(color)}
      </div>
    );
  }

  // Fallback: colored letter icon without box border
  return (
    <div
      className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
      style={{ backgroundColor: color + "18" }}
    >
      <span className="text-lg font-bold" style={{ color }}>
        {company.charAt(0).toUpperCase()}
      </span>
    </div>
  );
}

export default function JobCard({ job }: { job: Job }) {
  const typeVariant =
    job.type === "Full Time"
      ? "green"
      : job.type === "Part Time"
        ? "yellow"
        : job.type === "Remote"
          ? "brand"
          : "gray";

  return (
    <Link href={`/jobs/${job._id}`}>
      <article className="bg-white rounded-xl border border-neutral-200 p-6 hover:border-brand hover:shadow-md transition-all cursor-pointer">
        <div className="flex items-start gap-4 mb-4">
          <CompanyLogo company={job.company} category={job.category} />
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-neutral-900 text-base leading-snug truncate">
              {job.title}
            </h3>
            <p className="text-sm text-neutral-500 mt-0.5">{job.company}</p>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-2 mt-3">
          <Badge variant={typeVariant as "green" | "yellow" | "brand" | "gray"}>
            {job.type}
          </Badge>
          <Badge variant="gray">{job.category}</Badge>
          <span className="text-xs text-neutral-400 ml-auto">
            {job.location}
          </span>
        </div>
      </article>
    </Link>
  );
}
