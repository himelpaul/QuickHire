import { API_URL } from "./constants";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface Job {
  _id: string;
  title: string;
  company: string;
  location: string;
  category: string;
  description: string;
  type: string;
  createdAt: string;
  updatedAt: string;
}

export interface Application {
  _id: string;
  jobId: string;
  name: string;
  email: string;
  resumeLink: string;
  coverNote?: string;
  createdAt: string;
}

export interface JobFilters {
  search?: string;
  category?: string;
  location?: string;
}

export interface CreateJobData {
  title: string;
  company: string;
  location: string;
  category: string;
  description: string;
  type?: string;
}

export interface CreateApplicationData {
  jobId: string;
  name: string;
  email: string;
  resumeLink: string;
  coverNote?: string;
}

// ─── Generic fetcher ──────────────────────────────────────────────────────────

async function apiFetch<T>(path: string, options?: RequestInit): Promise<T> {
  const res = await fetch(`${API_URL}${path}`, {
    headers: { "Content-Type": "application/json" },
    ...options,
  });

  const json = await res.json();

  if (!res.ok || !json.success) {
    throw new Error(json.message || "Something went wrong");
  }

  return json.data as T;
}

// ─── Jobs ─────────────────────────────────────────────────────────────────────

export async function getJobs(filters: JobFilters = {}): Promise<Job[]> {
  const params = new URLSearchParams();
  if (filters.search) params.set("search", filters.search);
  if (filters.category) params.set("category", filters.category);
  if (filters.location) params.set("location", filters.location);

  const query = params.toString() ? `?${params.toString()}` : "";
  return apiFetch<Job[]>(`/api/jobs${query}`);
}

export async function getJobById(id: string): Promise<Job> {
  return apiFetch<Job>(`/api/jobs/${id}`);
}

export async function createJob(data: CreateJobData): Promise<Job> {
  return apiFetch<Job>("/api/jobs", {
    method: "POST",
    body: JSON.stringify(data),
  });
}

export async function deleteJob(id: string): Promise<void> {
  await apiFetch<void>(`/api/jobs/${id}`, { method: "DELETE" });
}

// ─── Applications ─────────────────────────────────────────────────────────────

export async function createApplication(
  data: CreateApplicationData,
): Promise<Application> {
  return apiFetch<Application>("/api/applications", {
    method: "POST",
    body: JSON.stringify(data),
  });
}
