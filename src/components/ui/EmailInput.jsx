import { useState } from 'react'

export default function EmailInput({ onSubmit }) {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email || !email.includes('@')) return
    setSubmitted(true)
    onSubmit?.(email)
  }

  if (submitted) {
    return (
      <div className="text-center animate-fade-in-up">
        <p className="text-accent-cyan font-semibold uppercase tracking-wide text-sm">
          You're on the list
        </p>
        <p className="text-accent-silver/60 text-sm mt-2">
          We'll be in touch when early access opens.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        className="flex-1 bg-brand-surface border border-white/10 rounded px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-accent-blue/50 transition-colors text-sm"
        required
      />
      <button
        type="submit"
        className="bg-accent-blue text-white font-display font-semibold uppercase tracking-wide text-sm px-6 py-3 rounded hover:bg-accent-blue/90 transition-all shadow-lg shadow-accent-blue/20 cursor-pointer"
      >
        Join Waitlist
      </button>
    </form>
  )
}
