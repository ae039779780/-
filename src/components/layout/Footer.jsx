export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="font-display text-sm font-bold tracking-micro uppercase text-white/40">
          DAY//AFTR
        </p>
        <p className="text-white/20 text-xs">
          &copy; {new Date().getFullYear()} DAY//AFTR. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
