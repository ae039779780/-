const positions = {
  center: 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
  'top-right': 'top-0 right-0 translate-x-1/4 -translate-y-1/4',
  'bottom-left': 'bottom-0 left-0 -translate-x-1/4 translate-y-1/4',
}

const intensities = {
  low: 'opacity-20',
  medium: 'opacity-20',
  high: 'opacity-30',
}

export default function GlowEffect({
  position = 'center',
  intensity = 'low',
  className = '',
}) {
  return (
    <div
      className={`absolute ${positions[position]} ${intensities[intensity]} w-[400px] h-[400px] md:w-[600px] md:h-[600px] lg:w-[800px] lg:h-[800px] rounded-full bg-primary/20 blur-[120px] pointer-events-none ${className}`}
      aria-hidden="true"
    />
  )
}
