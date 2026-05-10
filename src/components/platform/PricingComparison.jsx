import { featureComparison } from '../../lib/platformConstants'

function CellValue({ value }) {
  if (value === true) {
    return <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
  }
  if (value === false) {
    return <span className="text-white/20">—</span>
  }
  return <span className="text-white/70 text-sm">{value}</span>
}

export default function PricingComparison() {
  return (
    <div className="w-full border border-outline/10 overflow-hidden">
      {/* Header row */}
      <div className="grid grid-cols-4 bg-surface-container-low">
        <div className="p-4 font-label text-[10px] tracking-widest uppercase text-white/40">
          Feature
        </div>
        <div className="p-4 text-center font-label text-[10px] tracking-widest uppercase text-white/40">
          Free
        </div>
        <div className="p-4 text-center font-label text-[10px] tracking-widest uppercase text-primary">
          Plus
        </div>
        <div className="p-4 text-center font-label text-[10px] tracking-widest uppercase text-white/40">
          Pro
        </div>
      </div>

      {/* Data rows */}
      {featureComparison.map((row, i) => (
        <div
          key={row.feature}
          className={`grid grid-cols-4 border-t border-outline/5 ${
            i % 2 === 0 ? 'bg-surface-container-low' : 'bg-transparent'
          }`}
        >
          <div className="p-4 text-sm text-white/70">{row.feature}</div>
          <div className="p-4 flex items-center justify-center">
            <CellValue value={row.free} />
          </div>
          <div className="p-4 flex items-center justify-center">
            <CellValue value={row.plus} />
          </div>
          <div className="p-4 flex items-center justify-center">
            <CellValue value={row.pro} />
          </div>
        </div>
      ))}
    </div>
  )
}
