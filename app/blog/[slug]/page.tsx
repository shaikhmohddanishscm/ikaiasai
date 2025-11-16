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
        <div className="mx-auto grid min-h-[80vh] max-w-7xl grid-cols-1 px-6 py-12 lg:grid-cols-2 lg:px-12">
          {/* Left column - Title and description */}
          <div className="flex flex-col justify-center pr-0 lg:pr-16">
            <h1 className="font-nunito text-6xl font-bold leading-[0.9] tracking-tight text-[#3d2021] lg:text-7xl xl:text-8xl">
              {blog.title.split(' ').slice(0, 2).join(' ').toUpperCase()}
            </h1>
            
            <p className="mt-8 font-nunito-sans text-base italic leading-relaxed text-[#3d2021]/80">
              {blog.excerpt}
            </p>
            
            <div className="mt-8 flex items-center gap-4">
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
      <article className="mx-auto max-w-7xl px-6 py-16 lg:px-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left column - Featured Content Quote */}
          <div className="space-y-8">
            <div className="border-l-4 border-[#945139] pl-6">
              <p className="font-nunito-sans text-lg italic leading-relaxed text-[#3d2021]/80">
                {blog.excerpt}
              </p>
            </div>
          </div>

          {/* Right column - Text content */}
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
            
            {bodyParagraphs.slice(0, 6).map((paragraph, index) => {
              // Check if it's a heading
              if (paragraph.match(/^[A-Z][^.!?]*:$/) || 
                  paragraph.match(/^\d+\./) || 
                  paragraph.startsWith('DO') || 
                  paragraph.startsWith('DON') ||
                  paragraph.includes('Our Process') ||
                  paragraph.includes('How To')) {
                return (
                  <h3 key={`body-${index}`} className="mt-8 mb-4 font-nunito text-xl font-bold text-[#3d2021]">
                    {paragraph}
                  </h3>
                )
              }
              
              // Check if it's a list item
              if (paragraph.startsWith('-')) {
                return (
                  <li key={`body-${index}`} className="ml-6 font-nunito text-base leading-relaxed text-[#3d2021]/80">
                    {paragraph.substring(1).trim()}
                  </li>
                )
              }
              
              return (
                <p key={`body-${index}`} className="font-nunito text-base leading-relaxed text-[#3d2021]/80">
                  {paragraph}
                </p>
              )
            })}
          </div>
        </div>
        
        {/* Continue reading section */}
        {bodyParagraphs.length > 6 && (
          <div className="mt-16 border-t border-[#945139]/20 pt-16">
            <div className="mx-auto max-w-4xl space-y-6">
              {bodyParagraphs.slice(6).map((paragraph, index) => {
                // Check if it's a heading
                if (paragraph.match(/^[A-Z][^.!?]*:$/) || 
                    paragraph.match(/^\d+\./) || 
                    paragraph.startsWith('DO') || 
                    paragraph.startsWith('DON') ||
                    paragraph.includes('Our Process') ||
                    paragraph.includes('How To')) {
                  return (
                    <h3 key={`cont-${index}`} className="mt-8 mb-4 font-nunito text-xl font-bold text-[#3d2021]">
                      {paragraph}
                    </h3>
                  )
                }
                
                // Check if it's a list item
                if (paragraph.startsWith('-')) {
                  return (
                    <li key={`cont-${index}`} className="ml-6 font-nunito text-base leading-relaxed text-[#3d2021]/80">
                      {paragraph.substring(1).trim()}
                    </li>
                  )
                }
                
                return (
                  <p key={`cont-${index}`} className="font-nunito text-base leading-relaxed text-[#3d2021]/80">
                    {paragraph}
                  </p>
                )
              })}
            </div>
          </div>
        )}
        
        {/* CTA Section */}
        <div className="mt-16 text-center">
          <a 
            href={blog.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border-2 border-[#945139] bg-[#945139] px-8 py-3 font-nunito text-sm font-normal uppercase tracking-wider text-white transition-all hover:bg-[#7f252c] hover:border-[#7f252c]"
          >
            Read Full Article on ikai Asai
          </a>
        </div>
      </article>

      {/* Related Articles */}
      <section className="border-t border-[#945139]/20 bg-white py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="mb-12 text-center font-nunito text-xs font-bold uppercase tracking-[0.3em] text-[#3d2021]">
            More Stories
          </h2>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogsData.slice(0, 3).filter(b => createSlug(b.title) !== slug).map((relatedBlog) => (
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
