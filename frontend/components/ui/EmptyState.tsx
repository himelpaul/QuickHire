interface EmptyStateProps {
  title?: string;
  description?: string;
  icon?: React.ReactNode;
}

export default function EmptyState({
  title = "No results found",
  description = "Try adjusting your search or filters.",
  icon,
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center gap-4">
      {icon ? (
        icon
      ) : (
        <div className="w-16 h-16 rounded-full bg-neutral-100 flex items-center justify-center">
          <svg
            className="w-8 h-8 text-neutral-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"
            />
          </svg>
        </div>
      )}
      <div>
        <p className="font-semibold text-neutral-800 text-lg">{title}</p>
        <p className="text-neutral-500 text-sm mt-1">{description}</p>
      </div>
    </div>
  );
}
