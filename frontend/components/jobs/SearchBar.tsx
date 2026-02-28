"use client";

import { useState } from "react";
import { JOB_CATEGORIES, LOCATIONS } from "@/lib/constants";
import { JobFilters } from "@/lib/api";
import Button from "@/components/ui/Button";

interface SearchBarProps {
  onSearch: (filters: JobFilters) => void;
  loading?: boolean;
}

export default function SearchBar({ onSearch, loading }: SearchBarProps) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch({ search, category, location });
  };

  const handleReset = () => {
    setSearch("");
    setCategory("");
    setLocation("");
    onSearch({});
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-xl border border-neutral-200 p-4 shadow-sm"
    >
      <div className="flex flex-col md:flex-row gap-3">
        {/* Search */}
        <div className="flex-1 relative">
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"
            />
          </svg>
          <input
            type="text"
            placeholder="Job title, keyword..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border border-neutral-200 rounded-lg pl-9 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand"
          />
        </div>

        {/* Category */}
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border border-neutral-200 rounded-lg px-4 py-2.5 text-sm text-neutral-700 focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand bg-white"
        >
          <option value="">All Categories</option>
          {JOB_CATEGORIES.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        {/* Location */}
        <select
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border border-neutral-200 rounded-lg px-4 py-2.5 text-sm text-neutral-700 focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand bg-white"
        >
          <option value="">All Locations</option>
          {LOCATIONS.map((loc) => (
            <option key={loc} value={loc}>
              {loc}
            </option>
          ))}
        </select>

        <div className="flex gap-2">
          <Button type="submit" loading={loading}>
            Search
          </Button>
          <Button type="button" variant="outline" onClick={handleReset}>
            Reset
          </Button>
        </div>
      </div>
    </form>
  );
}
