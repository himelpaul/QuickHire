"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { getJobById, Job } from "@/lib/api";
import JobDetailView from "@/components/jobs/JobDetailView";
import ApplyForm from "@/components/forms/ApplyForm";
import Spinner from "@/components/ui/Spinner";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

export default function JobDetailPage() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const [job, setJob] = useState<Job | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;
    getJobById(id)
      .then(setJob)
      .catch((err) =>
        setError(err instanceof Error ? err.message : "Job not found"),
      )
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-page-bg py-12">
        <div className="max-w-5xl mx-auto px-6">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-neutral-500 mb-8">
            <Link href="/" className="hover:text-brand transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/jobs" className="hover:text-brand transition-colors">
              Jobs
            </Link>
            {job && (
              <>
                <span>/</span>
                <span className="text-neutral-800 font-medium truncate max-w-[200px]">
                  {job.title}
                </span>
              </>
            )}
          </nav>

          {loading && (
            <div className="flex justify-center py-20">
              <Spinner />
            </div>
          )}

          {error && (
            <div className="text-center py-20">
              <p className="text-red-500 font-medium mb-4">{error}</p>
              <button
                onClick={() => router.back()}
                className="text-brand text-sm underline"
              >
                Go back
              </button>
            </div>
          )}

          {!loading && !error && job && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left — job detail */}
              <div className="lg:col-span-2">
                <JobDetailView job={job} />
              </div>

              {/* Right — apply form */}
              <div className="lg:col-span-1">
                <div className="sticky top-24">
                  <ApplyForm jobId={job._id} jobTitle={job.title} />
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
