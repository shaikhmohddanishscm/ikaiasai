import MagazineHeader from '@/components/magazine-header'
import Footer from '@/components/footer'
import Link from 'next/link'
import blogsData from '@/public/blogs.json'
import { notFound } from 'next/navigation'

// Helper function to create slug from title
function createSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  return blogsData.map((blog) => ({
    slug: createSlug(blog.title),
  }))
}

// Generate metadata for each blog post
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const blog = blogsData.find((b) => createSlug(b.title) === slug)
  
  if (!blog) {
    return {
      title: 'Blog Not Found | ikai Asai',
    }
  }

  return {
    title: `${blog.title} | ikai Asai`,
    description: blog.excerpt,
  }
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const blog = blogsData.find((b) => createSlug(b.title) === slug)

  if (!blog) {
    notFound()
  }

  // Extract first few paragraphs for the intro
  const paragraphs = blog.content.split('\n\n').filter(p => p.trim().length > 0)
  const introParagraphs = paragraphs.slice(0, 3)
  const bodyParagraphs = paragraphs.slice(3)

  return (
    <div className="min-h-screen bg-white">
      <MagazineHeader />
      
      {/* Hero Section */}
      <section className="relative">
        <div className="grid min-h-[60vh] sm:min-h-[70vh] lg:min-h-[80vh] grid-cols-1 px-6 py-8 sm:px-12 sm:py-12 lg:grid-cols-2 lg:px-20 xl:px-32">
          {/* Left column - Title and description */}
          <div className="flex flex-col justify-center pr-0 lg:pr-16">
            <h1 className="font-nunito text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.9] tracking-tight text-[#3d2021]">
              {blog.title.split(' ').slice(0, 2).join(' ').toUpperCase()}
            </h1>
            
            <p className="mt-6 sm:mt-8 font-nunito-sans text-sm sm:text-base italic leading-relaxed text-[#3d2021]/80">
              {blog.excerpt}
            </p>
            
            <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-2 sm:gap-4">
              <p className="font-nunito text-xs font-medium uppercase tracking-widest text-[#945139]">
                CRAFT & LIFESTYLE
              </p>
              <span className="text-[#3d2021]/40">•</span>
              <span className="font-nunito text-xs text-[#3d2021]/60">{blog.date}</span>
            </div>
          </div>
          
          {/* Right column - Hero image */}
          <div className="mt-8 lg:mt-0">
            <img 
              src={blog.image_url}
              alt={blog.title}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="px-6 py-10 sm:px-12 sm:py-12 lg:py-16 lg:px-20 xl:px-32">
        <div className="space-y-6">
          {/* Featured quote */}
          <div className="border-l-4 border-[#945139] pl-6 mb-12">
            <p className="font-nunito-sans text-lg italic leading-relaxed text-[#3d2021]/80">
              {blog.excerpt}
            </p>
          </div>
          
          {/* Two column layout for content */}
          <div className="grid grid-cols-1 gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
            {/* Left column */}
            <div className="space-y-6">
              {introParagraphs.map((paragraph, index) => {
                // Check if it's a heading
                if (paragraph.startsWith('Top ') || paragraph.match(/^\d+\./)) {
                  return (
                    <h2 key={index} className="mt-8 mb-4 font-nunito text-xl font-bold text-[#3d2021]">
                      {paragraph}
                    </h2>
                  )
                }
                
                return (
                  <p key={index} className="font-nunito text-base leading-relaxed text-[#3d2021]/80">
                    {paragraph}
                  </p>
                )
              })}
              
              {/* First half of body paragraphs */}
              {bodyParagraphs.slice(0, Math.ceil(bodyParagraphs.length / 2)).map((paragraph, index) => {
                // Check if it's a heading
                if (paragraph.match(/^[A-Z][^.!?]*:$/) || 
                    paragraph.match(/^\d+\./) || 
                    paragraph.startsWith('DO') || 
                    paragraph.startsWith('DON') ||
                    paragraph.includes('Our Process') ||
                    paragraph.includes('How To')) {
                  return (
                    <h3 key={`body-left-${index}`} className="mt-8 mb-4 font-nunito text-xl font-bold text-[#3d2021]">
                      {paragraph}
                    </h3>
                  )
                }
                
                // Check if it's a list item
                if (paragraph.startsWith('-')) {
                  return (
                    <li key={`body-left-${index}`} className="ml-6 font-nunito text-base leading-relaxed text-[#3d2021]/80">
                      {paragraph.substring(1).trim()}
                    </li>
                  )
                }
                
                return (
                  <p key={`body-left-${index}`} className="font-nunito text-base leading-relaxed text-[#3d2021]/80">
                    {paragraph}
                  </p>
                )
              })}
            </div>

            {/* Right column */}
            <div className="space-y-6">
              {/* Second half of body paragraphs */}
              {bodyParagraphs.slice(Math.ceil(bodyParagraphs.length / 2)).map((paragraph, index) => {
                // Check if it's a heading
                if (paragraph.match(/^[A-Z][^.!?]*:$/) || 
                    paragraph.match(/^\d+\./) || 
                    paragraph.startsWith('DO') || 
                    paragraph.startsWith('DON') ||
                    paragraph.includes('Our Process') ||
                    paragraph.includes('How To')) {
                  return (
                    <h3 key={`body-right-${index}`} className="mt-8 mb-4 font-nunito text-xl font-bold text-[#3d2021]">
                      {paragraph}
                    </h3>
                  )
                }
                
                // Check if it's a list item
                if (paragraph.startsWith('-')) {
                  return (
                    <li key={`body-right-${index}`} className="ml-6 font-nunito text-base leading-relaxed text-[#3d2021]/80">
                      {paragraph.substring(1).trim()}
                    </li>
                  )
                }
                
                return (
                  <p key={`body-right-${index}`} className="font-nunito text-base leading-relaxed text-[#3d2021]/80">
                    {paragraph}
                  </p>
                )
              })}
            </div>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="border-t border-[#945139]/20 bg-white py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <h2 className="mb-8 sm:mb-12 text-center font-nunito text-xs font-bold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[#3d2021]">
            More Stories
          </h2>
          
          <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogsData.filter(b => createSlug(b.title) !== slug).slice(0, 3).map((relatedBlog) => (
              <Link 
                key={createSlug(relatedBlog.title)}
                href={`/blog/${createSlug(relatedBlog.title)}`}
                className="group cursor-pointer"
              >
                <div className="aspect-square overflow-hidden rounded-sm bg-[#945139]/5">
                  <img 
                    src={relatedBlog.image_url}
                    alt={relatedBlog.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="mt-4">
                  <p className="font-nunito text-[10px] font-medium uppercase tracking-widest text-[#945139]">
                    {relatedBlog.date}
                  </p>
                  <h3 className="mt-2 font-nunito text-lg font-bold text-[#3d2021] group-hover:text-[#945139]">
                    {relatedBlog.title}
                  </h3>
                  <p className="mt-2 font-nunito text-sm leading-relaxed text-[#3d2021]/70">
                    {relatedBlog.excerpt.substring(0, 100)}...
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
