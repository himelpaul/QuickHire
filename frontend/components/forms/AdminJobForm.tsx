 "use client";

import { useState } from "react";
import { createJob, CreateJobData } from "@/lib/api";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import { JOB_CATEGORIES, JOB_TYPES, LOCATIONS } from "@/lib/constants";

interface AdminJobFormProps {
  onCreated?: () => void;
}

const EMPTY_FORM: CreateJobData = {
  title: "",
  company: "",
  location: "",
  category: "",
  description: "",
  type: "Full Time",
};

export default function AdminJobForm({ onCreated }: AdminJobFormProps) {
  const [form, setForm] = useState<CreateJobData>(EMPTY_FORM);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setSuccess(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      await createJob(form);
      setSuccess(true);
      setForm(EMPTY_FORM);
      onCreated?.();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to create job");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Input
          label="Job Title"
          name="title"
          placeholder="e.g. Senior Frontend Developer"
          value={form.title}
          onChange={handleChange}
          required
        />
        <Input
          label="Company Name"
          name="company"
          placeholder="e.g. Acme Corp"
          value={form.company}
          onChange={handleChange}
          required
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Location */}
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-neutral-700">
            Location
          </label>
          <select
            name="location"
            value={form.location}
            onChange={handleChange}
            required
            className="border border-neutral-300 rounded-lg px-4 py-2.5 text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand bg-white"
          >
            <option value="">Select Location</option>
            {LOCATIONS.map((loc) => (
              <option key={loc} value={loc}>
                {loc}
              </option>
            ))}
          </select>
        </div>

        {/* Category */}
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-neutral-700">
            Category
          </label>
          <select
            name="category"
            value={form.category}
            onChange={handleChange}
            required
            className="border border-neutral-300 rounded-lg px-4 py-2.5 text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand bg-white"
          >
            <option value="">Select Category</option>
            {JOB_CATEGORIES.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Job Type */}
      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-medium text-neutral-700">Job Type</label>
        <select
          name="type"
          value={form.type}
          onChange={handleChange}
          className="border border-neutral-300 rounded-lg px-4 py-2.5 text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand bg-white"
        >
          {JOB_TYPES.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      {/* Description */}
      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-medium text-neutral-700">
          Job Description
        </label>
        <textarea
          name="description"
          rows={6}
          placeholder="Describe the role, responsibilities, and requirements..."
          value={form.description}
          onChange={handleChange}
          required
          className="w-full border border-neutral-300 rounded-lg px-4 py-2.5 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand resize-none"
        />
      </div>

      {error && <p className="text-sm text-red-500">{error}</p>}
      {success && (
        <p className="text-sm text-emerald-600 font-medium">
          ✓ Job posted successfully!
        </p>
      )}

      <Button type="submit" loading={loading} size="lg">
        Post Job
      </Button>
    </form>
  );
}
