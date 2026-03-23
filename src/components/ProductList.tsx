"use client";
import { useState } from "react";
import Image from "next/image";
import productsData from "@/data/products.json";

export default function ProductList() {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [enlargedImage, setEnlargedImage] = useState<string | null>(null);

  return (
    <div className="space-y-12 md:space-y-20">
      {productsData.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onShowDetails={() => setSelectedProduct(product)}
          onEnlargeImage={(img) => setEnlargedImage(img)} // Pasamos la función para agrandar
        />
      ))}

      {/* MODAL 1: TECHNICAL SPECIFICATIONS (Ya lo teníamos) */}
      {selectedProduct && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 md:p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-2xl md:rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl">
            <div className="p-6 md:p-8">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl md:text-2xl font-black text-kleiner-dark uppercase tracking-tighter">
                  {selectedProduct.name}{" "}
                  <span className="text-kleiner-red">Specs</span>
                </h3>
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="bg-gray-100 hover:bg-gray-200 p-2 rounded-full transition-colors"
                >
                  <svg
                    className="w-5 h-5 md:w-6 md:h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <div className="space-y-4">
                <p className="text-sm md:text-base text-gray-600 italic border-l-4 border-kleiner-yellow pl-4">
                  {selectedProduct.description}
                </p>

                <h4 className="font-bold text-kleiner-blue uppercase text-xs md:text-sm tracking-widest mt-8">
                  Technical Specifications:
                </h4>
                <ul className="grid grid-cols-1 gap-2 md:gap-3">
                  {selectedProduct.technicalDetails?.map(
                    (detail: string, i: number) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-sm md:text-base text-gray-700 bg-gray-50 p-3 rounded-xl border border-gray-100"
                      >
                        <span className="text-kleiner-red font-bold">•</span>
                        {detail}
                      </li>
                    ),
                  )}
                </ul>
              </div>

              <button
                onClick={() => setSelectedProduct(null)}
                className="w-full mt-8 bg-kleiner-dark text-white font-bold py-4 rounded-xl uppercase tracking-widest text-xs md:text-sm active:scale-95 transition-transform"
              >
                Close Specifications
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 2: ENLARGED IMAGE (Nuevo Lightbox) */}
      {enlargedImage && (
        <div
          className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm cursor-zoom-out"
          onClick={() => setEnlargedImage(null)} // Cierra al hacer clic fuera
        >
          <div className="relative max-w-7xl max-h-[90vh] w-auto h-auto rounded-xl overflow-hidden shadow-2xl">
            <Image
              src={enlargedImage}
              alt="Enlarged product view"
              width={1200} // Ancho máximo para calidad
              height={1200} // Alto máximo para calidad
              className="object-contain w-auto h-auto max-w-full max-h-[90vh]"
              priority
            />
            {/* Botón de cerrar "X" */}
            <button
              onClick={() => setEnlargedImage(null)}
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 text-white p-2.5 rounded-full transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function ProductCard({
  product,
  onShowDetails,
  onEnlargeImage,
}: {
  product: any;
  onShowDetails: () => void;
  onEnlargeImage: (img: string) => void;
}) {
  const [mainImage, setMainImage] = useState(
    product.images[0] || "/kleiner-logo.png",
  );

  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 flex flex-col lg:flex-row">
      {/* SECCIÓN DE IMÁGENES */}
      <div className="lg:w-1/3 bg-gray-50 p-4 md:p-6 flex flex-col gap-4">
        {/* Imagen Principal: Ahora es clicable para agrandar */}
        <button
          onClick={() => onEnlargeImage(mainImage)}
          className="relative h-64 md:h-80 w-full rounded-2xl overflow-hidden shadow-md bg-white border border-gray-100 cursor-zoom-in group"
        >
          <Image
            src={mainImage}
            alt={product.name}
            fill
            className="object-contain p-2 transition-transform duration-500 group-hover:scale-105"
            priority
          />
          {/* Icono de lupa superpuesto al hacer hover */}
          <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <svg
              className="w-10 h-10 text-white bg-black/50 p-2 rounded-full"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
              />
            </svg>
          </div>
        </button>

        {/* Thumbnails (Scroll horizontal) */}
        {product.images.length > 1 && (
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide touch-pan-x">
            {product.images.map((img: string, idx: number) => (
              <button
                key={idx}
                onClick={() => setMainImage(img)}
                className={`relative h-16 w-16 md:h-20 md:w-20 flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all ${
                  mainImage === img
                    ? "border-kleiner-blue scale-95"
                    : "border-transparent opacity-60 hover:opacity-100"
                }`}
              >
                <Image src={img} alt="thumb" fill className="object-cover" />
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="lg:w-2/3 p-6 md:p-10 flex flex-col justify-between">
        <div>
          <div className="flex flex-col sm:flex-row justify-between items-start mb-4 gap-3">
            <h3 className="text-2xl md:text-3xl font-extrabold text-kleiner-dark leading-tight">
              {product.name}
            </h3>
            <span className="bg-kleiner-red text-white text-[10px] md:text-xs font-bold px-3 py-1 rounded-full uppercase">
              Min: {product.minOrder}
            </span>
          </div>

          <p className="text-gray-600 mb-6 text-base md:text-lg leading-relaxed">
            {product.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-8">
            {product.options.map((option: string) => (
              <span
                key={option}
                className="text-[9px] md:text-[10px] font-black bg-kleiner-blue/10 text-kleiner-blue px-2.5 py-1 rounded-md uppercase tracking-tighter"
              >
                {option}
              </span>
            ))}
          </div>

          {/* TABLA DE PRECIOS */}
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-left min-w-[400px] md:min-w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  {product.priceTable.headers.map((h: string) => (
                    <th
                      key={h}
                      className="p-3 md:p-4 text-[10px] md:text-xs font-black text-gray-400 uppercase tracking-widest"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="text-sm md:text-base">
                {product.priceTable.rows.map((row: string[], i: number) => (
                  <tr
                    key={i}
                    className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors"
                  >
                    {row.map((cell, ci) => (
                      <td key={ci} className="p-3 md:p-4">
                        {ci > 0 ? (
                          <span className="text-kleiner-blue font-bold">
                            ₱{cell}
                          </span>
                        ) : (
                          <span className="font-semibold text-gray-800">
                            {cell}
                          </span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* BOTONES */}
        <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col sm:flex-row gap-3 md:gap-4">
          <a
            href={`https://wa.me/639568854781?text=Hi!%20I'm%20interested%20in%20your%20${product.name}.`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-kleiner-yellow text-kleiner-black font-black py-4 px-6 rounded-xl hover:bg-yellow-400 text-center uppercase tracking-wider text-xs md:text-sm shadow-md active:scale-95 transition-transform"
          >
            Order via WhatsApp
          </a>

          <button
            onClick={onShowDetails}
            className="flex-1 bg-kleiner-blue text-white font-black py-4 px-6 rounded-xl hover:bg-blue-800 text-center uppercase tracking-wider text-xs md:text-sm shadow-md transition-all active:scale-95"
          >
            Technical Details
          </button>
        </div>
      </div>
    </div>
  );
}
