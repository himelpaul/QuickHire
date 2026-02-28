"use client";

import { useState, useCallback } from "react";
import { useJobs } from "@/hooks/useJobs";
import { deleteJob } from "@/lib/api";
import AdminJobForm from "@/components/forms/AdminJobForm";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Spinner from "@/components/ui/Spinner";
import EmptyState from "@/components/ui/EmptyState";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function AdminPage() {
  const { jobs, loading, error, refetch } = useJobs();
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [deleteError, setDeleteError] = useState<string | null>(null);

  const handleDelete = useCallback(
    async (id: string) => {
      if (!confirm("Are you sure you want to delete this job?")) return;
      setDeletingId(id);
      setDeleteError(null);
      try {
        await deleteJob(id);
        refetch();
      } catch (err) {
        setDeleteError(
          err instanceof Error ? err.message : "Failed to delete job",
        );
      } finally {
        setDeletingId(null);
      }
    },
    [refetch],
  );

  const typeVariant = (type: string) =>
    type === "Full Time"
      ? "green"
      : type === "Part Time"
        ? "yellow"
        : type === "Remote"
          ? "brand"
          : "gray";

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-page-bg py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-3xl font-bold text-neutral-900 mb-2">
            Admin Panel
          </h1>
          <p className="text-neutral-500 mb-10">
            Manage job listings — post new jobs and remove old ones.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* ── Create Job Form ── */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl border border-neutral-200 p-8">
                <h2 className="text-xl font-bold text-neutral-900 mb-6">
                  Post a New Job
                </h2>
                <AdminJobForm onCreated={() => refetch()} />
              </div>
            </div>

            {/* ── Jobs List ── */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl border border-neutral-200 p-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-neutral-900">
                    All Jobs
                  </h2>
                  <span className="text-sm text-neutral-500">
                    {jobs.length} listing{jobs.length !== 1 ? "s" : ""}
                  </span>
                </div>

                {deleteError && (
                  <p className="text-sm text-red-500 mb-4">{deleteError}</p>
                )}

                {loading && (
                  <div className="flex justify-center py-16">
                    <Spinner />
                  </div>
                )}

                {error && (
                  <div className="text-center py-10">
                    <p className="text-red-500 text-sm">{error}</p>
                  </div>
                )}

                {!loading && !error && jobs.length === 0 && (
                  <EmptyState
                    title="No jobs yet"
                    description="Post your first job using the form on the left."
                  />
                )}

                {!loading && !error && jobs.length > 0 && (
                  <ul className="divide-y divide-neutral-100">
                    {jobs.map((job) => (
                      <li
                        key={job._id}
                        className="py-4 flex items-start justify-between gap-4"
                      >
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-neutral-900 truncate">
                            {job.title}
                          </p>
                          <p className="text-sm text-neutral-500 mt-0.5">
                            {job.company} · {job.location}
                          </p>
                          <div className="flex gap-2 mt-2">
                            <Badge
                              variant={
                                typeVariant(job.type) as
                                  | "green"
                                  | "yellow"
                                  | "brand"
                                  | "gray"
                              }
                            >
                              {job.type}
                            </Badge>
                            <Badge variant="gray">{job.category}</Badge>
                          </div>
                        </div>
                        <Button
                          variant="danger"
                          size="sm"
                          loading={deletingId === job._id}
                          onClick={() => handleDelete(job._id)}
                          className="shrink-0"
                        >
                          Delete
                        </Button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
