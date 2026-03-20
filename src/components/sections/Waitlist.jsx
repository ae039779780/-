import SectionHeading from '../ui/SectionHeading'
import EmailInput from '../ui/EmailInput'
import GlowEffect from '../ui/GlowEffect'

export default function Waitlist() {
  return (
    <section id="waitlist" className="py-32 px-6 relative overflow-hidden">
      <GlowEffect position="center" intensity="low" />
      <div className="relative z-10 max-w-2xl mx-auto">
        <SectionHeading
          label="Early Access"
          heading="Own the Morning After"
          subtext="Be the first to experience DAY//AFTR. Join the waitlist for priority access to our launch drop."
        />
        <EmailInput onSubmit={(email) => console.log('Waitlist signup:', email)} />
        <p className="text-center text-white/20 text-xs mt-6">
          No spam. Unsubscribe anytime. We respect your inbox.
        </p>
      </div>
    </section>
  )
}
