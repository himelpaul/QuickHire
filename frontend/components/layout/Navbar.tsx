"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-page-bg">
      <div className="max-w-[1200px] mx-auto px-6 h-[80px] flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 flex-shrink-0">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="16" cy="16" r="15" stroke="#4640DE" strokeWidth="2" />
            <circle cx="16" cy="16" r="9" fill="#4640DE" fillOpacity="0.15" />
            <path
              d="M12 16C12 13.79 13.79 12 16 12C18.21 12 20 13.79 20 16C20 17.48 19.22 18.77 18.06 19.5L19.5 21H17.5L16.5 19.9C16.34 19.97 16.17 20 16 20C13.79 20 12 18.21 12 16Z"
              fill="#4640DE"
            />
            <path
              d="M18.5 19.8L20.2 21.5"
              stroke="#4640DE"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          <span className="text-[22px] font-bold text-neutral-900 tracking-tight">
            QuickHire
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8 ml-10">
          <Link
            href="/jobs"
            className="text-[15px] font-medium text-neutral-700 hover:text-brand transition-colors"
          >
            Find Jobs
          </Link>
          <Link
            href="/"
            className="text-[15px] font-medium text-neutral-700 hover:text-brand transition-colors"
          >
            Browse Companies
          </Link>
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/login"
            className="text-[15px] font-semibold text-brand hover:text-brand/80 transition-colors px-3 py-2"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="text-[15px] font-semibold text-white bg-brand hover:bg-brand/90 transition-colors px-5 py-[10px] rounded"
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-neutral-700"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-neutral-200 px-6 py-4 flex flex-col gap-4">
          <Link
            href="/jobs"
            className="text-[15px] font-medium text-neutral-700 hover:text-brand"
          >
            Find Jobs
          </Link>
          <Link
            href="/"
            className="text-[15px] font-medium text-neutral-700 hover:text-brand"
          >
            Browse Companies
          </Link>
          <div className="flex gap-3 pt-2">
            <Link
              href="/login"
              className="flex-1 text-center text-[15px] font-semibold text-brand border border-brand rounded py-2"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="flex-1 text-center text-[15px] font-semibold text-white bg-brand rounded py-2"
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
