export default function SectionHeading({ label, heading, subtext, align = 'center', showDivider = false }) {
  const isLeft = align === 'left'

  return (
    <div className={`${isLeft ? 'text-left' : 'text-center'} mb-16`}>
      {label && (
        <p className="font-label text-primary text-xs tracking-[0.2em] uppercase mb-4">
          {label}
        </p>
      )}
      <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight text-white">
        {heading}
      </h2>
      {showDivider && (
        <div className={`w-24 h-px bg-primary mt-4 ${isLeft ? '' : 'mx-auto'}`} />
      )}
      {subtext && (
        <p className="mt-4 text-on-surface-variant max-w-2xl text-lg leading-relaxed"
           style={isLeft ? undefined : { marginLeft: 'auto', marginRight: 'auto' }}>
          {subtext}
        </p>
      )}
    </div>
  )
}
