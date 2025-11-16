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

export const metadata = {
  title: 'Stories & Blog | ikai Asai',
  description: 'Explore stories of craft, heritage, and timeless design from ikai Asai',
}

export default function BlogListPage() {
  return (
    <div className="min-h-screen bg-[#faf8f5]">
      <MagazineHeader />
      
      {/* Hero Section */}
      <section className="bg-[#945139] py-12 sm:py-16 lg:py-20 xl:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="font-nunito text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight text-[#faf8f5]">
              Stories & Insights
            </h1>
            
            <p className="mt-6 sm:mt-8 font-nunito-sans text-base sm:text-lg italic leading-relaxed text-[#faf8f5]/80">
              Discover the artistry of centuries-old Indian crafts, care guides, and inspiration for your home
            </p>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20 lg:px-12">
        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogsData.map((blog) => {
            const slug = createSlug(blog.title)
            
            return (
              <Link 
                key={slug}
                href={`/blog/${slug}`}
                className="group cursor-pointer"
              >
                <article className="overflow-hidden rounded-sm bg-white shadow-md transition-all duration-300 hover:shadow-xl">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={blog.image_url}
                      alt={blog.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4 sm:p-6">
                    <div className="flex items-center gap-2 text-xs">
                      <span className="font-nunito font-medium uppercase tracking-widest text-[#945139]">
                        Craft & Lifestyle
                      </span>
                      <span className="text-[#3d2021]/40">•</span>
                      <span className="font-nunito-sans italic text-[#738472]">
                        {blog.date}
                      </span>
                    </div>
                    
                    <h2 className="mt-3 font-nunito text-lg sm:text-xl font-bold text-[#3d2021] group-hover:text-[#945139] transition-colors">
                      {blog.title}
                    </h2>
                    
                    <p className="mt-3 font-nunito text-sm leading-relaxed text-[#3d2021]/70">
                      {blog.excerpt.substring(0, 150)}...
                    </p>
                    
                    <div className="mt-4 flex items-center gap-2 font-nunito text-sm font-medium text-[#945139]">
                      <span>Read More</span>
                      <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </div>
                </article>
              </Link>
            )
          })}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="border-t border-[#945139]/20 bg-[#3d2021] py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto max-w-2xl px-4 sm:px-6">
          <h2 className="mb-4 text-center font-nunito text-2xl sm:text-3xl font-bold text-[#faf8f5]">
            Stay Inspired
          </h2>
          <p className="mb-8 sm:mb-12 text-center font-nunito-sans text-sm sm:text-base italic text-[#faf8f5]/80">
            Get stories of craft, care tips, and new collections delivered to your inbox
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
          </form>
        </div>
      </section>

      <Footer />
    </div>
  )
}
