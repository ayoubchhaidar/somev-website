import Link from "next/link";

export default function CustomPage() {
  return (
    <div className="max-w-7xl mx-auto px-8 py-20">

      {/* Hero */}

      <section className="text-center mb-20">

        <p className="uppercase tracking-[5px] text-[#1EA7FF] text-sm mb-4">
          FABRICATION SUR MESURE
        </p>

        <h1 className="font-display text-5xl font-bold mb-6">
          Donnez vie à votre projet
        </h1>

        <p className="max-w-3xl mx-auto text-[#6E7276] text-lg">
          Vous avez une idée, un croquis ou un plan ?
          SOMEV réalise vos pièces métalliques sur mesure grâce
          à la découpe laser, au pliage et à un savoir-faire de précision.
        </p>

      </section>

      <div className="grid lg:grid-cols-2 gap-14">

        {/* LEFT */}

        <div>

          <h2 className="font-display text-3xl mb-8 font-semibold">
            Pourquoi choisir SOMEV ?
          </h2>

          <div className="space-y-8">

            <div>
              <h3 className="font-semibold text-xl mb-2">
                ✔ Découpe Laser
              </h3>

              <p className="text-[#6E7276]">
                Découpe de haute précision sur acier,
                inox et aluminium.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-xl mb-2">
                ✔ Fabrication personnalisée
              </h3>

              <p className="text-[#6E7276]">
                Nous réalisons vos pièces selon vos
                dimensions exactes.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-xl mb-2">
                ✔ Accompagnement
              </h3>

              <p className="text-[#6E7276]">
                Même sans plan, nous pouvons vous aider
                à concevoir votre projet.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-xl mb-2">
                ✔ Production
              </h3>

              <p className="text-[#6E7276]">
                Pièce unique ou fabrication en série.
              </p>
            </div>

          </div>

        </div>

        {/* FORM */}

        <div className="bg-white border border-[#DCDDDA] rounded-2xl p-10 shadow-sm">

          <h2 className="font-display text-3xl font-semibold mb-8">
            Demande de devis
          </h2>

          <form className="space-y-5">

            <input
              type="text"
              placeholder="Nom complet"
              className="w-full rounded-lg border border-[#DCDDDA] px-4 py-3 outline-none focus:border-[#1EA7FF]"
            />

            <input
              type="email"
              placeholder="Adresse e-mail"
              className="w-full rounded-lg border border-[#DCDDDA] px-4 py-3 outline-none focus:border-[#1EA7FF]"
            />

            <input
              type="tel"
              placeholder="Téléphone"
              className="w-full rounded-lg border border-[#DCDDDA] px-4 py-3 outline-none focus:border-[#1EA7FF]"
            />

            <input
              type="text"
              placeholder="Entreprise (optionnel)"
              className="w-full rounded-lg border border-[#DCDDDA] px-4 py-3 outline-none focus:border-[#1EA7FF]"
            />

            <select className="w-full rounded-lg border border-[#DCDDDA] px-4 py-3 bg-white">

              <option>Choisir un matériau</option>

              <option>Acier</option>

              <option>Inox</option>

              <option>Aluminium</option>

            </select>

            <input
              type="text"
              placeholder="Épaisseur (ex : 2 mm)"
              className="w-full rounded-lg border border-[#DCDDDA] px-4 py-3 outline-none focus:border-[#1EA7FF]"
            />

            <input
              type="number"
              placeholder="Quantité"
              className="w-full rounded-lg border border-[#DCDDDA] px-4 py-3 outline-none focus:border-[#1EA7FF]"
            />

            <textarea
              rows={6}
              placeholder="Décrivez votre projet..."
              className="w-full rounded-lg border border-[#DCDDDA] px-4 py-3 resize-none outline-none focus:border-[#1EA7FF]"
            />

            <div className="border-2 border-dashed border-[#DCDDDA] rounded-xl p-8 text-center">

              <p className="font-semibold mb-2">
                Joindre vos fichiers
              </p>

              <p className="text-sm text-[#6E7276] mb-4">
                PDF • DXF • DWG • STEP • JPG • PNG
              </p>

              <input type="file" className="mx-auto" />

            </div>

            <label className="flex items-center gap-3">

              <input type="checkbox" />

              <span className="text-[#6E7276]">
                Je n'ai pas de plan.
              </span>

            </label>

            <button
              className="w-full bg-[#1EA7FF] hover:bg-[#1488d8] text-white py-4 rounded-xl font-semibold transition"
            >
              Envoyer ma demande
            </button>

          </form>

        </div>

      </div>

      {/* Bottom */}

      <section className="mt-24 bg-white rounded-2xl border border-[#DCDDDA] p-12">

        <h2 className="font-display text-4xl font-bold mb-6 text-center">
          Comment ça fonctionne ?
        </h2>

        <div className="grid md:grid-cols-4 gap-8 text-center">

          <div>

            <div className="text-5xl mb-4">📤</div>

            <h3 className="font-semibold mb-2">
              1. Envoyez votre projet
            </h3>

            <p className="text-[#6E7276]">
              Décrivez votre besoin ou envoyez votre plan.
            </p>

          </div>

          <div>

            <div className="text-5xl mb-4">📞</div>

            <h3 className="font-semibold mb-2">
              2. Étude
            </h3>

            <p className="text-[#6E7276]">
              Nous analysons votre demande.
            </p>

          </div>

          <div>

            <div className="text-5xl mb-4">💰</div>

            <h3 className="font-semibold mb-2">
              3. Devis
            </h3>

            <p className="text-[#6E7276]">
              Vous recevez un devis personnalisé.
            </p>

          </div>

          <div>

            <div className="text-5xl mb-4">🏭</div>

            <h3 className="font-semibold mb-2">
              4. Fabrication
            </h3>

            <p className="text-[#6E7276]">
              Nous lançons la production après validation.
            </p>

          </div>

        </div>

      </section>

    </div>
  );
}