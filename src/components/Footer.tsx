import { Box } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900/80 backdrop-blur-lg border-t border-slate-800 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
              <Box className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">GBIT-Scan</span>
          </div>
          <p className="text-gray-400 text-sm mb-2">
            Professional Blockchain Explorer powered by GBIT Framework
          </p>
          <p className="text-gray-500 text-xs">
            © 2024 GBIT-Scan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
