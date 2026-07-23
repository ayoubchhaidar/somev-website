import Link from "next/link";

const services = [
  {
    title: "Découpe Laser",
    icon: "⚡",
    description:
      "Découpe de haute précision sur acier, inox et aluminium pour des pièces aux finitions impeccables.",
  },
  {
    title: "Pliage CNC",
    icon: "📐",
    description:
      "Pliage précis selon vos plans pour garantir des dimensions parfaites et une qualité constante.",
  },
  {
    title: "Fabrication sur mesure",
    icon: "🛠️",
    description:
      "Conception et fabrication de pièces uniques ou de séries adaptées à vos besoins.",
  },
  {
    title: "Gravure & Personnalisation",
    icon: "✒️",
    description:
      "Ajout de logos, textes et motifs personnalisés sur vos réalisations métalliques.",
  },
  {
    title: "Soudure & Assemblage",
    icon: "🔥",
    description:
      "Assemblage de pièces métalliques avec des finitions robustes et soignées.",
  },
  {
    title: "Production en série",
    icon: "🏭",
    description:
      "Fabrication de petites et grandes séries avec une qualité constante et des délais maîtrisés.",
  },
];

export default function ServicesPage() {
  return (
    <div className="max-w-7xl mx-auto px-8 py-20">

      {/* Hero */}
      <section className="text-center mb-20">

        <p className="uppercase tracking-[5px] text-[#1EA7FF] text-sm mb-4">
          NOS SERVICES
        </p>

        <h1 className="font-display text-5xl font-bold mb-6">
          Notre savoir-faire
        </h1>

        <p className="max-w-3xl mx-auto text-[#6E7276] text-lg">
          SOMEV accompagne les professionnels avec des solutions métalliques
          sur mesure, alliant précision, qualité et réactivité.
        </p>

      </section>

      {/* Services */}
      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {services.map((service) => (
          <div
            key={service.title}
            className="bg-white border border-[#DCDDDA] rounded-xl p-8 hover:border-[#1EA7FF] hover:shadow-lg transition"
          >
            <div className="text-5xl mb-6">{service.icon}</div>

            <h2 className="font-display text-2xl font-semibold mb-4">
              {service.title}
            </h2>

            <p className="text-[#6E7276] leading-7">
              {service.description}
            </p>
          </div>
        ))}

      </section>

      {/* CTA */}
      <section className="mt-24 text-center bg-white border border-[#DCDDDA] rounded-2xl p-12">

        <h2 className="font-display text-4xl font-bold mb-6">
          Un projet spécifique ?
        </h2>

        <p className="text-[#6E7276] text-lg mb-8 max-w-2xl mx-auto">
          Nous réalisons également des fabrications entièrement personnalisées
          selon vos plans, croquis ou idées.
        </p>

        <Link
          href="/custom"
          className="inline-block bg-[#1EA7FF] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#1488d8] transition"
        >
          Demander un devis
        </Link>

      </section>

    </div>
  );
}