interface PlanetProps {
  className?: string;
  size?: number;
  color?: string;
  ring?: boolean;
  glow?: string;
}

export function Planet({
  className = "",
  size = 120,
  color = "var(--gradient-nebula)",
  ring = false,
  glow = "var(--space-violet)",
}: PlanetProps) {
  return (
    <div className={`pointer-events-none absolute ${className}`} style={{ width: size, height: size }}>
      <div
        className="relative h-full w-full rounded-full"
        style={{
          background: color,
          boxShadow: `inset -${size / 6}px -${size / 8}px ${size / 3}px rgba(0,0,0,0.45), 0 0 ${size / 1.4}px -${size / 6}px ${glow}`,
        }}
      >
        {ring && (
          <span
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-yellow-400/50 bg-yellow-400/50"
            style={{
              width: size * 1.7,
              height: size * 0.1,
              transform: "translate(-50%, -50%) rotate(-22deg)",
              boxShadow: "0 0 30px -5px var(--space-gold)",
            }}
          />
        )}
      </div>
    </div>
  );
}
