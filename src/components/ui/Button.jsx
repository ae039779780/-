const variants = {
  primary:
    'bg-primary text-on-primary hover:shadow-[0_0_20px_rgba(129,236,255,0.4)] active:scale-95',
  secondary:
    'border border-outline/30 text-white hover:bg-white/5',
  ghost: 'text-on-surface-variant hover:text-white',
}

const sizes = {
  sm: 'px-4 py-2 text-xs',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-sm',
}

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...props
}) {
  return (
    <button
      className={`font-label font-bold uppercase tracking-widest transition-all cursor-pointer ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
