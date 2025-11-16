interface ArticleCardProps {
  category: string
  title: string
  description: string
  image: string
}

export default function ArticleCard({ category, title, description, image }: ArticleCardProps) {
  return (
    <article className="group cursor-pointer border-b border-l border-[#d9d9d9] bg-white transition-all hover:shadow-lg">
      <div className="aspect-square overflow-hidden">
        <img 
          src={image || "/placeholder.svg"}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <p className="text-[10px] font-medium uppercase tracking-widest text-[#666666]">
          {category}
        </p>
        <h2 className="mt-3 font-serif text-2xl font-normal text-[#1a1a1a]">
          {title}
        </h2>
        <p className="mt-2 font-serif text-sm font-light leading-relaxed text-[#333333]">
          {description}
        </p>
      </div>
    </article>
  )
}
