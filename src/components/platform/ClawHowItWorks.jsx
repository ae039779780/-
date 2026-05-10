import SectionHeading from '../ui/SectionHeading'

export default function ClawHowItWorks() {
  const steps = [
    {
      num: 1,
      title: 'Describe Your Task',
      icon: 'edit_note',
      description:
        'Tell Claw what you need in plain language. Describe the goal, provide context, and let the AI figure out the rest.',
    },
    {
      num: 2,
      title: 'Claw Plans the Workflow',
      icon: 'account_tree',
      description:
        'Claw breaks your task into discrete steps, selects the best agents for each stage, and builds an execution plan.',
    },
    {
      num: 3,
      title: 'Autonomous Execution',
      icon: 'rocket_launch',
      description:
        'Agents execute each step in the background with full logging. Monitor progress in real time or check results later.',
    },
  ]

  return (
    <section className="py-24 bg-surface-container-lowest">
      <div className="container mx-auto px-8">
        <SectionHeading label="HOW IT WORKS" heading="From Task to Result" />
        <div className="grid md:grid-cols-3 gap-8 relative">
          {steps.map((step, i) => (
            <div key={step.num} className="text-center relative">
              {/* Connecting line between steps */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-5 left-[calc(50%+28px)] w-[calc(100%-56px)] h-px border-t border-dashed border-outline/20 z-0" />
              )}

              {/* Numbered badge */}
              <div className="w-10 h-10 bg-primary text-on-primary font-headline font-bold flex items-center justify-center mx-auto mb-4 relative z-10">
                {step.num}
              </div>

              {/* Icon */}
              <div className="flex justify-center mb-4">
                <span className="material-symbols-outlined text-primary text-3xl">
                  {step.icon}
                </span>
              </div>

              {/* Title & description */}
              <h3 className="font-headline text-lg font-bold mb-2">{step.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
