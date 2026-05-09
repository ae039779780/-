import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="w-full px-8 py-16 border-t border-[#717582]/10 bg-[#000000]">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="text-white font-black tracking-widest font-headline mb-4">
              DAY//AFTR LABS
            </div>
            <p className="text-white/30 text-xs leading-relaxed">
              AI-powered workspace platform for demanding teams. Recovery system for demanding lives.
            </p>
          </div>
          <div>
            <h4 className="font-label text-[10px] tracking-[0.2em] uppercase text-white/60 mb-4">Platform</h4>
            <div className="space-y-2">
              <Link to="/platform" className="block text-[10px] font-label uppercase tracking-[0.2em] text-white/40 hover:text-white transition-colors">
                Overview
              </Link>
              <Link to="/platform/agents" className="block text-[10px] font-label uppercase tracking-[0.2em] text-white/40 hover:text-white transition-colors">
                Agents
              </Link>
              <Link to="/platform/claw" className="block text-[10px] font-label uppercase tracking-[0.2em] text-white/40 hover:text-white transition-colors">
                Claw
              </Link>
              <Link to="/platform/pricing" className="block text-[10px] font-label uppercase tracking-[0.2em] text-white/40 hover:text-white transition-colors">
                Pricing
              </Link>
              <Link to="/platform/enterprise" className="block text-[10px] font-label uppercase tracking-[0.2em] text-white/40 hover:text-white transition-colors">
                Enterprise
              </Link>
            </div>
          </div>
          <div>
            <h4 className="font-label text-[10px] tracking-[0.2em] uppercase text-white/60 mb-4">Products</h4>
            <div className="space-y-2">
              <Link to="/store" className="block text-[10px] font-label uppercase tracking-[0.2em] text-white/40 hover:text-white transition-colors">
                Store
              </Link>
              <Link to="/dashboard" className="block text-[10px] font-label uppercase tracking-[0.2em] text-white/40 hover:text-white transition-colors">
                Dashboard
              </Link>
              <a href="/#products" className="block text-[10px] font-label uppercase tracking-[0.2em] text-white/40 hover:text-white transition-colors">
                Ecosystem
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-label text-[10px] tracking-[0.2em] uppercase text-white/60 mb-4">Legal</h4>
            <div className="space-y-2">
              <a className="block text-[10px] font-label uppercase tracking-[0.2em] text-white/40 hover:text-white transition-colors" href="#">
                Privacy Policy
              </a>
              <a className="block text-[10px] font-label uppercase tracking-[0.2em] text-white/40 hover:text-white transition-colors" href="#">
                Terms of Service
              </a>
              <a className="block text-[10px] font-label uppercase tracking-[0.2em] text-white/40 hover:text-white transition-colors" href="#">
                Clinical Standards
              </a>
              <a className="block text-[10px] font-label uppercase tracking-[0.2em] text-white/40 hover:text-white transition-colors" href="#">
                Contact
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-[#717582]/10 pt-8 text-center">
          <div className="text-[10px] font-label uppercase tracking-[0.2em] text-white/40">
            &copy; {new Date().getFullYear()} DAY//AFTR LABORATORIES. ALL RIGHTS RESERVED.
          </div>
        </div>
      </div>
    </footer>
  )
}
