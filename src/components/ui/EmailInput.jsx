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
        <p className="text-primary font-headline font-bold uppercase tracking-widest text-sm">
          You're on the list
        </p>
        <p className="text-on-surface-variant text-sm mt-2">
          We'll be in touch when alpha access opens.
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col md:flex-row gap-0 max-w-2xl mx-auto border border-outline/20"
    >
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="ENTER ACCESS CODE OR EMAIL"
        className="bg-transparent border-none text-white font-label tracking-[0.15em] p-6 flex-grow focus:ring-1 focus:ring-primary placeholder:text-white/20 text-sm"
        required
      />
      <button
        type="submit"
        className="bg-primary text-on-primary px-10 py-6 font-headline font-bold uppercase tracking-widest hover:bg-white transition-colors cursor-pointer"
      >
        REQUEST ACCESS
      </button>
    </form>
  )
}
