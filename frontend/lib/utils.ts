/**
 * Lightweight class-name joiner (no external dependency).
 * Filters out falsy values and joins with a space.
 */
export function cn(
  ...inputs: (string | undefined | null | false | 0)[]
): string {
  return inputs.filter(Boolean).join(" ");
}
