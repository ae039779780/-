export default function Footer() {
  return (
    <footer className="w-full px-8 flex flex-col md:flex-row justify-between items-center py-12 border-t border-[#717582]/10 bg-[#000000]">
      <div className="text-white font-black tracking-widest font-headline">
        DAY//AFTR LABS
      </div>
      <div className="flex flex-wrap justify-center gap-8 my-6 md:my-0">
        <a className="text-[10px] font-label uppercase tracking-[0.2em] text-white/40 hover:text-white transition-colors" href="#">
          Privacy Policy
        </a>
        <a className="text-[10px] font-label uppercase tracking-[0.2em] text-white/40 hover:text-white transition-colors" href="#">
          Terms of Service
        </a>
        <a className="text-[10px] font-label uppercase tracking-[0.2em] text-white/40 hover:text-white transition-colors" href="#">
          Clinical Standards
        </a>
        <a className="text-[10px] font-label uppercase tracking-[0.2em] text-white/40 hover:text-white transition-colors" href="#">
          Contact
        </a>
      </div>
      <div className="text-[10px] font-label uppercase tracking-[0.2em] text-white/40">
        &copy; {new Date().getFullYear()} DAY//AFTR LABORATORIES. ALL RIGHTS RESERVED.
      </div>
    </footer>
  )
}
