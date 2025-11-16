import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-[#945139]/20 bg-[#3d2021] py-12">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-8 pb-8 md:grid-cols-3">
          {/* Left - Brand */}
          <div>
            <h3 className="font-nunito text-2xl font-bold text-[#faf8f5]">ikai Asai</h3>
            <p className="mt-4 font-nunito-sans text-sm italic leading-relaxed text-[#faf8f5]/70">
              Celebrating centuries-old Indian crafts through contemporary design. Each piece tells a story of tradition and masterful craftsmanship.
            </p>
          </div>

          {/* Center - Navigation */}
          <div>
            <h4 className="font-nunito text-sm font-bold uppercase tracking-wider text-[#faf8f5] mb-4">Explore</h4>
            <div className="space-y-2">
              <Link href="/" className="block font-nunito text-sm text-[#faf8f5]/80 transition-colors hover:text-[#ef9f59]">
                Home
              </Link>
              <Link href="/blog" className="block font-nunito text-sm text-[#faf8f5]/80 transition-colors hover:text-[#ef9f59]">
                Stories & Blog
              </Link>
            </div>
          </div>

          {/* Right - Social */}
          <div>
            <h4 className="font-nunito text-sm font-bold uppercase tracking-wider text-[#faf8f5] mb-4">Connect</h4>
            <div className="space-y-2">
              <a href="https://www.instagram.com/ikaiasai/" target="_blank" rel="noopener noreferrer" className="block font-nunito text-sm text-[#faf8f5]/80 transition-colors hover:text-[#ef9f59]">
                Instagram
              </a>
              <a href="https://www.facebook.com/ikaiasai" target="_blank" rel="noopener noreferrer" className="block font-nunito text-sm text-[#faf8f5]/80 transition-colors hover:text-[#ef9f59]">
                Facebook
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#faf8f5]/20 pt-8">
          <div className="flex flex-col items-center justify-center gap-4 text-center">
            <span className="font-nunito text-sm text-[#faf8f5]/60">© 2025 ikai Asai. Handcrafted with care.</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
