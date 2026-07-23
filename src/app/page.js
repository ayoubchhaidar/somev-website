import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/products";

export default function Home() {
  return (
    <>

  {/* HERO */}
<section className="relative min-h-[90vh] flex items-center overflow-hidden">

  {/* Background Logo */}
{/* Background */}
<div className="absolute inset-0 -z-10 flex items-center justify-center overflow-hidden">
  <Image
    src="/"
    alt=""
    width={2400}
    height={2400}
    priority
    className="
      w-[1900px]
      max-w-none
      object-contain
      opacity-[0.4]
      pointer-events-none
      select-none
     
    "
  />
</div>
  <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">

    <div className="grid lg:grid-cols-2 gap-16 items-center">

      {/* LEFT */}
      <div>

        <p className="uppercase tracking-[5px] text-[#1EA7FF] text-sm mb-5">
          MÉTAL • DÉCOUPE LASER • PLIAGE
        </p>

        <h1 className="font-display text-6xl font-bold leading-tight mb-8">
          Des solutions
          <br />
          métalliques
          <br />
          sur mesure.
        </h1>

        <p className="text-lg text-gray-600 leading-8 max-w-xl mb-10">
          SOMEV – Métal Évolution accompagne les professionnels dans la
          fabrication de pièces métalliques grâce à la découpe laser,
          au pliage de précision et à la fabrication sur mesure.
        </p>

        <div className="flex gap-5">
          <Link
            href="/products"
            className="bg-[#1EA7FF] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#1488d8] transition"
          >
            Nos produits
          </Link>

          <Link
            href="/contact"
            className="border border-[#1EA7FF] px-8 py-4 rounded-lg hover:bg-[#1EA7FF] hover:text-white transition"
          >
            Demander un devis
          </Link>
        </div>

      </div>

      {/* RIGHT */}
      <div className="flex justify-center">
        <Image
          src="/logoH.png"
          alt="Somev"
          width={500}
          height={500}
          className="drop-shadow-2xl"
        />
      </div>

    </div>

  </div>

</section>
   

      {/* QUI SOMMES NOUS */}

      <section className="max-w-6xl mx-auto py-28 px-8">

        <h2 className="text-4xl font-display font-bold mb-8">
          Qui sommes-nous ?
        </h2>

        <p className="text-lg text-gray-600 leading-9">
          SOMEV – Métal Évolution est spécialisée dans la conception et la
          fabrication de solutions métalliques sur mesure.
          Grâce à notre expertise en découpe laser, pliage de précision
          et fabrication métallique, nous accompagnons nos clients dans
          la réalisation de projets fiables, durables et adaptés à leurs
          besoins.
        </p>

      </section>

      {/* NOS SAVOIR FAIRE */}

      <section className="bg-white py-24">

        <div className="max-w-7xl mx-auto px-8">

          <h2 className="text-4xl font-display font-bold text-center mb-16">
            Nos savoir-faire
          </h2>

          <div className="grid md:grid-cols-4 gap-8">

            <div className="p-8 rounded-xl shadow hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-4">
                Découpe Laser
              </h3>

              <p className="text-gray-600">
                Découpe haute précision sur différents types d'acier.
              </p>
            </div>

            <div className="p-8 rounded-xl shadow hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-4">
                Pliage CNC
              </h3>

              <p className="text-gray-600">
                Pliage précis pour des pièces parfaitement conformes.
              </p>
            </div>

            <div className="p-8 rounded-xl shadow hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-4">
                Fabrication
              </h3>

              <p className="text-gray-600">
                Réalisation de pièces métalliques sur mesure.
              </p>
            </div>

            <div className="p-8 rounded-xl shadow hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-4">
                Qualité
              </h3>

              <p className="text-gray-600">
                Contrôle rigoureux à chaque étape de fabrication.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* PRODUITS */}

      <section className="max-w-7xl mx-auto py-28 px-8">

        <div className="flex justify-between items-center mb-12">

          <h2 className="text-4xl font-display font-bold">
            Nos réalisations
          </h2>

          <Link
            href="/products"
            className="text-[#1EA7FF] font-semibold"
          >
            Voir tout →
          </Link>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {products.slice(0,3).map((product)=>(
            <Link
              key={product.slug}
              href={`/products/${product.slug}`}
              className="bg-white rounded-xl overflow-hidden shadow hover:shadow-2xl transition"
            >

              <div className="aspect-square bg-gray-100"></div>

              <div className="p-6">

                <h3 className="font-semibold text-xl">
                  {product.name}
                </h3>

                <p className="text-gray-500 mt-2">
                  {product.category}
                </p>

              </div>

            </Link>
          ))}

        </div>

      </section>

      {/* CTA */}

      <section className="bg-[#1EA7FF] py-24 text-white">

        <div className="max-w-5xl mx-auto text-center px-8">

          <h2 className="text-5xl font-display font-bold mb-8">
            Vous avez un projet ?
          </h2>

          <p className="text-xl opacity-90 mb-10">
            Notre équipe est à votre disposition pour étudier votre besoin
            et vous proposer une solution adaptée.
          </p>

          <Link
            href="/contact"
            className="bg-white text-[#1EA7FF] px-10 py-4 rounded-lg font-bold hover:scale-105 transition"
          >
            Demander un devis
          </Link>

        </div>

      </section>

    </>
  );
}