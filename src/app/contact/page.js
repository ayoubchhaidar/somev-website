import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-8 py-20">

      <div className="text-center mb-16">
        <p className="uppercase tracking-[5px] text-[#1EA7FF] text-sm mb-3">
          CONTACT
        </p>

        <h1 className="font-display text-5xl font-bold mb-5">
          Contactez-nous
        </h1>

        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Vous avez un projet de découpe laser, de pliage ou de fabrication
          métallique sur mesure ? Notre équipe est à votre écoute.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-16">

        {/* Informations */}
        <div>
          <h2 className="font-display text-2xl mb-8">
            Nos coordonnées
          </h2>

          <div className="space-y-8">

            <div>
              <h3 className="font-semibold text-lg mb-2">
                📍 Adresse
              </h3>

              <p className="text-gray-600">
                Zone Industrielle
                <br />
                Tunisie
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">
                📞 Téléphone
              </h3>

              <p className="text-gray-600">
                +216 XX XXX XXX
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">
                📧 Email
              </h3>

              <p className="text-gray-600">
                contact@somev.tn
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">
                🕒 Horaires
              </h3>

              <p className="text-gray-600">
                Lundi - Vendredi
                <br />
                08:00 - 17:00
              </p>
            </div>

            <Link
              href="https://www.facebook.com/profile.php?id=61589247662424"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-[#1877F2] text-white px-6 py-3 rounded-lg hover:bg-[#1565D8] transition"
            >
              Visiter notre Facebook
            </Link>

          </div>
        </div>

        {/* Formulaire général */}
        <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm">

          <h2 className="font-display text-2xl mb-8">
            Contactez-nous
          </h2>

          <form className="space-y-5">

            <input
              type="text"
              placeholder="Nom complet"
              required
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:border-[#1EA7FF]"
            />

            <input
              type="email"
              placeholder="Adresse e-mail"
              required
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:border-[#1EA7FF]"
            />

            <input
              type="tel"
              placeholder="Téléphone"
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:border-[#1EA7FF]"
            />

            <input
              type="text"
              placeholder="Entreprise (optionnel)"
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:border-[#1EA7FF]"
            />

            <textarea
              rows={6}
              placeholder="Votre message..."
              required
              className="w-full border rounded-lg px-4 py-3 resize-none focus:outline-none focus:border-[#1EA7FF]"
            />

            <button
              type="submit"
              className="w-full bg-[#1EA7FF] text-white py-4 rounded-lg font-semibold hover:bg-[#1488d8] transition"
            >
              Envoyer le message
            </button>

          </form>

        </div>

      </div>

    </div>
  );
}