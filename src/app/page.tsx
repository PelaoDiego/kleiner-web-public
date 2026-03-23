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
      <footer className="py-8 bg-kleiner-dark text-white text-center text-sm">
        <p>
          &copy; {new Date().getFullYear()} Kleiner Printing Services -
          Moalboal, Cebu.
        </p>
      </footer>
    </main>
  );
}
