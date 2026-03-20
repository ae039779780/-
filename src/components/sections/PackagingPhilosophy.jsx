import SectionHeading from '../ui/SectionHeading'

export default function PackagingPhilosophy() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          label="The Experience"
          heading="Packaging as Product"
          subtext="Every surface, material, and detail is designed to make the unboxing feel like part of the recovery ritual."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {[
            {
              title: 'Matte Black Surfaces',
              text: 'Soft-touch matte finishes across pouches, boxes, and bottles. Premium at first contact.',
            },
            {
              title: 'Cold Blue Accents',
              text: 'Electric blue foil details and cyan glow elements create visual identity without clutter.',
            },
            {
              title: 'Clinical Typography',
              text: 'Sharp geometric sans-serif with generous tracking. Clean hierarchy from brand to descriptor.',
            },
            {
              title: 'Gift-First Design',
              text: 'Magnetic closures, rigid drawer boxes, and numbered praline cavities. Made to give.',
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-brand-card border border-white/5 rounded-lg p-6"
            >
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
