"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const popularSearches = ["UI Designer", "UX Researcher", "Android", "Admin"];

export default function HeroSection() {
  const router = useRouter();
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("Florence, Italy");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (keyword) params.set("search", keyword);
    if (location) params.set("location", location);
    router.push(`/jobs${params.toString() ? `?${params.toString()}` : ""}`);
  };

  return (
    <section className="bg-page-bg overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 py-16 lg:py-24 flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
        {/* Left content */}
        <div className="flex-1 max-w-[640px]">
          <h1 className="text-[48px] lg:text-[56px] font-bold leading-[1.15] text-neutral-900 mb-6">
            Discover more than
            <br />
            <span className="text-accent relative inline-block">
              5000+ Jobs
              {/* Brushstroke underline */}
              <svg
                className="absolute -bottom-3 left-0 w-full"
                viewBox="0 0 320 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 11.5C50 5 120 2.5 160 6C200 9.5 260 13 318 8"
                  stroke="#26A4FF"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>

          <p className="text-[16px] text-neutral-500 leading-[1.7] mb-8 max-w-[400px]">
            Great platform for the job seeker that searching for new career
            heights and passionate about startups.
          </p>

          {/* Search box */}
          <form
            onSubmit={handleSearch}
            className="bg-white rounded-[10px] shadow-[0_4px_30px_rgba(0,0,0,0.08)] border border-neutral-200 flex flex-col sm:flex-row items-stretch sm:items-center p-2 gap-3 sm:gap-0 mb-6 overflow-hidden"
          >
            {/* Job title input */}
            <div className="flex items-center gap-3 flex-1 px-3 py-1">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                className="flex-shrink-0 text-neutral-500"
              >
                <path
                  d="M9 17A8 8 0 1 0 9 1a8 8 0 0 0 0 16z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M19 19l-4.35-4.35"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <input
                type="text"
                placeholder="Job title or keyword"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                className="flex-1 text-[14px] text-neutral-700 placeholder:text-neutral-500 outline-none border-0 bg-transparent min-w-0"
              />
            </div>

            {/* Divider */}
            <div className="hidden sm:block w-px h-8 bg-neutral-200 mx-2" />

            {/* Location input */}
            <div className="flex items-center gap-2 sm:w-[180px] px-3 py-1">
              <svg
                width="16"
                height="20"
                viewBox="0 0 16 20"
                fill="none"
                className="flex-shrink-0 text-neutral-500"
              >
                <path
                  d="M8 0C5.33 0 2 2.33 2 6.5C2 10.38 7.06 17.5 8 17.5C8.94 17.5 14 10.38 14 6.5C14 2.33 10.67 0 8 0Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <circle
                  cx="8"
                  cy="6.5"
                  r="2"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="flex-1 text-[14px] text-neutral-700 outline-none border-0 bg-transparent min-w-0"
              />
              <svg
                width="12"
                height="8"
                viewBox="0 0 12 8"
                fill="none"
                className="flex-shrink-0 text-neutral-500"
              >
                <path
                  d="M1 1.5L6 6.5L11 1.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Search button */}
            <button
              type="submit"
              className="bg-brand hover:bg-brand/90 text-white text-[15px] font-semibold px-7 py-[14px] rounded-[8px] whitespace-nowrap transition-colors sm:ml-1 flex-shrink-0"
            >
              Search my job
            </button>
          </form>

          {/* Popular searches */}
          <div className="flex flex-wrap items-center gap-2 text-[14px]">
            <span className="text-neutral-700 font-medium">Popular:</span>
            {popularSearches.map((term, i) => (
              <Link
                key={i}
                href={`/jobs?q=${encodeURIComponent(term)}`}
                className="text-neutral-500 hover:text-brand transition-colors"
              >
                {term}
                {i < popularSearches.length - 1 ? "," : ""}
              </Link>
            ))}
          </div>
        </div>

        {/* Right — Hero image */}
        <div className="hidden lg:block flex-shrink-0 relative w-[520px] h-[500px]">
          {/* Decorative background elements */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Large diagonal lavender/light-blue rectangle — matches Figma */}
            <div
              className="absolute top-0 right-0 w-[460px] h-full bg-[#E9EBF5]"
              style={{
                clipPath: "polygon(8% 0%, 100% 0%, 100% 100%, 0% 100%)",
              }}
            />
            {/* Diagonal geometric lines — matches Figma background decoration */}
            <svg
              className="absolute inset-0 w-full h-full opacity-40"
              viewBox="0 0 520 500"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="200"
                y1="0"
                x2="520"
                y2="320"
                stroke="#B8BDE8"
                strokeWidth="1"
              />
              <line
                x1="260"
                y1="0"
                x2="520"
                y2="260"
                stroke="#B8BDE8"
                strokeWidth="1"
              />
              <line
                x1="340"
                y1="0"
                x2="520"
                y2="180"
                stroke="#B8BDE8"
                strokeWidth="1"
              />
              <line
                x1="420"
                y1="0"
                x2="520"
                y2="100"
                stroke="#B8BDE8"
                strokeWidth="1"
              />
              <line
                x1="200"
                y1="500"
                x2="520"
                y2="180"
                stroke="#B8BDE8"
                strokeWidth="1"
              />
              <line
                x1="140"
                y1="500"
                x2="520"
                y2="240"
                stroke="#B8BDE8"
                strokeWidth="1"
              />
            </svg>
            {/* Decorative grid squares top-right */}
            <svg
              className="absolute top-6 right-6 opacity-50"
              width="96"
              height="96"
              viewBox="0 0 96 96"
              fill="none"
            >
              <rect
                x="2"
                y="2"
                width="36"
                height="36"
                rx="4"
                stroke="#4640DE"
                strokeWidth="1.5"
                fill="none"
              />
              <rect
                x="46"
                y="2"
                width="36"
                height="36"
                rx="4"
                stroke="#4640DE"
                strokeWidth="1.5"
                fill="none"
              />
              <rect
                x="2"
                y="46"
                width="36"
                height="36"
                rx="4"
                stroke="#4640DE"
                strokeWidth="1.5"
                fill="none"
              />
              <rect
                x="46"
                y="46"
                width="36"
                height="36"
                rx="4"
                stroke="#4640DE"
                strokeWidth="1.5"
                fill="none"
              />
            </svg>
          </div>

          {/* Hero person image */}
          <div className="absolute bottom-0 right-0 w-[420px] h-[480px]">
            <Image
              src="/images/hero-person.jpg"
              alt="Professional job seeker"
              fill
              className="object-cover object-top"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
