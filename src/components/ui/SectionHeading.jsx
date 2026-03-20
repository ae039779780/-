export default function SectionHeading({ label, heading, subtext }) {
  return (
    <div className="text-center mb-16">
      {label && (
        <p className="text-accent-cyan text-xs font-semibold uppercase tracking-micro mb-4">
          {label}
        </p>
      )}
      <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-wide text-white">
        {heading}
      </h2>
      {subtext && (
        <p className="mt-4 text-accent-silver/70 max-w-2xl mx-auto text-lg leading-relaxed">
          {subtext}
        </p>
      )}
    </div>
  )
}
