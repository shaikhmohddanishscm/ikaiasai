import MagazineHeader from '@/components/magazine-header'
import Footer from '@/components/footer'
import Link from 'next/link'
import blogsData from '@/public/blogs.json'

// Helper function to create slug from title
function createSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

// Use the first 6 articles for the grid
const articles = blogsData.slice(0, 6).map(blog => ({
  category: 'CRAFT & LIFESTYLE',
  title: blog.title,
  description: blog.excerpt,
  image: blog.image_url,
  url: blog.url,
  date: blog.date,
  slug: createSlug(blog.title)
}))

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <MagazineHeader />
      
      <div className="flex flex-col lg:flex-row">
        {/* Left side - Hero section (Sticky) */}
        <div className="relative w-full lg:w-1/2 bg-[#945139] min-h-[50vh] lg:sticky lg:top-0 lg:h-screen">
          <div className="absolute inset-0 bg-linear-to-br from-[#945139] via-[#ef9f59] to-[#7f252c] opacity-90"></div>
          
          {/* Text overlay on hero */}
          <div className="relative z-10 flex h-full flex-col justify-center px-6 py-12 sm:px-12 lg:px-20">
            <p className="font-nunito text-[10px] sm:text-xs font-medium uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[#faf8f5]/80">
              Handcrafted Heritage
            </p>
            <h1 className="mt-4 sm:mt-6 font-nunito text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight tracking-tight text-[#faf8f5]">
              IKAI ASAI
            </h1>
            <p className="mt-6 sm:mt-8 font-nunito-sans text-base sm:text-lg font-light italic leading-relaxed text-[#faf8f5] max-w-md">
              Discover the artistry of centuries-old Indian crafts, reimagined for contemporary living. Each piece tells a story of tradition, heritage, and masterful craftsmanship.
            </p>
          </div>
        </div>

        {/* Right side - Articles grid */}
        <div className="w-full bg-[#faf8f5] lg:w-1/2 overflow-y-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            {articles.map((article, index) => (
              <Link
                key={index}
                href={`/blog/${article.slug}`}
                className="group cursor-pointer border-b border-l border-[#945139]/10 bg-white transition-all hover:shadow-lg"
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4 sm:p-6">
                  <p className="font-nunito text-[10px] font-medium uppercase tracking-widest text-[#945139]">
                    {article.category}
                  </p>
                  <h2 className="mt-3 font-nunito text-xl font-bold text-[#3d2021] group-hover:text-[#945139] transition-colors">
                    {article.title}
                  </h2>
                  <p className="mt-2 font-nunito text-sm font-light leading-relaxed text-[#3d2021]/80">
                    {article.description}
                  </p>
                  <p className="mt-3 font-nunito-sans text-xs italic text-[#738472]">
                    {article.date}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <section className="bg-[#faf8f5] py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="mb-8 sm:mb-12 lg:mb-16 text-center font-nunito text-xs font-bold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[#3d2021]">
            Editor's Pick
          </h2>
          
          <div className="mb-8 sm:mb-12 grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:grid-cols-4">
            <div className="group cursor-pointer">
              <div className="aspect-square overflow-hidden rounded-sm bg-white shadow-md">
                <div className="flex h-full items-center justify-center bg-[#945139]/10 transition-all group-hover:bg-[#945139]/20">
                  <div className="text-center p-6">
                    <h3 className="font-nunito text-2xl font-bold text-[#3d2021]">Kansa</h3>
                    <p className="mt-2 font-nunito-sans text-sm italic text-[#738472]">Healing Metal</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="group cursor-pointer">
              <div className="aspect-square overflow-hidden rounded-sm bg-white shadow-md">
                <div className="flex h-full items-center justify-center bg-[#ef9f59]/10 transition-all group-hover:bg-[#ef9f59]/20">
                  <div className="text-center p-6">
                    <h3 className="font-nunito text-2xl font-bold text-[#3d2021]">Terracotta</h3>
                    <p className="mt-2 font-nunito-sans text-sm italic text-[#738472]">Earthenware</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="group cursor-pointer">
              <div className="aspect-square overflow-hidden rounded-sm bg-white shadow-md">
                <div className="flex h-full items-center justify-center bg-[#264b59]/10 transition-all group-hover:bg-[#264b59]/20">
                  <div className="text-center p-6">
                    <h3 className="font-nunito text-2xl font-bold text-[#3d2021]">Glasswork</h3>
                    <p className="mt-2 font-nunito-sans text-sm italic text-[#738472]">Hand-Blown</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="group cursor-pointer">
              <div className="aspect-square overflow-hidden rounded-sm bg-white shadow-md">
                <div className="flex h-full items-center justify-center bg-[#7f252c]/10 transition-all group-hover:bg-[#7f252c]/20">
                  <div className="text-center p-6">
                    <h3 className="font-nunito text-2xl font-bold text-[#3d2021]">Longpi</h3>
                    <p className="mt-2 font-nunito-sans text-sm italic text-[#738472]">Black Pottery</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <p className="font-nunito text-lg font-light text-[#3d2021]">
              Experience the legacy of traditional Indian craftsmanship.
            </p>
          </div>
        </div>
      </section>

      <div className="border-t border-[#945139]/20"></div>

      {/* Kansa Craft Feature */}
      <section className="relative min-h-[70vh] sm:min-h-screen bg-[#3d2021]">
        <div className="absolute inset-0 bg-linear-to-br from-[#3d2021] via-[#7f252c] to-[#3d2021] opacity-95"></div>
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 min-h-[70vh] sm:min-h-screen">
          <div className="flex flex-col justify-center px-6 py-12 sm:px-12 sm:py-20 lg:px-20">
            <p className="font-nunito text-[10px] sm:text-xs font-medium uppercase tracking-[0.2em] sm:tracking-widest text-[#ef9f59]">
              CRAFT CARD
            </p>
            <h2 className="mt-6 sm:mt-8 font-nunito text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.95] tracking-tight text-[#faf8f5]">
              KANSA<br />METAL
            </h2>
            <p className="mt-8 sm:mt-12 lg:mt-16 font-nunito-sans text-base sm:text-lg italic leading-relaxed text-[#faf8f5]/90">
              Originating from the times of Mahabharata, Kansa is considered the healing metal of Ayurveda. Crafted from 78% copper and 22% tin, our Kansari Karigars use only handmade tools to create alluring patterns on what is known to be the hardest metal to work on.
            </p>
          </div>
          <div className="relative h-[50vh] lg:h-auto bg-[#945139]/20 flex items-center justify-center">
            <div className="text-center p-12">
              <div className="text-8xl text-[#ef9f59] mb-8">✦</div>
              <p className="font-nunito text-sm uppercase tracking-[0.3em] text-[#faf8f5]/70">
                Healing Properties
              </p>
              <p className="mt-4 font-nunito-sans text-base italic text-[#faf8f5]">
                "78% Copper + 22% Tin"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Terracotta Craft Feature
      <section className="grid grid-cols-1 lg:grid-cols-2">
        <div className="relative h-[50vh] sm:h-[60vh] lg:h-auto bg-[#ef9f59]/10 flex items-center justify-center">
          <div className="text-center p-12">
            <div className="text-8xl text-[#945139] mb-8">❋</div>
            <p className="font-nunito text-sm uppercase tracking-[0.3em] text-[#3d2021]/70">
              Baked Earth
            </p>
            <p className="mt-4 font-nunito-sans text-base italic text-[#3d2021]">
              "From Maharashtra's Heart"
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center px-6 py-12 sm:px-12 sm:py-20 lg:px-20 bg-[#faf8f5]">
          <p className="font-nunito text-[10px] sm:text-xs font-medium uppercase tracking-[0.2em] sm:tracking-widest text-[#945139]">
            TRADITIONAL ART
          </p>
          <h2 className="mt-6 sm:mt-8 font-nunito text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.95] tracking-tight text-[#3d2021]">
            TERRA<br />COTTA
          </h2>
          <p className="mt-8 sm:mt-12 lg:mt-16 font-nunito-sans text-base sm:text-lg italic leading-relaxed text-[#3d2021]/80">
            Our fine terracotta is handcrafted by gifted craftsmen descending from a lineage of traditional kalakars. Using ancestral knowledge, they channel the creative energy of nature's elements to create pieces that cut through the fabric of time and civilization.
          </p>
        </div>
      </section> */}

      {/* Craft Heritage Article */}
      <section className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          {/* <div className="mb-8 sm:mb-12 grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-3">
            <div className="aspect-4/3 overflow-hidden rounded-sm bg-[#945139]/5 flex items-center justify-center">
              <div className="text-center p-8">
                <p className="font-nunito text-6xl font-bold text-[#945139]">5000+</p>
                <p className="mt-4 font-nunito-sans text-sm italic text-[#3d2021]">Years of Heritage</p>
              </div>
            </div>
            <div className="aspect-4/3 overflow-hidden rounded-sm bg-[#ef9f59]/5 flex items-center justify-center">
              <div className="text-center p-8">
                <p className="font-nunito text-6xl font-bold text-[#ef9f59]">100%</p>
                <p className="mt-4 font-nunito-sans text-sm italic text-[#3d2021]">Handcrafted</p>
              </div>
            </div>
            <div className="aspect-4/3 overflow-hidden rounded-sm bg-[#264b59]/5 flex items-center justify-center">
              <div className="text-center p-8">
                <p className="font-nunito text-6xl font-bold text-[#264b59]">7+</p>
                <p className="mt-4 font-nunito-sans text-sm italic text-[#3d2021]">Ancient Crafts</p>
              </div>
            </div>
          </div> */}
          
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 font-nunito text-xs font-medium uppercase tracking-widest text-[#945139]">
              Heritage & Craftsmanship
            </p>
            <h2 className="mb-8 font-nunito text-5xl font-bold tracking-tight text-[#3d2021] lg:text-6xl">
              A LEGACY OF ARTISTRY
            </h2>
            <p className="font-nunito-sans text-lg italic leading-relaxed text-[#3d2021]/80">
              Each piece at ikai Asai celebrates centuries-old Indian craft traditions. From Kansa metalwork to Longpi pottery, our artisans bring heritage to your home.
            </p>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="border-t border-[#945139]/20 bg-[#945139] py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto max-w-2xl px-4 sm:px-6">
          <h2 className="mb-4 text-center font-nunito text-2xl sm:text-3xl font-bold text-[#faf8f5]">
            Join Our Community
          </h2>
          <p className="mb-8 sm:mb-12 text-center font-nunito-sans text-sm sm:text-base italic text-[#faf8f5]/80">
            Discover stories of craft, heritage, and timeless design
          </p>
          
          <form className="space-y-6">
            <div className="flex items-center border-b-2 border-[#faf8f5]/30 pb-3 focus-within:border-[#faf8f5]">
              <input 
                type="email"
                placeholder="YOUR EMAIL ADDRESS"
                className="flex-1 bg-transparent font-nunito text-sm uppercase tracking-wider text-[#faf8f5] placeholder-[#faf8f5]/50 focus:outline-none"
              />
              <button 
                type="submit"
                className="font-nunito text-sm uppercase tracking-wider text-[#faf8f5] transition-opacity hover:opacity-80 px-4 py-2 border-2 border-[#faf8f5] rounded-sm"
              >
                SUBSCRIBE
              </button>
            </div>
            
            <div className="flex items-center justify-center gap-3">
              <input 
                type="checkbox"
                id="terms"
                className="h-4 w-4 border-2 border-[#faf8f5] bg-transparent accent-[#ef9f59]"
              />
              <label htmlFor="terms" className="font-nunito text-sm text-[#faf8f5]">
                I agree to receive updates about crafts and collections
              </label>
            </div>
          </form>
        </div>
      </section>

      {/* Crafts Showcase Section */}
      <section className="border-t border-[#945139]/20 bg-[#faf8f5] py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="mb-8 sm:mb-12 lg:mb-16 text-center font-nunito text-xs font-bold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[#3d2021]">
            Our Craft Stories
          </h2>
          
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:gap-x-8 sm:gap-y-12 md:grid-cols-2 lg:grid-cols-3">
            {/* Kansa Craft */}
            <article className="group cursor-pointer">
              <div className="mb-6 aspect-3/4 overflow-hidden rounded-sm bg-[#945139]/5">
                <div className="flex h-full items-center justify-center p-8">
                  <div className="text-center">
                    <div className="text-7xl text-[#945139] mb-6">✦</div>
                    <h3 className="font-nunito text-3xl font-bold text-[#3d2021]">Kansa</h3>
                  </div>
                </div>
              </div>
              <p className="mb-2 font-nunito text-[10px] font-medium uppercase tracking-widest text-[#945139]">
                Bronze Metal Work
              </p>
              <h3 className="mb-3 font-nunito text-xl font-bold text-[#3d2021]">
                The Healing Metal of Ayurveda
              </h3>
              <p className="font-nunito-sans text-sm italic leading-relaxed text-[#3d2021]/80">
                5000 years of tradition crafted into contemporary tableware. Our Kansari Karigars use ancestral techniques on the hardest metal to work.
              </p>
            </article>

            {/* Terracotta */}
            <article className="group cursor-pointer">
              <div className="mb-6 aspect-3/4 overflow-hidden rounded-sm bg-[#ef9f59]/5">
                <div className="flex h-full items-center justify-center p-8">
                  <div className="text-center">
                    <div className="text-7xl text-[#ef9f59] mb-6">❋</div>
                    <h3 className="font-nunito text-3xl font-bold text-[#3d2021]">Terracotta</h3>
                  </div>
                </div>
              </div>
              <p className="mb-2 font-nunito text-[10px] font-medium uppercase tracking-widest text-[#945139]">
                Earthenware
              </p>
              <h3 className="mb-3 font-nunito text-xl font-bold text-[#3d2021]">
                Baked Earth Traditions
              </h3>
              <p className="font-nunito-sans text-sm italic leading-relaxed text-[#3d2021]/80">
                From Maharashtra's heart, our kalakars channel nature's elements to create pieces that transcend time and civilization.
              </p>
            </article>

            {/* Glasswork */}
            <article className="group cursor-pointer">
              <div className="mb-6 aspect-3/4 overflow-hidden rounded-sm bg-[#264b59]/5">
                <div className="flex h-full items-center justify-center p-8">
                  <div className="text-center">
                    <div className="text-7xl text-[#264b59] mb-6">◈</div>
                    <h3 className="font-nunito text-3xl font-bold text-[#3d2021]">Glasswork</h3>
                  </div>
                </div>
              </div>
              <p className="mb-2 font-nunito text-[10px] font-medium uppercase tracking-widest text-[#945139]">
                Hand-Blown Glass
              </p>
              <h3 className="mb-3 font-nunito text-xl font-bold text-[#3d2021]">
                Firozabad's Glass Traditions
              </h3>
              <p className="font-nunito-sans text-sm italic leading-relaxed text-[#3d2021]/80">
                Centuries-old glass blowing creates contemporary pieces, blending heritage with modern art in every bubble and curve.
              </p>
            </article>

            {/* Longpi Pottery */}
            <article className="group cursor-pointer">
              <div className="mb-6 aspect-3/4 overflow-hidden rounded-sm bg-[#7f252c]/5">
                <div className="flex h-full items-center justify-center p-8">
                  <div className="text-center">
                    <div className="text-7xl text-[#7f252c] mb-6">◉</div>
                    <h3 className="font-nunito text-3xl font-bold text-[#3d2021]">Longpi</h3>
                  </div>
                </div>
              </div>
              <p className="mb-2 font-nunito text-[10px] font-medium uppercase tracking-widest text-[#945139]">
                Black Pottery
              </p>
              <h3 className="mb-3 font-nunito text-xl font-bold text-[#3d2021]">
                Manipur's Black Stone
              </h3>
              <p className="font-nunito-sans text-sm italic leading-relaxed text-[#3d2021]/80">
                Distinguished by its surreal black glow, hand-patted clay acquires natural sheen through ancient low-firing processes.
              </p>
            </article>

            {/* Papier Mache */}
            <article className="group cursor-pointer">
              <div className="mb-6 aspect-3/4 overflow-hidden rounded-sm bg-[#945139]/5">
                <div className="flex h-full items-center justify-center p-8">
                  <div className="text-center">
                    <div className="text-7xl text-[#945139] mb-6">✿</div>
                    <h3 className="font-nunito text-3xl font-bold text-[#3d2021]">Papier Mache</h3>
                  </div>
                </div>
              </div>
              <p className="mb-2 font-nunito text-[10px] font-medium uppercase tracking-widest text-[#945139]">
                Kashmir Art
              </p>
              <h3 className="mb-3 font-nunito text-xl font-bold text-[#3d2021]">
                Kashmir's Paper Artistry
              </h3>
              <p className="font-nunito-sans text-sm italic leading-relaxed text-[#3d2021]/80">
                Richly decorated artifacts from Kashmir Valley's Shia artisan community, crafted in vibrant hues of tradition.
              </p>
            </article>

            {/* Metal Work */}
            <article className="group cursor-pointer">
              <div className="mb-6 aspect-3/4 overflow-hidden rounded-sm bg-[#ef9f59]/5">
                <div className="flex h-full items-center justify-center p-8">
                  <div className="text-center">
                    <div className="text-7xl text-[#ef9f59] mb-6">⬟</div>
                    <h3 className="font-nunito text-3xl font-bold text-[#3d2021]">Brass Work</h3>
                  </div>
                </div>
              </div>
              <p className="mb-2 font-nunito text-[10px] font-medium uppercase tracking-widest text-[#945139]">
                Peetal Nagri
              </p>
              <h3 className="mb-3 font-nunito text-xl font-bold text-[#3d2021]">
                Moradabad's Brass Legacy
              </h3>
              <p className="font-nunito-sans text-sm italic leading-relaxed text-[#3d2021]/80">
                From India's Brass City, advanced technologies meet time-tested designs in contemporary metalware excellence.
              </p>
            </article>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
