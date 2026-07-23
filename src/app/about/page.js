import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-8 py-20">

      {/* Hero */}
      <section className="grid lg:grid-cols-2 gap-16 items-center mb-24">

        <div>
          <p className="uppercase tracking-[5px] text-[#1EA7FF] text-sm mb-4">
            À PROPOS DE SOMEV
          </p>

          <h1 className="font-display text-5xl font-bold leading-tight mb-8">
            Votre partenaire en
            <br />
            solutions métalliques
            <br />
            sur mesure.
          </h1>

          <p className="text-gray-600 text-lg leading-8 mb-8">
            SOMEV – Métal Évolution est spécialisée dans la découpe laser,
            le pliage de précision et la fabrication de pièces métalliques
            sur mesure. Nous accompagnons les professionnels en proposant
            des solutions fiables, précises et adaptées à leurs besoins.
          </p>

          <Link
            href="/contact"
            className="inline-block bg-[#1EA7FF] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#1488d8] transition"
          >
            Nous contacter
          </Link>
        </div>

        <div className="flex justify-center">
          <Image
            src="/logoH.png"
            alt="SOMEV"
            width={450}
            height={450}
            className="drop-shadow-2xl"
          />
        </div>

      </section>

      {/* Services */}
      <section className="mb-24">

        <h2 className="font-display text-3xl font-bold text-center mb-12">
          Notre savoir-faire
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white rounded-xl border border-gray-200 p-8 text-center shadow-sm">
            <div className="text-5xl mb-5">⚡</div>
            <h3 className="font-display text-xl font-semibold mb-4">
              Découpe Laser
            </h3>
            <p className="text-gray-600">
              Découpe précise de pièces métalliques avec une excellente qualité
              de finition.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-8 text-center shadow-sm">
            <div className="text-5xl mb-5">📐</div>
            <h3 className="font-display text-xl font-semibold mb-4">
              Pliage
            </h3>
            <p className="text-gray-600">
              Réalisation de pliages précis selon les dimensions et exigences
              du client.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-8 text-center shadow-sm">
            <div className="text-5xl mb-5">🛠️</div>
            <h3 className="font-display text-xl font-semibold mb-4">
              Fabrication sur mesure
            </h3>
            <p className="text-gray-600">
              Production de pièces uniques ou en série adaptées à vos projets.
            </p>
          </div>

        </div>

      </section>

      {/* Valeurs */}
      <section className="bg-white border border-gray-200 rounded-2xl p-12 mb-24">

        <h2 className="font-display text-3xl font-bold text-center mb-12">
          Nos engagements
        </h2>

        <div className="grid md:grid-cols-4 gap-8 text-center">

          <div>
            <h3 className="font-semibold mb-3">Qualité</h3>
            <p className="text-gray-600">
              Des réalisations conformes aux exigences de nos clients.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Précision</h3>
            <p className="text-gray-600">
              Des équipements performants pour une finition irréprochable.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Réactivité</h3>
            <p className="text-gray-600">
              Des délais maîtrisés pour accompagner vos projets.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Innovation</h3>
            <p className="text-gray-600">
              Une amélioration continue de nos procédés de fabrication.
            </p>
          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="text-center">

        <h2 className="font-display text-4xl font-bold mb-6">
          Un projet en tête ?
        </h2>

        <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
          Notre équipe est prête à vous accompagner dans la réalisation
          de vos pièces métalliques sur mesure.
        </p>

        <Link
          href="/contact"
          className="inline-block bg-[#1EA7FF] text-white px-10 py-4 rounded-lg font-semibold hover:bg-[#1488d8] transition"
        >
          Demander un devis
        </Link>

      </section>

    </div>
  );
}