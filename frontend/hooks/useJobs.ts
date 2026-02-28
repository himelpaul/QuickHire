"use client";

import { useState, useEffect, useCallback } from "react";
import { getJobs, Job, JobFilters } from "@/lib/api";

interface UseJobsResult {
  jobs: Job[];
  loading: boolean;
  error: string | null;
  refetch: (filters?: JobFilters) => void;
}

export function useJobs(initialFilters: JobFilters = {}): UseJobsResult {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchJobs = useCallback(async (filters: JobFilters = {}) => {
    setLoading(true);
    setError(null);
    try {
      const data = await getJobs(filters);
      setJobs(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch jobs");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchJobs(initialFilters);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { jobs, loading, error, refetch: fetchJobs };
}
