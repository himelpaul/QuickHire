"use client";

import { useState } from "react";
import { createApplication, CreateApplicationData } from "@/lib/api";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

interface ApplyFormProps {
  jobId: string;
  jobTitle: string;
  onSuccess?: () => void;
}

export default function ApplyForm({
  jobId,
  jobTitle,
  onSuccess,
}: ApplyFormProps) {
  const [form, setForm] = useState<Omit<CreateApplicationData, "jobId">>({
    name: "",
    email: "",
    resumeLink: "",
    coverNote: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      await createApplication({ ...form, jobId });
      setSuccess(true);
      onSuccess?.();
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to submit application",
      );
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-8 text-center">
        <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg
            className="w-7 h-7 text-emerald-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="text-lg font-bold text-emerald-800">
          Application Submitted!
        </h3>
        <p className="text-emerald-600 text-sm mt-1">
          We&apos;ve received your application for <strong>{jobTitle}</strong>.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border border-neutral-200 p-8">
      <h2 className="text-xl font-bold text-neutral-900 mb-6">
        Apply for {jobTitle}
      </h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <Input
          label="Full Name"
          name="name"
          placeholder="John Doe"
          value={form.name}
          onChange={handleChange}
          required
        />
        <Input
          label="Email Address"
          name="email"
          type="email"
          placeholder="john@example.com"
          value={form.email}
          onChange={handleChange}
          required
        />
        <Input
          label="Resume Link"
          name="resumeLink"
          type="url"
          placeholder="https://drive.google.com/..."
          value={form.resumeLink}
          onChange={handleChange}
          required
        />
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-neutral-700">
            Cover Note (optional)
          </label>
          <textarea
            name="coverNote"
            rows={4}
            placeholder="Tell us why you're a great fit..."
            value={form.coverNote}
            onChange={handleChange}
            className="w-full border border-neutral-300 rounded-lg px-4 py-2.5 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand resize-none"
          />
        </div>

        {error && <p className="text-sm text-red-500">{error}</p>}

        <Button
          type="submit"
          loading={loading}
          size="lg"
          className="w-full mt-2"
        >
          Submit Application
        </Button>
      </form>
    </div>
  );
}
