import { featureComparison } from '../../lib/platformConstants'

function CellValue({ value }) {
  if (value === true) {
    return <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
  }
  if (value === false) {
    return <span className="text-white/20">—</span>
  }
  return <span className="text-white/60 text-sm">{value}</span>
}

export default function PricingComparison() {
  return (
    <div className="border border-outline/10 overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-outline/10 bg-surface-container">
            <th className="text-left p-4 font-label text-[10px] tracking-[0.2em] uppercase text-white/40 w-1/4">
              Feature
            </th>
            <th className="text-center p-4 font-label text-[10px] tracking-[0.2em] uppercase text-white/40 w-1/4">
              Free
            </th>
            <th className="text-center p-4 font-label text-[10px] tracking-[0.2em] uppercase text-primary w-1/4">
              Plus
            </th>
            <th className="text-center p-4 font-label text-[10px] tracking-[0.2em] uppercase text-white/40 w-1/4">
              Pro
            </th>
          </tr>
        </thead>
        <tbody>
          {featureComparison.map((row, i) => (
            <tr
              key={row.feature}
              className={`border-b border-outline/5 ${i % 2 === 0 ? '' : 'bg-surface-container-lowest'}`}
            >
              <td className="p-4 text-sm text-white/70 font-label">{row.feature}</td>
              <td className="p-4 text-center"><CellValue value={row.free} /></td>
              <td className="p-4 text-center bg-primary/[0.02]"><CellValue value={row.plus} /></td>
              <td className="p-4 text-center"><CellValue value={row.pro} /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
