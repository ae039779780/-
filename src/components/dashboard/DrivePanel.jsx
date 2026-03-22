import { useDashboard } from '../../lib/DashboardContext'

const typeIcons = {
  doc: 'description',
  slides: 'slideshow',
  sheet: 'grid_on',
  image: 'image',
}

const typeColors = {
  doc: 'text-primary',
  slides: 'text-tertiary-dim',
  sheet: 'text-[#00d4ec]',
  image: 'text-secondary',
}

export default function DrivePanel() {
  const { driveFiles } = useDashboard()

  const usedStorage = driveFiles.reduce((s, f) => {
    const num = parseFloat(f.size)
    const unit = f.size.includes('MB') ? 1 : 0.001
    return s + num * unit
  }, 0)

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="font-headline text-4xl font-bold tracking-tight">AI Drive</h1>
          <p className="text-on-surface-variant text-sm mt-1">
            {driveFiles.length} files &middot; {usedStorage.toFixed(1)} MB used of 1 GB
          </p>
        </div>
        <button className="bg-primary text-on-primary px-5 py-3 font-label text-[10px] font-bold tracking-widest uppercase hover:shadow-[0_0_20px_rgba(129,236,255,0.4)] transition-all cursor-pointer flex items-center gap-2">
          <span className="material-symbols-outlined text-sm">upload</span>
          Upload
        </button>
      </div>

      {/* Storage Bar */}
      <div className="bg-surface-container-low border border-outline/10 p-6">
        <div className="flex justify-between items-center mb-3">
          <span className="font-label text-[10px] tracking-widest text-white/40 uppercase">Storage</span>
          <span className="font-headline text-sm font-bold">{usedStorage.toFixed(1)} MB / 1 GB</span>
        </div>
        <div className="w-full h-2 bg-surface-container-highest">
          <div className="h-full bg-primary" style={{ width: `${(usedStorage / 1000) * 100}%` }} />
        </div>
        <div className="flex gap-6 mt-4">
          {Object.entries(typeIcons).map(([type, icon]) => {
            const count = driveFiles.filter((f) => f.type === type).length
            return (
              <div key={type} className="flex items-center gap-2">
                <span className={`material-symbols-outlined text-sm ${typeColors[type]}`}>{icon}</span>
                <span className="font-label text-[10px] text-white/40 uppercase">{type} ({count})</span>
              </div>
            )
          })}
        </div>
      </div>

      {/* File List */}
      <div className="bg-surface-container-low border border-outline/10">
        <div className="grid grid-cols-12 gap-4 px-6 py-3 border-b border-outline/10">
          <span className="col-span-5 font-label text-[9px] tracking-[0.2em] text-white/30 uppercase">Name</span>
          <span className="col-span-2 font-label text-[9px] tracking-[0.2em] text-white/30 uppercase">Type</span>
          <span className="col-span-2 font-label text-[9px] tracking-[0.2em] text-white/30 uppercase">Size</span>
          <span className="col-span-2 font-label text-[9px] tracking-[0.2em] text-white/30 uppercase">Modified</span>
          <span className="col-span-1 font-label text-[9px] tracking-[0.2em] text-white/30 uppercase">Agent</span>
        </div>
        {driveFiles.map((file) => (
          <div
            key={file.id}
            className="grid grid-cols-12 gap-4 px-6 py-4 border-b border-outline/5 hover:bg-surface-container transition-colors cursor-pointer items-center"
          >
            <div className="col-span-5 flex items-center gap-3">
              <span className={`material-symbols-outlined text-lg ${typeColors[file.type]}`}>
                {typeIcons[file.type]}
              </span>
              <span className="text-sm truncate">{file.name}</span>
            </div>
            <div className="col-span-2">
              <span className="font-label text-[10px] tracking-widest text-white/40 uppercase">{file.type}</span>
            </div>
            <div className="col-span-2">
              <span className="text-xs text-white/50">{file.size}</span>
            </div>
            <div className="col-span-2">
              <span className="text-xs text-white/40">{file.modified}</span>
            </div>
            <div className="col-span-1">
              <span className="material-symbols-outlined text-primary text-sm">smart_toy</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
