import Badge from "@/components/ui/Badge";
import { Job } from "@/lib/api";

const categoryColors: Record<string, string> = {
  Design: "#56CDFa",
  Sales: "#FF6550",
  Marketing: "#FFB836",
  Finance: "#26A4FF",
  Technology: "#4640DE",
  Engineering: "#56CDAD",
  "Human Resource": "#FF82AC",
  Education: "#7B61FF",
};

export default function JobDetailView({ job }: { job: Job }) {
  const color = categoryColors[job.category] || "#4640DE";
  const letter = job.company.charAt(0).toUpperCase();

  const typeVariant =
    job.type === "Full Time"
      ? "green"
      : job.type === "Part Time"
        ? "yellow"
        : job.type === "Remote"
          ? "brand"
          : "gray";

  const postedDate = new Date(job.createdAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="bg-white rounded-2xl border border-neutral-200 p-8 md:p-10">
      {/* Header */}
      <div className="flex items-start gap-5 mb-8">
        <div className="w-16 h-16 rounded-xl border border-neutral-200 flex items-center justify-center shrink-0">
          <span className="text-2xl font-bold" style={{ color }}>
            {letter}
          </span>
        </div>
        <div className="flex-1">
          <h1 className="text-2xl font-bold text-neutral-900">{job.title}</h1>
          <p className="text-neutral-500 mt-1">{job.company}</p>
          <div className="flex flex-wrap gap-2 mt-3">
            <Badge
              variant={typeVariant as "green" | "yellow" | "brand" | "gray"}
            >
              {job.type}
            </Badge>
            <Badge variant="gray">{job.category}</Badge>
          </div>
        </div>
      </div>

      {/* Meta */}
      <dl className="grid grid-cols-2 sm:grid-cols-3 gap-5 mb-8 p-6 bg-neutral-50 rounded-xl">
        <div>
          <dt className="text-xs text-neutral-400 uppercase tracking-wider">
            Location
          </dt>
          <dd className="mt-1 font-semibold text-neutral-800">
            {job.location}
          </dd>
        </div>
        <div>
          <dt className="text-xs text-neutral-400 uppercase tracking-wider">
            Job Type
          </dt>
          <dd className="mt-1 font-semibold text-neutral-800">{job.type}</dd>
        </div>
        <div>
          <dt className="text-xs text-neutral-400 uppercase tracking-wider">
            Category
          </dt>
          <dd className="mt-1 font-semibold text-neutral-800">
            {job.category}
          </dd>
        </div>
        <div>
          <dt className="text-xs text-neutral-400 uppercase tracking-wider">
            Posted
          </dt>
          <dd className="mt-1 font-semibold text-neutral-800">{postedDate}</dd>
        </div>
      </dl>

      {/* Description */}
      <div>
        <h2 className="text-lg font-bold text-neutral-900 mb-3">
          Job Description
        </h2>
        <div className="text-neutral-600 leading-relaxed whitespace-pre-wrap">
          {job.description}
        </div>
      </div>
    </div>
  );
}
