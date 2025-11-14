import { useState } from "react"
import { useNavigate } from "react-router-dom"
import {Search} from 'lucide-react'

export function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("")
  const navigate = useNavigate()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (!searchQuery.trim()) return

    const query = searchQuery.trim()
    
    // Detect type: address (0x + 40 chars), txn hash (0x + 64 chars), or block number
    if (query.startsWith("0x")) {
      if (query.length === 42) {
        // Address
        navigate(`/address/${query}`)
      } else if (query.length === 66) {
        // Transaction hash
        navigate(`/tx/${query}`)
      } else {
        // Default to address search
        navigate(`/address/${query}`)
      }
    } else if (/^\d+$/.test(query)) {
      // Block number
      navigate(`/block/${query}`)
    } else {
      // Default to address
      navigate(`/address/${query}`)
    }
    
    setSearchQuery("")
  }

  return (
    <form onSubmit={handleSearch} className="max-w-3xl mx-auto mb-12">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search by Address / Txn Hash / Block / Token"
          className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all"
        />
      </div>
    </form>
  )
}