import Link from 'next/link';
import { Download, Rocket, Shield, Zap } from 'lucide-react';

export default function Home() {
  const links = [
    { id: '1', label: 'File 1' },
    { id: '2', label: 'File 2' },
    { id: '3', label: 'File 3' },
    { id: '4', label: 'File 4' },
    { id: '5', label: 'File 5' },
    { id: '11', label: 'File 11' },
    { id: '24', label: 'File 24' },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col items-center justify-center p-6 selection:bg-cyan-500/30">
      <div className="max-w-4xl w-full space-y-12">
        {/* Header */}
        <header className="text-center space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <div className="inline-flex items-center justify-center p-3 bg-cyan-500/10 rounded-2xl mb-4 border border-cyan-500/20">
            <Rocket className="w-8 h-8 text-cyan-400" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-gradient-to-r from-white via-white to-white/40 bg-clip-text text-transparent">
            Instant Download
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            A high-speed file distribution system. Simply append the file number to the URL to trigger an automatic download.
          </p>
        </header>

        {/* Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
          <FeatureCard 
            icon={<Zap className="text-yellow-400" />}
            title="Blazing Fast"
            description="Zero-latency redirects and optimized delivery headers."
          />
          <FeatureCard 
            icon={<Shield className="text-green-400" />}
            title="Secure"
            description="Sanitized path handling and protected file distribution."
          />
          <FeatureCard 
            icon={<Download className="text-cyan-400" />}
            title="Auto-Trigger"
            description="Files start downloading the moment the page loads."
          />
        </div>

        {/* Demo Section */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl space-y-8 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-500">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold">Available Shortcuts</h2>
            <p className="text-gray-400">Click a link below or try typing <code>/any-number</code> in your browser's address bar.</p>
          </div>
          
          <div className="flex flex-wrap gap-4">
            {links.map((link) => (
              <Link 
                key={link.id} 
                href={`/${link.id}`}
                className="group relative px-6 py-3 bg-white/5 border border-white/10 rounded-xl transition-all hover:bg-white/10 hover:border-cyan-500/50 hover:scale-105 active:scale-95"
              >
                <span className="relative z-10 font-medium">/{link.id}</span>
                <div className="absolute inset-0 bg-cyan-500/0 group-hover:bg-cyan-500/5 rounded-xl transition-colors" />
              </Link>
            ))}
          </div>

          <div className="pt-6 border-t border-white/5">
            <p className="text-sm text-gray-500 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Ready for Vercel Deployment
            </p>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center text-gray-600 text-sm">
          Built with Next.js & Tailwind CSS
        </footer>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="p-6 bg-white/5 border border-white/10 rounded-2xl space-y-3 hover:bg-white/[0.07] transition-colors group">
      <div className="p-2 bg-white/5 rounded-lg w-fit group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-lg font-medium">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
    </div>
  );
}
