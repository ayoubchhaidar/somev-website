import Link from "next/link";
import Image from "next/image";
import { products } from "@/data/products";
import { notFound } from "next/navigation";

export default async function ProductPage({ params }) {
  const { slug } = await params;

  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="px-6 md:px-8 py-16 md:py-20 max-w-6xl mx-auto">

      {/* Retour catalogue */}
      <Link
        href="/products"
        className="inline-flex items-center gap-2 font-mono text-xs text-[#6E7276] hover:text-[#1EA7FF] transition mb-10"
      >
        ← Retour au catalogue
      </Link>

      {/* Produit */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">

        {/* IMAGE */}
        <div className="relative aspect-square overflow-hidden border border-[#DCDDDA] bg-white clip-corner">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* INFORMATIONS */}
        <div className="flex flex-col justify-center">

          {/* Catégorie */}
          <p className="font-mono text-sm text-[#1EA7FF] uppercase tracking-wide mb-3">
            {product.category}
          </p>

          {/* Nom */}
          <h1 className="font-display text-4xl md:text-5xl font-semibold leading-tight mb-6">
            {product.name}
          </h1>

          {/* Description */}
          <p className="text-[#6E7276] leading-7 mb-8">
            {product.description}
          </p>

          {/* Caractéristiques */}
          <div className="border border-[#DCDDDA] bg-white clip-corner-sm p-5 mb-8">

            <h2 className="font-display font-semibold text-lg mb-5">
              Caractéristiques
            </h2>

            <div className="font-mono text-sm space-y-3">

              <div className="flex justify-between gap-6 border-b border-[#DCDDDA] pb-3">
                <span className="text-[#6E7276]">
                  MATÉRIAU
                </span>

                <span className="text-right">
                  {product.material}
                </span>
              </div>

              <div className="flex justify-between gap-6 border-b border-[#DCDDDA] pb-3">
                <span className="text-[#6E7276]">
                  DIMENSIONS
                </span>

                <span className="text-right">
                  {product.dimensions}
                </span>
              </div>

              <div className="flex justify-between gap-6">
                <span className="text-[#6E7276]">
                  FINITION
                </span>

                <span className="text-right">
                  {product.finish}
                </span>
              </div>

            </div>
          </div>

          {/* SUR MESURE */}
          <div className="bg-[#F4F4F2] border border-[#DCDDDA] clip-corner-sm p-5 mb-8">

            <p className="font-mono text-xs text-[#1EA7FF] mb-2">
              FABRICATION SUR MESURE
            </p>

            <p className="text-sm text-[#6E7276] leading-6">
              Les dimensions, la finition et les caractéristiques du produit
              peuvent être adaptées selon vos besoins.
            </p>

          </div>

          {/* CTA */}
  <Link
  href={`/quote?product=${product.slug}`}
  className="clip-corner-sm inline-flex items-center justify-center bg-[#1B1D1E] text-white font-medium px-7 py-4 hover:bg-[#1EA7FF] transition"
>
  Demander un devis
  <span className="ml-3">→</span>
</Link>

        </div>
      </div>

      {/* SECTION BASSE */}
      <div className="mt-24 pt-10 border-t border-[#DCDDDA]">

        <p className="font-mono text-xs text-[#1EA7FF] mb-3">
          SAVOIR-FAIRE SOMEV
        </p>

        <h2 className="font-display text-3xl font-semibold mb-4">
          Une fabrication adaptée à vos besoins
        </h2>

        <p className="text-[#6E7276] max-w-2xl leading-7">
          De la découpe laser au pliage de précision, SOMEV réalise des
          pièces métalliques selon vos dimensions, vos plans et vos exigences.
          Chaque projet peut être personnalisé afin de répondre précisément
          à votre besoin.
        </p>

      </div>

    </div>
  );
}