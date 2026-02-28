const companies = [
  {
    name: "Vodafone",
    logo: (
      <svg
        viewBox="0 0 120 40"
        className="h-11 w-auto"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="20"
          cy="20"
          r="14"
          stroke="#999"
          strokeWidth="2.5"
          fill="none"
        />
        <circle cx="20" cy="20" r="8" fill="#E60000" opacity="0.15" />
        <text
          x="40"
          y="26"
          fontFamily="Inter,sans-serif"
          fontWeight="600"
          fontSize="16"
          fill="#7C8493"
        >
          vodafone
        </text>
      </svg>
    ),
  },
  {
    name: "Intel",
    logo: (
      <svg
        viewBox="0 0 80 40"
        className="h-11 w-auto"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <text
          x="4"
          y="29"
          fontFamily="Inter,sans-serif"
          fontWeight="700"
          fontSize="22"
          fill="#7C8493"
          letterSpacing="-1"
        >
          intel
        </text>
        <circle cx="71" cy="8" r="4" fill="#0071C5" opacity="0.5" />
      </svg>
    ),
  },
  {
    name: "Tesla",
    logo: (
      <svg
        viewBox="0 0 100 40"
        className="h-11 w-auto"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <text
          x="0"
          y="27"
          fontFamily="Inter,sans-serif"
          fontWeight="700"
          fontSize="20"
          fill="#7C8493"
          letterSpacing="4"
        >
          TESLA
        </text>
      </svg>
    ),
  },
  {
    name: "AMD",
    logo: (
      <svg
        viewBox="0 0 80 40"
        className="h-11 w-auto"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <text
          x="0"
          y="28"
          fontFamily="Inter,sans-serif"
          fontWeight="800"
          fontSize="22"
          fill="#7C8493"
          letterSpacing="1"
        >
          AMD
        </text>
        <path
          d="M64 10 L74 10 L74 20"
          stroke="#7C8493"
          strokeWidth="2.5"
          fill="none"
        />
      </svg>
    ),
  },
  {
    name: "Talkit",
    logo: (
      <svg
        viewBox="0 0 90 40"
        className="h-11 w-auto"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="10" cy="20" r="8" fill="#7C8493" opacity="0.2" />
        <circle cx="10" cy="20" r="4" fill="#7C8493" opacity="0.5" />
        <text
          x="24"
          y="26"
          fontFamily="Inter,sans-serif"
          fontWeight="600"
          fontSize="16"
          fill="#7C8493"
        >
          Talkit
        </text>
      </svg>
    ),
  },
];

export default function CompanyLogos() {
  return (
    <section className="bg-white py-10">
      <div className="max-w-[1200px] mx-auto px-6">
        <p className="text-[15px] text-neutral-500 font-medium mb-10 text-left">
          Companies we helped grow
        </p>
        <div className="flex flex-wrap items-center justify-between gap-8">
          {companies.map((company) => (
            <div
              key={company.name}
              className="flex items-center opacity-75 hover:opacity-100 transition-opacity cursor-pointer"
            >
              {company.logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
