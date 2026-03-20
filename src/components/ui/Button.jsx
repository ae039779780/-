const variants = {
  primary:
    'bg-accent-blue text-white hover:bg-accent-blue/90 shadow-lg shadow-accent-blue/20',
  secondary:
    'border border-accent-blue text-accent-blue hover:bg-accent-blue/10',
  ghost: 'text-accent-silver hover:text-white',
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
      className={`font-display font-semibold uppercase tracking-wide rounded transition-all duration-200 cursor-pointer ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
