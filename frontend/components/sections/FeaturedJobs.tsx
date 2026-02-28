import Link from "next/link";

type JobTag = { label: string; color: string; bg: string };

type FeaturedJob = {
  id: number;
  title: string;
  company: string;
  location: string;
  type: string;
  description: string;
  tags: JobTag[];
  logoColor: string;
  logoInitial: string;
};

const featuredJobs: FeaturedJob[] = [
  {
    id: 1,
    title: "Email Marketing",
    company: "Revolut",
    location: "Madrid, Spain",
    type: "Full Time",
    description: "Revolut is looking for Email Marketing to help the team t…",
    tags: [
      { label: "Marketing", color: "#FFB836", bg: "#FFF0D9" },
      { label: "Design", color: "#56CDAD", bg: "#EBFAF5" },
    ],
    logoColor: "#FF6550",
    logoInitial: "R",
  },
  {
    id: 2,
    title: "Brand Designer",
    company: "Dropbox",
    location: "San Francisco, US",
    type: "Full Time",
    description: "Dropbox is looking for Brand Designer to help the team t…",
    tags: [
      { label: "Design", color: "#56CDAD", bg: "#EBFAF5" },
      { label: "Business", color: "#4640DE", bg: "#E9EBFD" },
    ],
    logoColor: "#0061FF",
    logoInitial: "D",
  },
  {
    id: 3,
    title: "Email Marketing",
    company: "Pitch",
    location: "Berlin, Germany",
    type: "Full Time",
    description: "Pitch is looking for Customer Manager to join marketing t…",
    tags: [{ label: "Marketing", color: "#FFB836", bg: "#FFF0D9" }],
    logoColor: "#1A1A2E",
    logoInitial: "P",
  },
  {
    id: 4,
    title: "Visual Designer",
    company: "Blinkist",
    location: "Granada, Spain",
    type: "Full Time",
    description: "Blinkist is looking for Visual Designer to help team desi…",
    tags: [{ label: "Design", color: "#56CDAD", bg: "#EBFAF5" }],
    logoColor: "#00A8A8",
    logoInitial: "B",
  },
  {
    id: 5,
    title: "Product Designer",
    company: "ClassPass",
    location: "Manchester, UK",
    type: "Full Time",
    description: "ClassPass is looking for Product Designer to help us…",
    tags: [
      { label: "Marketing", color: "#FFB836", bg: "#FFF0D9" },
      { label: "Design", color: "#56CDAD", bg: "#EBFAF5" },
    ],
    logoColor: "#FF6550",
    logoInitial: "C",
  },
  {
    id: 6,
    title: "Lead Designer",
    company: "Canva",
    location: "Ontario, Canada",
    type: "Full Time",
    description: "Canva is looking for Lead Engineer to help develop n…",
    tags: [
      { label: "Design", color: "#56CDAD", bg: "#EBFAF5" },
      { label: "Business", color: "#4640DE", bg: "#E9EBFD" },
    ],
    logoColor: "#7D2AE8",
    logoInitial: "C",
  },
  {
    id: 7,
    title: "Brand Strategist",
    company: "GoDaddy",
    location: "Marseille, France",
    type: "Full Time",
    description: "GoDaddy is looking for Brand Strategist to join the team…",
    tags: [{ label: "Marketing", color: "#FFB836", bg: "#FFF0D9" }],
    logoColor: "#1BDBDB",
    logoInitial: "G",
  },
  {
    id: 8,
    title: "Data Analyst",
    company: "Twitter",
    location: "San Diego, US",
    type: "Full Time",
    description: "Twitter is looking for Data Analyst to help team osi…",
    tags: [{ label: "Technology", color: "#4640DE", bg: "#E9EBFD" }],
    logoColor: "#1DA1F2",
    logoInitial: "T",
  },
];

export default function FeaturedJobs() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-[32px] font-bold text-neutral-900">
            Featured <span className="text-accent">jobs</span>
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

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {featuredJobs.map((job) => (
            <Link
              key={job.id}
              href={`/jobs/${job.id}`}
              className="group bg-white border border-neutral-200 rounded-none p-7 flex flex-col gap-5"
            >
              {/* Top row: logo + type badge */}
              <div className="flex items-start justify-between">
                <div
                  className="w-[56px] h-[56px] rounded-none flex items-center justify-center font-bold text-[18px] flex-shrink-0 border border-neutral-200"
                  style={{
                    backgroundColor: job.logoColor + "18",
                    color: job.logoColor,
                  }}
                >
                  {job.logoInitial}
                </div>
                <span className="text-[13px] font-semibold px-4 py-[5px] rounded-none border border-brand/40 text-brand">
                  {job.type}
                </span>
              </div>

              {/* Job info */}
              <div>
                <h3 className="text-[19px] font-semibold text-neutral-900 mb-1 group-hover:text-brand transition-colors">
                  {job.title}
                </h3>
                <p className="text-[14px] text-neutral-500">
                  {job.company} • {job.location}
                </p>
              </div>

              {/* Description */}
              <p className="text-[15px] text-neutral-500 leading-[1.6] line-clamp-2">
                {job.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {job.tags.map((tag) => (
                  <span
                    key={tag.label}
                    className="text-[13px] font-medium px-3 py-[5px] rounded-full"
                    style={{ color: tag.color, backgroundColor: tag.bg }}
                  >
                    {tag.label}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
