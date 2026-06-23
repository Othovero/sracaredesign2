type Props = { className?: string };

/** Icon-only SRACA mark (gold celebrating figures + star). */
export function SracaMark({ className }: Props) {
  return (
    <img
      src="/sraca-mark.svg"
      alt=""
      aria-hidden="true"
      className={`inline-block ${className ?? ""}`}
    />
  );
}

/**
 * Full lockup (mark + wordmark).
 * variant "dark" → deep-purple wordmark for light surfaces (nav).
 * variant "white" → white wordmark for dark surfaces (footer).
 */
export function SracaLockup({
  className,
  variant = "dark",
}: {
  className?: string;
  variant?: "dark" | "white";
}) {
  return (
    <img
      src={variant === "white" ? "/sraca-logo-white.svg" : "/sraca-logo-dark.svg"}
      alt="Stockport Race & Culture Awards"
      className={className}
    />
  );
}
