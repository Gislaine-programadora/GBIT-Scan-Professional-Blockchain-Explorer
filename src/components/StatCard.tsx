import React from "react"

interface StatCardProps {
  icon: React.ReactNode
  label: string
  value: string
}

export function StatCard({ icon, label, value }: StatCardProps) {
  return (
    <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl border border-slate-700 p-4 hover:border-cyan-400/50 transition-all group">
      <div className="flex items-center gap-2 mb-2">
        <div className="text-cyan-400 group-hover:scale-110 transition-transform">
          {React.cloneElement(icon as React.ReactElement, { className: "w-4 h-4" })}
        </div>
        <div className="text-gray-400 text-xs font-medium">{label}</div>
      </div>
      <div className="text-white text-lg font-bold">{value}</div>
    </div>
  )
}