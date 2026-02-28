export const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

export const JOB_TYPES = [
  "Full Time",
  "Part Time",
  "Remote",
  "Internship",
  "Contract",
] as const;

export const JOB_CATEGORIES = [
  "Design",
  "Sales",
  "Marketing",
  "Finance",
  "Technology",
  "Engineering",
  "Human Resource",
  "Education",
] as const;

export const LOCATIONS = [
  "Dhaka, Bangladesh",
  "Chittagong, Bangladesh",
  "Sylhet, Bangladesh",
  "Rajshahi, Bangladesh",
  "Khulna, Bangladesh",
  "Remote",
] as const;
