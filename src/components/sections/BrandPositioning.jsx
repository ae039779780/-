import SectionHeading from '../ui/SectionHeading'

export default function BrandPositioning() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          label="The Philosophy"
          heading="Built for Demanding Lives"
          subtext="DAY//AFTR exists for people who push hard and need a smarter way back to baseline. Not a quick fix — a system."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {[
            {
              title: 'Clinical Precision',
              text: 'Formulated with purpose. Every ingredient serves the system — no filler, no gimmicks, no overstuffed labels.',
            },
            {
              title: 'Luxury Experience',
              text: 'From packaging to ritual, every touchpoint is designed to feel premium. Recovery should never feel clinical.',
            },
            {
              title: 'Lifestyle Integration',
              text: 'Powder, tea, and confectionery work together as a cohesive recovery ecosystem for different moments.',
            },
          ].map((item) => (
            <div key={item.title} className="text-center md:text-left">
              <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-white mb-3">
                {item.title}
              </h3>
              <p className="text-accent-silver/50 text-sm leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
