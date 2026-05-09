export default function ClawHowItWorks() {
  const steps = [
    {
      num: '01',
      title: 'Describe Your Task',
      description: 'Tell Claw what you need in plain language. "Analyze our top 5 competitors and generate a positioning report."',
      icon: 'edit_note',
    },
    {
      num: '02',
      title: 'Claw Plans the Workflow',
      description: 'Claw breaks the task into steps, selects the right agents, and creates an execution plan for your approval.',
      icon: 'account_tree',
    },
    {
      num: '03',
      title: 'Autonomous Execution',
      description: 'Agents execute each step in sequence. Progress is tracked in real time. Results are compiled and delivered.',
      icon: 'auto_mode',
    },
  ]

  return (
    <section className="py-32">
      <div className="container mx-auto px-8">
        <div className="text-center mb-16">
          <p className="font-label text-primary text-xs tracking-[0.2em] uppercase mb-4">
            HOW IT WORKS
          </p>
          <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight">
            Three Steps to Autonomous Work
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div key={step.num} className="relative space-y-4">
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-full w-full h-px bg-outline/10 -translate-x-1/2 z-0" />
              )}
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 bg-primary/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary text-xl">{step.icon}</span>
                </div>
                <span className="font-headline text-3xl font-bold text-white/10">{step.num}</span>
              </div>
              <h3 className="font-headline text-xl font-bold">{step.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
