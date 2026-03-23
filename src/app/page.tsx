import Navbar from "@/components/Navbar";
import ProductList from "@/components/ProductList";
import Shipping from "@/components/Shipping";
import About from "@/components/About";
import Contact from "@/components/Contact"; // 1. Importar Contact

export default function Home() {
  return (
    <main className="min-h-screen bg-kleiner-light text-kleiner-dark">
      <Navbar />

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center py-24 px-4 text-center bg-white border-b border-gray-50">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-5 text-kleiner-red tracking-tighter uppercase">
          Kleiner Printing Services
        </h1>
        <p className="text-xl md:text-2xl mb-10 max-w-3xl text-gray-700 font-medium leading-relaxed">
          Your trusted partner for high-quality Tarpaulins, Sintra Boards, and
          professional branding in Cebu and beyond.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="#products"
            className="bg-kleiner-blue text-white font-bold py-4 px-10 rounded-xl hover:bg-blue-800 transition-all shadow-lg text-lg uppercase tracking-wider"
          >
            Explore Catalog
          </a>
          <a
            href="#contact"
            className="bg-kleiner-yellow text-kleiner-black font-bold py-4 px-10 rounded-xl hover:bg-yellow-400 transition-all shadow-lg text-lg uppercase tracking-wider"
          >
            Contact Us
          </a>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-kleiner-blue uppercase tracking-widest mb-3">
            Our Catalog
          </h2>
          <h2 className="text-4xl md:text-5xl font-extrabold text-kleiner-dark tracking-tight">
            Quality Prints & Pricing
          </h2>
        </div>
        <ProductList />
      </section>

      <Shipping />
      <About />

      {/* 2. Insertar Contact aquí */}
      <Contact />

      {/* Footer Simple */}
      {/* Footer Profesional */}
      <footer className="py-12 bg-kleiner-dark text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h5 className="text-xl font-black text-kleiner-yellow mb-2 uppercase tracking-tighter">
              Kleiner Printing Services
            </h5>
            <p className="text-gray-400 text-sm">
              Moalboal, Cebu, Philippines • Established 2015
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-6">
            <a
              href="https://www.facebook.com/KleinerPrinthouse" // Pon el link real de tu página de FB
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 p-3 rounded-full hover:bg-[#1877F2] transition-all group"
            >
              <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            {/* Puedes añadir Instagram aquí después si quieres */}
          </div>

          <p className="text-gray-500 text-xs">
            &copy; {new Date().getFullYear()} All Rights Reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
