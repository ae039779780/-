const positions = {
  center: 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
  'top-right': 'top-0 right-0 translate-x-1/4 -translate-y-1/4',
  'bottom-left': 'bottom-0 left-0 -translate-x-1/4 translate-y-1/4',
}

const intensities = {
  low: 'opacity-20',
  medium: 'opacity-35',
  high: 'opacity-50',
}

export default function GlowEffect({
  position = 'center',
  intensity = 'low',
  className = '',
}) {
  return (
    <div
      className={`absolute ${positions[position]} ${intensities[intensity]} w-[600px] h-[600px] rounded-full bg-accent-blue/40 blur-[120px] pointer-events-none animate-glow-pulse will-change-[opacity] ${className}`}
      aria-hidden="true"
    />
  )
}
