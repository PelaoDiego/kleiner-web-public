import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Image side */}
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/kleiner-logo.png"
                alt="Kleiner Printing Services Workshop"
                width={600}
                height={500}
                className="object-cover"
              />
            </div>
            {/* Decorative colored boxes reflecting the logo colors */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-kleiner-blue/10 rounded-full -z-0"></div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-kleiner-red/10 rounded-full -z-0"></div>
          </div>

          {/* Text side */}
          <div className="lg:w-1/2">
            <h2 className="text-sm font-bold text-kleiner-blue uppercase tracking-widest mb-3">
              Established 2015
            </h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-kleiner-dark mb-6 leading-tight">
              A Legacy of Quality <br />
              <span className="text-kleiner-red text-3xl md:text-4xl">
                From Moalboal to the Philippines
              </span>
            </h3>

            <div className="space-y-6 text-lg text-gray-600 leading-relaxed text-justify">
              <p>
                Located in the heart of Moalboal, Cebu, **Kleiner Printing
                Services** was founded with a unique vision: combining Filipino
                creativity and warmth with a commitment to excellence and
                precision.
              </p>
              <p>
                Since 2015, we have been more than just a printing shop. We are
                a family-owned business dedicated to helping brands, event
                organizers, and individuals bring their ideas to life through
                high-quality printed materials.
              </p>
              <p>
                Whether it&apos;s a celebratory banner for a local fiesta or
                professional branding for a growing business, we take pride in
                every Sintra board, T-shirt, and Tarpaulin that leaves our
                workshop. Our mission is simple: **High-quality prints, fair
                pricing, and nationwide reach.**
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-6 border-t border-gray-100 pt-8">
              <div>
                <span className="block text-3xl font-black text-kleiner-blue">
                  100%
                </span>
                <span className="text-sm font-bold text-gray-500 uppercase tracking-tighter">
                  Satisfaction Goal
                </span>
              </div>
              <div>
                <span className="block text-3xl font-black text-kleiner-red">
                  Cebu
                </span>
                <span className="text-sm font-bold text-gray-500 uppercase tracking-tighter">
                  Proudly Local
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
