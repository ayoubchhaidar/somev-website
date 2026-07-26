import Link from "next/link";

export default function CustomPage() {
  return (
    <div className="max-w-7xl mx-auto px-8 py-20">

      {/* ================= POURQUOI SOMEV ================= */}

      <section className="grid lg:grid-cols-2 gap-14 mb-24">

        {/* LEFT */}

        <div>

          <p className="font-mono text-sm text-[#1EA7FF] mb-3">
            NOTRE SAVOIR-FAIRE
          </p>

          <h2 className="font-display text-3xl mb-8 font-semibold">
            Pourquoi choisir SOMEV ?
          </h2>

          <div className="space-y-8">

            <div>
              <h3 className="font-semibold text-xl mb-2">
                ✔ Découpe Laser
              </h3>

              <p className="text-[#6E7276] leading-7">
                Découpe de haute précision sur acier,
                inox et aluminium.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-xl mb-2">
                ✔ Fabrication personnalisée
              </h3>

              <p className="text-[#6E7276] leading-7">
                Nous réalisons vos pièces selon vos
                dimensions et vos exigences.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-xl mb-2">
                ✔ Accompagnement
              </h3>

              <p className="text-[#6E7276] leading-7">
                Même sans plan, nous pouvons vous accompagner
                dans la définition de votre projet.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-xl mb-2">
                ✔ Production
              </h3>

              <p className="text-[#6E7276] leading-7">
                De la pièce unique à la fabrication en série,
                nous adaptons notre production à votre besoin.
              </p>
            </div>

          </div>

        </div>


        {/* ================= APPEL À L'ACTION ================= */}

        <div className="bg-[#F4F4F2] border border-[#DCDDDA] clip-corner p-10 flex flex-col justify-center">

          <p className="font-mono text-xs text-[#1EA7FF] mb-4">
            VOTRE PROJET
          </p>

          <h2 className="font-display text-3xl font-semibold mb-5">
            Vous avez déjà une idée ?
          </h2>

          <p className="text-[#6E7276] leading-7 mb-8">
            Envoyez-nous les détails de votre projet, vos dimensions,
            la quantité souhaitée et, si vous en avez un, votre plan ou
            votre fichier technique.
          </p>

          <Link
            href="/quote"
            className="inline-flex items-center justify-center bg-[#1B1D1E] text-white px-7 py-4 clip-corner-sm font-medium hover:bg-[#1EA7FF] transition"
          >
            Commencer ma demande
            <span className="ml-3">→</span>
          </Link>

        </div>

      </section>


      {/* ================= PROCESSUS ================= */}

      <section className="bg-white border border-[#DCDDDA] clip-corner p-10 md:p-12">

        <div className="text-center mb-12">

          <p className="font-mono text-xs text-[#1EA7FF] mb-3">
            PROCESSUS
          </p>

          <h2 className="font-display text-4xl font-bold">
            Comment ça fonctionne ?
          </h2>

        </div>


        <div className="grid md:grid-cols-4 gap-10 text-center">

          {/* STEP 1 */}

          <div>

            <div className="text-5xl mb-4">
              📤
            </div>

            <h3 className="font-semibold mb-2">
              1. Envoyez votre projet
            </h3>

            <p className="text-[#6E7276] text-sm leading-6">
              Décrivez votre besoin et ajoutez votre plan
              ou votre fichier si vous en avez un.
            </p>

          </div>


          {/* STEP 2 */}

          <div>

            <div className="text-5xl mb-4">
              🔎
            </div>

            <h3 className="font-semibold mb-2">
              2. Étude
            </h3>

            <p className="text-[#6E7276] text-sm leading-6">
              Notre équipe analyse votre demande et
              les caractéristiques de votre projet.
            </p>

          </div>


          {/* STEP 3 */}

          <div>

            <div className="text-5xl mb-4">
              💬
            </div>

            <h3 className="font-semibold mb-2">
              3. Devis
            </h3>

            <p className="text-[#6E7276] text-sm leading-6">
              Nous vous proposons une solution adaptée
              avec un devis personnalisé.
            </p>

          </div>


          {/* STEP 4 */}

          <div>

            <div className="text-5xl mb-4">
              🏭
            </div>

            <h3 className="font-semibold mb-2">
              4. Fabrication
            </h3>

            <p className="text-[#6E7276] text-sm leading-6">
              Après validation, nous lançons la fabrication
              de votre projet.
            </p>

          </div>

        </div>

      </section>

    </div>
  );
}