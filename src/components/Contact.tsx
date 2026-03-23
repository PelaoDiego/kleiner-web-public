export default function Contact() {
  const contactInfo = [
    {
      title: "Our Location",
      detail: "Moalboal, Cebu, Philippines",
      subDetail: "Kleiner Printhouse Services, near Town Center",
      icon: "📍",
    },
    {
      title: "WhatsApp / Mobile",
      detail: "+63 956 885 4781",
      subDetail: "Available Mon-Sat, 8am - 5pm",
      icon: "📱",
    },
    {
      title: "Languages Spoken",
      detail: "English, Bisaya",
      subDetail: "We speak your language!",
      icon: "🗣️",
    },
  ];

  const whatsappLink =
    "https://wa.me/639568854781?text=Hi%20Kleiner%20Printing!%20I%20saw%20your%20website%20and%20I'm%20interested%20in%20a%20quote.";

  return (
    <section id="contact" className="py-24 bg-kleiner-light">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side: Contact Info & Map */}
          <div className="space-y-8">
            <div>
              <h2 className="text-sm font-bold text-kleiner-blue uppercase tracking-widest mb-3">
                Get in Touch
              </h2>
              <h3 className="text-4xl font-extrabold text-kleiner-dark mb-6 tracking-tighter">
                Ready to Order? <br />
                <span className="text-kleiner-red font-black">
                  Contact Kleiner Printing Services
                </span>
              </h3>
            </div>

            <div className="space-y-4">
              {contactInfo.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 p-5 bg-white rounded-2xl shadow-sm border border-gray-100"
                >
                  <div className="text-3xl">{item.icon}</div>
                  <div>
                    <h4 className="font-bold text-kleiner-dark">
                      {item.title}
                    </h4>
                    <p className="text-kleiner-blue font-bold">{item.detail}</p>
                    <p className="text-sm text-gray-400 font-medium">
                      {item.subDetail}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Google Maps Embed con Marcador Exacto */}
            <div className="w-full h-80 rounded-3xl overflow-hidden shadow-inner border-4 border-white">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.563821731631!2d123.3919911!3d9.9387471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33abe9918d0fad23%3A0xb097a5e80dc8e9b9!2sKleiner%20Printhouse!5e0!3m2!1sen!2sph!4v1710500000000!5m2!1sen!2sph"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Kleiner Printhouse Location"
              ></iframe>
            </div>
          </div>

          {/* Right Side: Direct Actions */}
          <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-2xl border border-gray-50 flex flex-col h-fit my-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">💬</span>
              </div>
              <h4 className="text-3xl font-black text-kleiner-dark mb-4 tracking-tighter">
                Chat with us directly
              </h4>
              <p className="text-gray-500 text-lg mb-8 leading-relaxed font-medium">
                The fastest way to get a quote is via WhatsApp. Send us your
                design files and dimensions there.
              </p>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-[#25D366] text-white font-black py-5 rounded-2xl hover:bg-[#128C7E] transition-all shadow-xl text-center uppercase tracking-widest flex items-center justify-center gap-3 text-lg active:scale-95"
              >
                Message on WhatsApp
              </a>
            </div>

            {/* Contenedor de lenguajes más pegado */}
            <div className="border-t border-gray-100 pt-8 mt-10">
              <p className="text-[10px] text-gray-300 text-center uppercase font-black tracking-[0.2em] mb-6">
                Customer Support Languages
              </p>
              <div className="flex justify-around">
                <div className="text-center">
                  <span className="block text-sm font-black text-kleiner-dark tracking-tight">
                    English
                  </span>
                </div>
                <div className="text-center">
                  <span className="block text-sm font-black text-kleiner-dark tracking-tight">
                    Cebuano
                  </span>
                </div>
                <div className="text-center">
                  <span className="block text-sm font-black text-kleiner-dark tracking-tight">
                    Tagalog
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
