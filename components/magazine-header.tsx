import Link from 'next/link'
import Image from 'next/image'
import { Search, Menu } from 'lucide-react'

export default function MagazineHeader() {
  return (
    <header className="border-b border-[#945139]/20 bg-[#faf8f5]">
      <div className="mx-auto flex items-center justify-between px-6 py-4 md:px-12">
        {/* Left - Logo */}
        <Link href="/" className="flex items-center">
          <Image 
            src="/logos/IA-logo.png" 
            alt="ikai Asai" 
            width={120} 
            height={40}
            className="h-10 w-auto"
            priority
          />
        </Link>

        {/* Center navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link 
            href="/crafts" 
            className="font-nunito text-sm font-light tracking-wide text-[#3d2021] transition-opacity hover:opacity-60"
          >
            Crafts
          </Link>
          <Link 
            href="/collections" 
            className="font-nunito text-sm font-light tracking-wide text-[#3d2021] transition-opacity hover:opacity-60"
          >
            Collections
          </Link>
          <Link 
            href="/blog" 
            className="font-nunito text-sm font-light tracking-wide text-[#3d2021] transition-opacity hover:opacity-60"
          >
            Stories
          </Link>
        </nav>

        {/* Right - Shop button and menu */}
        <div className="flex items-center gap-6">
          <Link 
            href="/shop" 
            className="border border-[#945139] bg-[#945139] px-6 py-2 font-nunito text-sm font-light tracking-wide text-white transition-colors hover:bg-[#7f252c]"
          >
            Shop
          </Link>
          <button 
            aria-label="Search"
            className="text-[#3d2021] transition-opacity hover:opacity-60"
          >
            <Search className="h-5 w-5" strokeWidth={1.5} />
          </button>
          <button 
            aria-label="Menu"
            className="text-[#3d2021] transition-opacity hover:opacity-60"
          >
            <Menu className="h-5 w-5" strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </header>
  )
}
