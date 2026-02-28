"use client";

import { useState } from "react";
import { useJobs } from "@/hooks/useJobs";
import { JobFilters } from "@/lib/api";
import JobCard from "@/components/jobs/JobCard";
import SearchBar from "@/components/jobs/SearchBar";
import Spinner from "@/components/ui/Spinner";
import EmptyState from "@/components/ui/EmptyState";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function JobsPage() {
  const { jobs, loading, error, refetch } = useJobs();
  const [activeFilters, setActiveFilters] = useState<JobFilters>({});

  const handleSearch = (filters: JobFilters) => {
    setActiveFilters(filters);
    refetch(filters);
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-page-bg">
        {/* Page Header */}
        <section className="bg-white border-b border-neutral-200 py-12">
          <div className="max-w-6xl mx-auto px-6">
            <h1 className="text-3xl font-bold text-neutral-900 mb-1">
              Find Your Dream Job
            </h1>
            <p className="text-neutral-500">
              Browse all available opportunities and apply today.
            </p>
          </div>
        </section>

        {/* Search & Filters */}
        <section className="max-w-6xl mx-auto px-6 py-8">
          <SearchBar onSearch={handleSearch} loading={loading} />
        </section>

        {/* Results */}
        <section className="max-w-6xl mx-auto px-6 pb-16">
          {/* Stats row */}
          {!loading && !error && (
            <p className="text-sm text-neutral-500 mb-6">
              Showing{" "}
              <span className="font-semibold text-neutral-800">
                {jobs.length}
              </span>{" "}
              job{jobs.length !== 1 ? "s" : ""}
              {activeFilters.search && (
                <>
                  {" "}
                  for &ldquo;
                  <span className="font-medium">{activeFilters.search}</span>
                  &rdquo;
                </>
              )}
              {activeFilters.category && (
                <>
                  {" "}
                  in{" "}
                  <span className="font-medium">{activeFilters.category}</span>
                </>
              )}
            </p>
          )}

          {loading && (
            <div className="flex justify-center py-20">
              <Spinner />
            </div>
          )}

          {error && (
            <div className="text-center py-16">
              <p className="text-red-500 font-medium">{error}</p>
              <button
                onClick={() => refetch(activeFilters)}
                className="mt-4 text-sm text-brand underline"
              >
                Try again
              </button>
            </div>
          )}

          {!loading && !error && jobs.length === 0 && (
            <EmptyState
              title="No jobs found"
              description="Try changing your search terms or clearing the filters."
            />
          )}

          {!loading && !error && jobs.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {jobs.map((job) => (
                <JobCard key={job._id} job={job} />
              ))}
            </div>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}
