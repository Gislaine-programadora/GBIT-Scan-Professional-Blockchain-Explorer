import { Link, useLocation } from "react-router-dom"
import {Box} from 'lucide-react'

export function Header() {
  const location = useLocation()

  const isActive = (path: string) => location.pathname === path

  return (
    <header className="bg-slate-900/80 backdrop-blur-lg border-b border-slate-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
              <Box className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">GBIT-Scan</h1>
              <p className="text-xs text-cyan-400">Blockchain Explorer</p>
            </div>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link 
              to="/" 
              className={`transition-colors ${isActive("/") ? "text-cyan-400" : "text-gray-300 hover:text-cyan-400"}`}
            >
              Home
            </Link>
            <Link 
              to="/blockchain" 
              className={`transition-colors ${isActive("/blockchain") ? "text-cyan-400" : "text-gray-300 hover:text-cyan-400"}`}
            >
              Blockchain
            </Link>
            <Link 
              to="/tokens" 
              className={`transition-colors ${isActive("/tokens") ? "text-cyan-400" : "text-gray-300 hover:text-cyan-400"}`}
            >
              Tokens
            </Link>
            <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors">
              Resources
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}