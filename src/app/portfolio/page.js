import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Support mural PS5",
    category: "Gaming",
    image: "/portfolio/ps5.jpg",
  },
  {
    title: "Support de manettes",
    category: "Gaming",
    image: "/portfolio/controller.jpg",
  },
  {
    title: "Numéros de table",
    category: "Restaurant",
    image: "/portfolio/table.jpg",
  },
  {
    title: "Logo métallique",
    category: "Décoration",
    image: "/portfolio/logo.jpg",
  },
  {
    title: "Support industriel",
    category: "Industrie",
    image: "/portfolio/industrial.jpg",
  },
  {
    title: "Découpe personnalisée",
    category: "Sur mesure",
    image: "/portfolio/custom.jpg",
  },
];

export default function PortfolioPage() {
  return (
    <div className="max-w-7xl mx-auto px-8 py-20">

      {/* Hero */}

      <section className="text-center mb-20">

        <p className="uppercase tracking-[5px] text-[#1EA7FF] text-sm mb-4">
          NOS RÉALISATIONS
        </p>

        <h1 className="font-display text-5xl font-bold mb-6">
          Des réalisations qui parlent d'elles-mêmes
        </h1>

        <p className="max-w-3xl mx-auto text-[#6E7276] text-lg">
          Découvrez quelques exemples de projets réalisés par SOMEV.
          Chaque pièce est conçue avec précision afin de répondre aux
          exigences de nos clients.
        </p>

      </section>

      {/* Gallery */}

      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {projects.map((project) => (

          <div
            key={project.title}
            className="group bg-white border border-[#DCDDDA] rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-2 transition duration-300"
          >

            <div className="relative h-72 overflow-hidden bg-[#ECECEC]">

              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-110 transition duration-500"
              />

            </div>

            <div className="p-6">

              <span className="text-xs uppercase tracking-[3px] text-[#1EA7FF]">
                {project.category}
              </span>

              <h3 className="font-display text-2xl font-semibold mt-2 mb-3">
                {project.title}
              </h3>

              <p className="text-[#6E7276]">
                Projet réalisé sur mesure avec une finition de haute qualité.
              </p>

            </div>

          </div>

        ))}

      </section>

      {/* CTA */}

      <section className="mt-24 rounded-3xl bg-[#1B1D1E] text-white p-16 text-center">

        <h2 className="font-display text-4xl font-bold mb-6">
          Votre projet pourrait être le prochain.
        </h2>

        <p className="max-w-2xl mx-auto text-gray-300 mb-8 text-lg">
          Que vous disposiez d'un plan ou simplement d'une idée,
          notre équipe vous accompagne dans la réalisation de vos
          pièces métalliques sur mesure.
        </p>

        <Link
          href="/custom"
          className="inline-block bg-[#1EA7FF] px-8 py-4 rounded-xl font-semibold hover:bg-[#1692e3] transition"
        >
          Demander un devis
        </Link>

      </section>

    </div>
  );
}