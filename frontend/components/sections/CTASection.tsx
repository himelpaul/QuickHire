import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div
          className="bg-brand overflow-hidden flex flex-col lg:flex-row min-h-[280px]"
          style={{
            clipPath:
              "polygon(80px 0%, 100% 0%, 100% calc(100% - 80px), calc(100% - 80px) 100%, 0% 100%, 0% 80px)",
          }}
        >
          {/* Left */}
          <div className="flex-1 p-10 lg:p-14 flex flex-col justify-center">
            <h2 className="text-[40px] lg:text-[48px] font-bold text-white leading-[1.2] mb-4">
              Start posting
              <br />
              jobs today
            </h2>
            <p className="text-[17px] text-white/70 mb-8">
              Start posting jobs for only $10.
            </p>
            <div>
              <Link
                href="/signup"
                className="inline-block border-2 border-white text-white text-[16px] font-semibold px-8 py-4 hover:bg-white hover:text-brand transition-colors"
              >
                Sign Up For Free
              </Link>
            </div>
          </div>

          {/* Right — Dashboard mockup */}
          <div className="flex-1 relative hidden lg:flex items-end justify-end min-h-[280px] pt-6 pr-10">
            {/* Full dashboard card */}
            <div className="w-full max-w-[480px] bg-white shadow-2xl translate-y-8 flex overflow-hidden">
              {/* ── Sidebar ── */}
              <div className="w-[110px] bg-white border-r border-neutral-100 flex flex-col py-4 px-3 shrink-0">
                {/* Logo */}
                <div className="flex items-center gap-1.5 mb-5 px-1">
                  <div className="w-5 h-5 rounded-full bg-brand flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-white" />
                  </div>
                  <span className="text-[10px] font-bold text-neutral-800">
                    QuickHire
                  </span>
                </div>

                {/* Nav items */}
                <div className="flex flex-col gap-0.5">
                  {[
                    { label: "Dashboard", active: true },
                    { label: "Messages", badge: "1" },
                    { label: "Company", active: false },
                    { label: "Applicants", active: false },
                    { label: "Job Listing", active: false },
                    { label: "Schedule", active: false },
                  ].map(({ label, active, badge }) => (
                    <div
                      key={label}
                      className={`flex items-center justify-between px-2 py-1.5 rounded-md ${active ? "bg-brand/10" : ""}`}
                    >
                      <span
                        className={`text-[9px] font-medium ${active ? "text-brand" : "text-neutral-400"}`}
                      >
                        {label}
                      </span>
                      {badge && (
                        <span className="text-[8px] bg-brand text-white rounded-full w-3.5 h-3.5 flex items-center justify-center font-bold">
                          {badge}
                        </span>
                      )}
                    </div>
                  ))}
                </div>

                {/* Settings */}
                <div className="mt-auto flex flex-col gap-0.5 pt-3 border-t border-neutral-100">
                  {["Settings", "Help Center"].map((label) => (
                    <div key={label} className="px-2 py-1.5">
                      <span className="text-[9px] text-neutral-400">
                        {label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* ── Main Content ── */}
              <div className="flex-1 flex flex-col p-4 min-w-0">
                {/* Header */}
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <p className="text-[11px] font-bold text-neutral-800">
                      Good morning, Maria
                    </p>
                    <p className="text-[8px] text-neutral-400">
                      Job listings report · Jul 19 – 25
                    </p>
                  </div>
                  <div className="bg-brand text-white text-[8px] font-semibold px-2 py-1 rounded-md">
                    + Post a job
                  </div>
                </div>

                {/* 3 stat cards */}
                <div className="grid grid-cols-3 gap-2 mb-3">
                  <div className="bg-brand rounded-lg p-2">
                    <p className="text-white text-[14px] font-bold leading-tight">
                      76
                    </p>
                    <p className="text-white/70 text-[8px] leading-tight">
                      New candidates
                    </p>
                  </div>
                  <div className="bg-[#56CDAD] rounded-lg p-2">
                    <p className="text-white text-[14px] font-bold leading-tight">
                      3
                    </p>
                    <p className="text-white/70 text-[8px] leading-tight">
                      Schedule today
                    </p>
                  </div>
                  <div className="bg-[#26A4FF] rounded-lg p-2">
                    <p className="text-white text-[14px] font-bold leading-tight">
                      24
                    </p>
                    <p className="text-white/70 text-[8px] leading-tight">
                      Messages
                    </p>
                  </div>
                </div>

                {/* Bottom row: chart + right panels */}
                <div className="flex gap-2 flex-1">
                  {/* Job statistics */}
                  <div className="flex-1 bg-neutral-50 rounded-lg p-3 min-w-0">
                    <p className="text-[9px] font-semibold text-neutral-700 mb-1">
                      Job statistics
                    </p>
                    <div className="flex gap-2 text-[8px] text-neutral-400 mb-2 border-b border-neutral-200 pb-1">
                      <span className="text-brand font-semibold border-b-2 border-brand pb-0.5">
                        Overview
                      </span>
                      <span>Jobs View</span>
                      <span>Applied</span>
                    </div>
                    {/* Bar chart */}
                    <div className="flex items-end gap-[3px] h-10">
                      {[
                        [70, 40],
                        [50, 80],
                        [90, 55],
                        [60, 70],
                        [40, 50],
                        [65, 35],
                        [80, 60],
                      ].map(([a, b], i) => (
                        <div
                          key={i}
                          className="flex-1 flex flex-col gap-[2px] items-center justify-end h-full"
                        >
                          <div
                            className="w-full"
                            style={{
                              height: `${a}%`,
                              backgroundColor: "#FFB836",
                              borderRadius: "2px 2px 0 0",
                            }}
                          />
                          <div
                            className="w-full"
                            style={{
                              height: `${b}%`,
                              backgroundColor: "rgba(70,64,222,0.6)",
                              borderRadius: "2px 2px 0 0",
                            }}
                          />
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center gap-2 mt-1.5">
                      <span className="flex items-center gap-1 text-[7px] text-neutral-400">
                        <span className="w-2 h-1.5 rounded-sm bg-[#FFB836] inline-block" />
                        Job View
                      </span>
                      <span className="flex items-center gap-1 text-[7px] text-neutral-400">
                        <span className="w-2 h-1.5 rounded-sm bg-brand/60 inline-block" />
                        Applied
                      </span>
                    </div>
                  </div>

                  {/* Right mini panels */}
                  <div className="flex flex-col gap-2 w-[90px]">
                    <div className="bg-neutral-50 rounded-lg p-2">
                      <p className="text-[8px] text-neutral-400 mb-0.5">
                        Job Open
                      </p>
                      <p className="text-[18px] font-bold text-neutral-800 leading-tight">
                        12
                      </p>
                      <p className="text-[7px] text-neutral-400">Jobs Opened</p>
                    </div>
                    <div className="bg-neutral-50 rounded-lg p-2 flex-1">
                      <p className="text-[8px] font-semibold text-neutral-700 mb-1.5">
                        Applicants
                      </p>
                      <div className="h-1.5 rounded-full overflow-hidden flex mb-1.5">
                        <div className="bg-brand" style={{ width: "35%" }} />
                        <div
                          className="bg-[#FFB836]"
                          style={{ width: "20%" }}
                        />
                        <div
                          className="bg-[#56CDAD]"
                          style={{ width: "15%" }}
                        />
                        <div
                          className="bg-[#FF6550]"
                          style={{ width: "15%" }}
                        />
                        <div
                          className="bg-[#26A4FF]"
                          style={{ width: "15%" }}
                        />
                      </div>
                      {[
                        ["Full Time", "45"],
                        ["Part-Time", "24"],
                        ["Remote", "22"],
                      ].map(([k, v]) => (
                        <div key={k} className="flex justify-between">
                          <span className="text-[7px] text-neutral-400">
                            {k}
                          </span>
                          <span className="text-[7px] font-semibold text-neutral-600">
                            {v}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
