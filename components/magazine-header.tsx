import Link from 'next/link'
import Image from 'next/image'
import { Search, Menu } from 'lucide-react'

export default function MagazineHeader() {
  return (
    <header className="border-b border-[#945139]/20 bg-[#faf8f5]">
      <div className="mx-auto flex items-center justify-between px-4 py-3 sm:px-6 sm:py-4 md:px-12">
        {/* Left - Logo */}
        <Link href="/" className="flex items-center">
          <Image 
            src="/logos/IA-logo.png" 
            alt="ikai Asai" 
            width={120} 
            height={40}
            className="h-8 w-auto sm:h-10"
            priority
          />
        </Link>

        {/* Center navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link 
            href="/" 
            className="font-nunito text-sm font-light tracking-wide text-[#3d2021] transition-opacity hover:opacity-60"
          >
            Home
          </Link>
          <Link 
            href="/about" 
            className="font-nunito text-sm font-light tracking-wide text-[#3d2021] transition-opacity hover:opacity-60"
          >
            About
          </Link>
          <Link 
            href="/blog" 
            className="font-nunito text-sm font-light tracking-wide text-[#3d2021] transition-opacity hover:opacity-60"
          >
            Stories
          </Link>
          <Link 
            href="/blog" 
            className="font-nunito text-sm font-light tracking-wide text-[#3d2021] transition-opacity hover:opacity-60"
          >
            Design
          </Link>
        </nav>

        {/* Right - Menu icons */}
        <div className="flex items-center gap-3 sm:gap-4">
          <Link 
            href="/blog" 
            className="md:hidden font-nunito text-xs font-light text-[#3d2021] transition-opacity hover:opacity-60"
          >
            Stories
          </Link>
          <button 
            aria-label="Menu"
            className="text-[#3d2021] transition-opacity hover:opacity-60"
          >
            <Menu className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </header>
  )
}
