import Link from "next/link";

const footerLinks = {
  About: ["Companies", "Pricing", "Terms", "Advice", "Privacy Policy"],
  Resources: ["Help Docs", "Guide", "Updates", "Contact Us"],
};

export default function Footer() {
  return (
    <footer className="bg-[#202430] text-white">
      <div className="max-w-[1200px] mx-auto px-6 pt-16 pb-8">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <svg
                width="28"
                height="28"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="32" height="32" rx="8" fill="#4640DE" />
                <circle
                  cx="16"
                  cy="16"
                  r="10"
                  fill="none"
                  stroke="white"
                  strokeWidth="1.5"
                />
                <path
                  d="M12 16C12 13.79 13.79 12 16 12C18.21 12 20 13.79 20 16C20 17.48 19.22 18.77 18.06 19.5L19.5 21H17.5L16.5 19.9C16.34 19.96 16.17 20 16 20C13.79 20 12 18.21 12 16Z"
                  fill="white"
                />
                <path
                  d="M18.5 19.8L20.2 21.5"
                  stroke="white"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
              <span className="text-[20px] font-bold">QuickHire</span>
            </Link>
            <p className="text-[14px] text-white/60 leading-[1.7] max-w-[220px]">
              Great platform for the job seeker that passionate about startups.
              Find your dream job easier.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="text-[16px] font-semibold text-white mb-5">
                {section}
              </h4>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      href="/"
                      className="text-[14px] text-white/60 hover:text-white transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div>
            <h4 className="text-[16px] font-semibold text-white mb-2">
              Get job notifications
            </h4>
            <p className="text-[13px] text-white/60 mb-5 leading-[1.6]">
              The latest job news, articles, sent to your inbox weekly.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Email Address"
                className="flex-1 min-w-0 bg-white/10 border border-white/20 rounded px-3 py-2 text-[13px] text-white placeholder:text-white/40 outline-none focus:border-brand transition-colors"
              />
              <button className="bg-brand hover:bg-brand/90 text-white text-[13px] font-semibold px-4 py-2 rounded flex-shrink-0 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[13px] text-white/40">
            2021 © QuickHire. All rights reserved.
          </p>

          {/* Social icons */}
          <div className="flex items-center gap-4">
            {/* Facebook */}
            <a
              href="#"
              aria-label="Facebook"
              className="text-white/40 hover:text-white transition-colors"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            {/* Instagram */}
            <a
              href="#"
              aria-label="Instagram"
              className="text-white/40 hover:text-white transition-colors"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            {/* Dribbble */}
            <a
              href="#"
              aria-label="Dribbble"
              className="text-white/40 hover:text-white transition-colors"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32" />
              </svg>
            </a>
            {/* LinkedIn */}
            <a
              href="#"
              aria-label="LinkedIn"
              className="text-white/40 hover:text-white transition-colors"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            {/* Twitter */}
            <a
              href="#"
              aria-label="Twitter"
              className="text-white/40 hover:text-white transition-colors"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
