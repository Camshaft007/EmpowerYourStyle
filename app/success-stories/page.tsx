import { TRANSFORMATIONS } from '@/lib/constants'
import Button from '@/components/Button'
import Link from 'next/link'

export default function SuccessStories() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-cream-50 to-blush-50">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-display text-5xl text-navy-900 mb-6">
            Real Women, Real Transformations
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See how our clients discovered their signature style and gained the confidence to be their best selves
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {TRANSFORMATIONS.map((transformation) => (
              <div key={transformation.id} className="group">
                {/* Before/After Container */}
                <div className="relative overflow-hidden rounded-lg aspect-[3/4] bg-gradient-to-br from-cream-100 to-blush-100 mb-4">
                  <div className="w-full h-full flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <span className="text-7xl">👩</span>
                  </div>
                </div>

                {/* Info */}
                <div className="text-center">
                  <h3 className="font-display text-xl text-navy-900 mb-2">
                    {transformation.name}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {transformation.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Impact Stats */}
          <div className="bg-cream-50 rounded-lg p-12 text-center border border-cream-200">
            <div className="grid grid-cols-3 gap-8 mb-8">
              <div>
                <p className="font-display text-5xl text-blush-500 mb-2">500+</p>
                <p className="text-gray-600">Women Transformed</p>
              </div>
              <div>
                <p className="font-display text-5xl text-blush-500 mb-2">98%</p>
                <p className="text-gray-600">Satisfaction Rate</p>
              </div>
              <div>
                <p className="font-display text-5xl text-blush-500 mb-2">10+</p>
                <p className="text-gray-600">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-navy-900 text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-4xl text-center mb-12">What Clients Say</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                quote: "I came in feeling lost about my style. I left knowing exactly what works for me and feeling more confident than ever!",
                name: "Rachel M.",
              },
              {
                quote: "Debbie didn't just help me with colours—she helped me understand my style personality. It was transformative.",
                name: "Emma J.",
              },
              {
                quote: "Finally someone who gets me! I've received so many compliments since working with Debbie.",
                name: "Jessica C.",
              },
              {
                quote: "The wardrobe refresh was life-changing. I actually enjoy getting dressed now!",
                name: "Lisa B.",
              },
            ].map((testimonial, i) => (
              <div key={i} className="bg-navy-800 p-8 rounded-lg border border-navy-700">
                <p className="text-cream-200 mb-4 italic leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <p className="text-blush-400 font-semibold">— {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Breakdown */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-cream-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-4xl text-navy-900 text-center mb-12">
            What Our Clients Achieve
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Clarity & Confidence',
                description: 'Understanding their colours and style personality, women report significantly increased confidence in their appearance.',
                icon: '✨',
              },
              {
                title: 'Smarter Shopping',
                description: 'With a clear colour palette and style guide, clients make better purchasing decisions and save money long-term.',
                icon: '🛍️',
              },
              {
                title: 'Cohesive Wardrobe',
                description: 'Pieces that work together mean more outfits from fewer clothes—more value from your investment.',
                icon: '👗',
              },
              {
                title: 'Time Savings',
                description: 'Getting dressed becomes effortless. No more standing in front of the mirror wondering what works!',
                icon: '⏰',
              },
            ].map((result, i) => (
              <div key={i} className="bg-white p-8 rounded-lg border border-cream-200">
                <p className="text-5xl mb-4">{result.icon}</p>
                <h3 className="font-display text-xl text-navy-900 mb-3">
                  {result.title}
                </h3>
                <p className="text-gray-600">{result.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blush-500 to-blush-600 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-4xl mb-6">Ready for Your Transformation?</h2>
          <p className="text-xl mb-8 text-blush-100">
            Let's create your success story together.
          </p>
          <Link href="/contact">
            <Button size="lg" variant="primary" className="bg-white text-blush-500 hover:bg-cream-50">
              Start Your Journey Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
