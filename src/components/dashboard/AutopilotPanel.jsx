import { useState } from 'react'

const autopilotTasks = [
  {
    id: 1,
    title: 'Competitor price analysis — LMNT, AG1, Liquid IV across 8 markets',
    status: 'running',
    progress: 67,
    agent: 'Autopilot + Analytics Agent',
    started: '32 min ago',
    steps: [
      { text: 'Crawl competitor websites for pricing data', done: true },
      { text: 'Aggregate pricing by region and format', done: true },
      { text: 'Generate comparison matrix', done: false },
      { text: 'Draft pricing recommendation report', done: false },
    ],
  },
  {
    id: 2,
    title: 'Generate RITUAL tea box 3D mockup renders (4 angles)',
    status: 'running',
    progress: 45,
    agent: 'Autopilot + Design Agent',
    started: '5 hours ago',
    steps: [
      { text: 'Load packaging brief specifications', done: true },
      { text: 'Generate front-facing render', done: true },
      { text: 'Generate side and back renders', done: false },
      { text: 'Generate opened box lifestyle render', done: false },
    ],
  },
  {
    id: 3,
    title: 'Weekly Instagram content batch — 12 posts + captions + hashtags',
    status: 'completed',
    progress: 100,
    agent: 'Autopilot + Marketing Agent',
    started: '2 hours ago',
    steps: [
      { text: 'Pull content calendar for this week', done: true },
      { text: 'Generate 12 image prompts', done: true },
      { text: 'Write captions matching brand voice', done: true },
      { text: 'Compile hashtag sets per post', done: true },
    ],
  },
  {
    id: 4,
    title: 'Supplier follow-up sequence — 3 tea manufacturers',
    status: 'completed',
    progress: 100,
    agent: 'Autopilot + Supplier Agent',
    started: '4 hours ago',
    steps: [
      { text: 'Draft personalized follow-up emails', done: true },
      { text: 'Attach updated specification sheets', done: true },
      { text: 'Queue for sending at 9 AM local time', done: true },
    ],
  },
  {
    id: 5,
    title: 'SEO keyword research for landing page optimization',
    status: 'queued',
    progress: 0,
    agent: 'Autopilot + Super Agent',
    started: 'Queued',
    steps: [
      { text: 'Identify top 50 recovery/wellness keywords', done: false },
      { text: 'Analyze competitor keyword rankings', done: false },
      { text: 'Generate meta description recommendations', done: false },
    ],
  },
]

export default function AutopilotPanel() {
  const [showNewTask, setShowNewTask] = useState(false)
  const [newTask, setNewTask] = useState('')

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="font-headline text-4xl font-bold tracking-tight">Autopilot</h1>
          <p className="text-on-surface-variant text-sm mt-1">
            Autonomous multi-step workflows running in the background
          </p>
        </div>
        <button
          onClick={() => setShowNewTask(!showNewTask)}
          className="bg-primary text-on-primary px-5 py-3 font-label text-[10px] font-bold tracking-widest uppercase hover:shadow-[0_0_20px_rgba(129,236,255,0.4)] transition-all cursor-pointer flex items-center gap-2"
        >
          <span className="material-symbols-outlined text-sm">add</span>
          New Task
        </button>
      </div>

      {showNewTask && (
        <div className="bg-surface-container-lowest border border-outline/10 p-6 space-y-4">
          <div className="flex gap-3">
            <input
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              placeholder="DESCRIBE THE TASK FOR AUTOPILOT..."
              className="flex-1 bg-surface-container border border-outline/20 px-4 py-4 text-white placeholder:text-white/20 font-label text-sm tracking-widest focus:ring-1 focus:ring-primary focus:outline-none"
            />
            <button className="bg-primary text-on-primary px-8 py-4 font-label font-bold text-[10px] tracking-widest uppercase cursor-pointer whitespace-nowrap">
              Launch
            </button>
          </div>
          <div className="flex gap-4">
            <span className="font-label text-[9px] text-white/30 tracking-widest uppercase">Suggested:</span>
            {['Research competitors', 'Generate content batch', 'Audit brand consistency'].map((s) => (
              <button
                key={s}
                onClick={() => setNewTask(s)}
                className="font-label text-[10px] text-primary/60 hover:text-primary tracking-wide cursor-pointer"
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Status Summary */}
      <div className="grid grid-cols-3 gap-1">
        <div className="bg-surface-container-low border border-primary/15 p-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="material-symbols-outlined text-primary text-sm">sync</span>
            <span className="font-label text-[10px] tracking-widest text-primary uppercase">Running</span>
          </div>
          <p className="font-headline text-3xl font-bold">
            {autopilotTasks.filter((t) => t.status === 'running').length}
          </p>
        </div>
        <div className="bg-surface-container-low border border-outline/10 p-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="material-symbols-outlined text-tertiary-dim text-sm">check_circle</span>
            <span className="font-label text-[10px] tracking-widest text-white/40 uppercase">Completed</span>
          </div>
          <p className="font-headline text-3xl font-bold">
            {autopilotTasks.filter((t) => t.status === 'completed').length}
          </p>
        </div>
        <div className="bg-surface-container-low border border-outline/10 p-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="material-symbols-outlined text-white/30 text-sm">schedule</span>
            <span className="font-label text-[10px] tracking-widest text-white/40 uppercase">Queued</span>
          </div>
          <p className="font-headline text-3xl font-bold">
            {autopilotTasks.filter((t) => t.status === 'queued').length}
          </p>
        </div>
      </div>

      {/* Task List */}
      <div className="space-y-1">
        {autopilotTasks.map((task) => (
          <div
            key={task.id}
            className={`bg-surface-container-low border p-6 space-y-4 ${
              task.status === 'running' ? 'border-primary/15' : 'border-outline/10'
            }`}
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="font-headline text-sm font-bold">{task.title}</h3>
                <p className="font-label text-[10px] tracking-widest text-white/30 mt-1">
                  {task.agent} &middot; {task.started}
                </p>
              </div>
              <span className={`font-label text-[9px] tracking-widest uppercase px-3 py-1 border ${
                task.status === 'running' ? 'text-primary border-primary/20 bg-primary/5' :
                task.status === 'completed' ? 'text-tertiary-dim border-tertiary-dim/20' :
                'text-white/30 border-outline/20'
              }`}>
                {task.status}
              </span>
            </div>

            {/* Progress Bar */}
            <div className="space-y-1">
              <div className="flex justify-between">
                <span className="font-label text-[9px] text-white/30 tracking-widest uppercase">Progress</span>
                <span className="font-headline text-xs font-bold">{task.progress}%</span>
              </div>
              <div className="w-full h-1 bg-surface-container-highest">
                <div
                  className={`h-full transition-all ${
                    task.status === 'completed' ? 'bg-tertiary-dim' : 'bg-primary'
                  }`}
                  style={{ width: `${task.progress}%` }}
                />
              </div>
            </div>

            {/* Steps */}
            <div className="space-y-2">
              {task.steps.map((step, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className={`material-symbols-outlined text-sm ${
                    step.done ? 'text-primary' : 'text-white/15'
                  }`}>
                    {step.done ? 'check_circle' : 'radio_button_unchecked'}
                  </span>
                  <span className={`text-xs ${step.done ? 'text-white/60' : 'text-white/25'}`}>
                    {step.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
