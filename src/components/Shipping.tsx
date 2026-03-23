export default function Shipping() {
  const deliveryMethods = [
    {
      title: "Local Delivery (Cebu)",
      description:
        "Direct delivery for clients in Moalboal and neighboring towns via local courier or personal drop-off.",
      icon: "📍",
    },
    {
      title: "Nationwide Shipping",
      description:
        "We ship all over the Philippines using trusted couriers like J&T Express, LBC, or 2GO.",
      icon: "🚢",
    },
    {
      title: "Self Pick-up",
      description:
        "You can visit our shop in Moalboal to pick up your finished products directly.",
      icon: "🏪",
    },
  ];

  return (
    <section id="shipping" className="py-20 bg-kleiner-blue text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-kleiner-yellow uppercase tracking-widest mb-3">
            Logistics & Delivery
          </h2>
          <p className="text-4xl md:text-5xl font-extrabold tracking-tight">
            We Ship Nationwide
          </p>
          <p className="text-xl text-blue-100 mt-5 max-w-2xl mx-auto">
            From Moalboal to any corner of the Philippines. We ensure your
            branding materials arrive safely and on time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {deliveryMethods.map((method, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 hover:bg-white/20 transition-all group"
            >
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform">
                {method.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-kleiner-yellow">
                {method.title}
              </h3>
              <p className="text-blue-50 leading-relaxed">
                {method.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-white rounded-3xl text-kleiner-dark flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="text-center md:text-left">
            <h4 className="text-2xl font-black mb-2">
              Ready to start your project?
            </h4>
            <p className="text-gray-600">
              Contact us to calculate the exact shipping cost to your location.
            </p>
          </div>
          <button className="bg-kleiner-red text-white font-black py-4 px-10 rounded-xl hover:bg-red-700 transition-all active:scale-95 shadow-lg uppercase tracking-wider text-sm">
            Ask for Shipping Rates
          </button>
        </div>
      </div>
    </section>
  );
}
