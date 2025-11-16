import MagazineHeader from '@/components/magazine-header'
import Footer from '@/components/footer'
import Image from 'next/image'

export const metadata = {
  title: 'About Us | ikai Asai',
  description: 'Discover the philosophy, values, and aesthetics behind ikai Asai - bridging stories of past and present through handcrafted heritage.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <MagazineHeader />
      
      {/* Hero Section */}
      <section className="bg-[#945139] py-12 sm:py-16 lg:py-20 xl:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="font-nunito text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight text-[#faf8f5]">
              Our Story
            </h1>
            
            <p className="mt-6 sm:mt-8 font-nunito-sans text-base sm:text-lg italic leading-relaxed text-[#faf8f5]/80">
              Bridging stories of past and present through handcrafted heritage
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="font-nunito text-xs font-bold uppercase tracking-[0.3em] text-[#945139] mb-6">
                Philosophy
              </h2>
              <p className="font-nunito text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-[#3d2021] mb-8">
                The world we inhabit - fantastic and unfathomable - echoes the yearnings of our human soul.
              </p>
              <div className="space-y-4 font-nunito text-base leading-relaxed text-[#3d2021]/80">
                <p>
                  Often we find ourselves between desire and decision, nature and nurture, order and chaos. Anchored in the belief that dualities exist within all of us, Ikai Asai channels the creativity that spills from these spaces between. Seeking harmony in their union, we believe that passion finds rhythm when the authenticity of craftsmanship meets artistic vision.
                </p>
                <p>
                  Ikai Asai empowers one's instinct to create by building a community for craftsmen, designers and the artist within to thrive. With India as our privileged vantage point, our curations and co-creations reveal the novel and exquisite, made by nimble hands and a rigour that is largely unseen. To discover our offering of soulful handmade objects is to bridge stories of past and present, unearthing that which connects the legacy of craft, its maker and you.
                </p>
              </div>
            </div>
            <div className="relative h-[400px] sm:h-[500px] lg:h-auto">
              <img 
                src="/philosophy.jpg"
                alt="Handcrafted pottery and glassware"
                className="h-full w-full object-cover rounded-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-[#faf8f5] py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="order-2 lg:order-1 relative h-[400px] sm:h-[500px] lg:h-auto">
              <img 
                src="/about.jpg"
                alt="Black pottery craftsmanship"
                className="h-full w-full object-cover rounded-sm"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="font-nunito text-xs font-bold uppercase tracking-[0.3em] text-[#945139] mb-6">
                About
              </h2>
              <p className="font-nunito text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-[#3d2021] mb-8">
                Our handcrafted offering centres around the table, a place to gather, break bread and share in the harvest of ideas.
              </p>
              <div className="space-y-4 font-nunito text-base leading-relaxed text-[#3d2021]/80">
                <p>
                  A setting that transforms from intimate to generous, we lay our tables habitually, to reflect over a meal in solitude and, on occasion, to celebrate with family and friends. Hosting memorable experiences is an art, one that kindles individual and collective identities.
                </p>
                <p>
                  We believe creative expression is most powerful when forces interact: indigenous materials and techniques with a designer's inventive bursts, customary rituals with evolutions in lifestyle. Beginning with spaces that feel personal to us, our vision sees Ikai Asai realized as a global community and movement towards contemporary artisanal living.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="font-nunito text-xs font-bold uppercase tracking-[0.3em] text-[#945139] mb-6">
                Values
              </h2>
              <p className="font-nunito text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-[#3d2021] mb-8">
                Humane and conscious, Ikai Asai is immersed in a language that revisits India's diversity by looking within.
              </p>
              <div className="space-y-4 font-nunito text-base leading-relaxed text-[#3d2021]/80">
                <p>
                  Knowledge, sustainability and spirituality preserved over centuries are renewed as motifs, symbols and sensibilities that can travel today and touch people around the world. United by a desire to be alive to our times, paradoxical pairings establish emotional depth and dualities become whole.
                </p>
              </div>
            </div>
            <div className="relative h-[400px] sm:h-[500px] lg:h-auto">
              <img 
                src="/values.jpg"
                alt="Artisan hands holding clay"
                className="h-full w-full object-cover rounded-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Aesthetics Section */}
      <section className="bg-[#faf8f5] py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="order-2 lg:order-1 relative h-[400px] sm:h-[500px] lg:h-auto">
              <img 
                src="/aesthetics.jpg"
                alt="Craftsman working on pottery"
                className="h-full w-full object-cover rounded-sm"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="font-nunito text-xs font-bold uppercase tracking-[0.3em] text-[#945139] mb-6">
                Aesthetics
              </h2>
              <p className="font-nunito text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-[#3d2021] mb-8">
                Our wildly imaginative spirit is rooted in respect for India's legacy of craftsmanship and what triggers the human mind.
              </p>
              <div className="space-y-4 font-nunito text-base leading-relaxed text-[#3d2021]/80">
                <p>
                  Through the process of co-creation, each handcrafted piece emerges from a wish for our lives to revolve around all that feeds, exhilarates and lets us dream. From ceramics and tableware to furniture, lighting and floor coverings, we champion distinctive everyday and decorative objects that make the experience of living an art.
                </p>
                <p>
                  Eventually everything connects in an aesthetic that evolves from the relationships we nourish: with artisans, designers and collaborators in the present and our culture inherited from narratives of the past.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
