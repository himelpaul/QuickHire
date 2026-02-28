import Link from "next/link";

const categories = [
  {
    name: "Design",
    jobs: 235,
    icon: (
      <svg
        width="48"
        height="48"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 20L10 14L14 18L18 12L24 20H4Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <circle
          cx="20"
          cy="8"
          r="3"
          stroke="currentColor"
          strokeWidth="1.8"
          fill="none"
        />
      </svg>
    ),
    highlight: false,
  },
  {
    name: "Sales",
    jobs: 756,
    icon: (
      <svg
        width="48"
        height="48"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7 20V14M12 20V10M17 20V13M22 20V7"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ),
    highlight: false,
  },
  {
    name: "Marketing",
    jobs: 140,
    icon: (
      <svg
        width="48"
        height="48"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5 14C5 14 8 8 14 8C20 8 23 14 23 14C23 14 20 20 14 20C8 20 5 14 5 14Z"
          stroke="currentColor"
          strokeWidth="1.8"
          fill="none"
        />
        <circle
          cx="14"
          cy="14"
          r="3"
          stroke="currentColor"
          strokeWidth="1.8"
          fill="none"
        />
      </svg>
    ),
    highlight: true,
  },
  {
    name: "Finance",
    jobs: 325,
    icon: (
      <svg
        width="48"
        height="48"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="5"
          y="5"
          width="18"
          height="18"
          rx="3"
          stroke="currentColor"
          strokeWidth="1.8"
          fill="none"
        />
        <path
          d="M10 14h8M14 10v8"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ),
    highlight: false,
  },
  {
    name: "Technology",
    jobs: 436,
    icon: (
      <svg
        width="48"
        height="48"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="4"
          y="6"
          width="20"
          height="14"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.8"
          fill="none"
        />
        <path
          d="M10 24h8M14 20v4"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M10 12l2.5 2.5L10 17"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 17h2"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    highlight: false,
  },
  {
    name: "Engineering",
    jobs: 542,
    icon: (
      <svg
        width="48"
        height="48"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 12l-4 2 4 2M20 12l4 2-4 2M15 8l-2 12"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    highlight: false,
  },
  {
    name: "Business",
    jobs: 211,
    icon: (
      <svg
        width="48"
        height="48"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="4"
          y="10"
          width="20"
          height="14"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.8"
          fill="none"
        />
        <path
          d="M10 10V7a4 4 0 018 0v3"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M10 17h8"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    highlight: false,
  },
  {
    name: "Human Resource",
    jobs: 346,
    icon: (
      <svg
        width="48"
        height="48"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="14"
          cy="10"
          r="4"
          stroke="currentColor"
          strokeWidth="1.8"
          fill="none"
        />
        <path
          d="M6 24c0-4.42 3.58-8 8-8s8 3.58 8 8"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          fill="none"
        />
        <circle
          cx="22"
          cy="10"
          r="3"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
        />
        <path
          d="M25 20c0-2.76-1.34-5.2-3.4-6.7"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    ),
    highlight: false,
  },
];

export default function CategorySection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-[32px] font-bold text-neutral-900">
            Explore by <span className="text-accent">category</span>
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
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {categories.map((cat) => (
            <Link
              key={cat.name}
              href={`/jobs?category=${encodeURIComponent(cat.name)}`}
              className={`group rounded-none p-8 flex flex-col gap-5 border transition-all hover:shadow-md ${
                cat.highlight
                  ? "bg-brand border-brand text-white"
                  : "bg-white border-neutral-200 text-neutral-900 hover:border-brand"
              }`}
            >
              {/* Icon */}
              <div
                className={`flex items-center ${
                  cat.highlight ? "text-white" : "text-brand"
                }`}
              >
                {cat.icon}
              </div>

              {/* Name */}
              <h3
                className={`text-[20px] font-semibold ${
                  cat.highlight ? "text-white" : "text-neutral-900"
                }`}
              >
                {cat.name}
              </h3>

              {/* Job count + arrow */}
              <div
                className={`flex items-center justify-between text-[14px] font-medium ${
                  cat.highlight ? "text-white/80" : "text-neutral-500"
                }`}
              >
                <span>{cat.jobs} jobs available</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5 12h14M13 6l6 6-6 6"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
