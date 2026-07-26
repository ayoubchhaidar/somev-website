import Image from "next/image";
import Link from "next/link";
import Header from "./Header";
import "./globals.css";

export const metadata = {
  title: "SOMEV - Métal Évolution",
  description:
    "Accessoires en acier découpés au laser et pliés, fabriqués sur mesure.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="min-h-screen bg-[#F4F4F2] text-[#1B1D1E] flex flex-col">

        {/* HEADER */}
        <Header />

        {/* MAIN */}
        <main className="flex-1">
          {children}
        </main>

        {/* FOOTER */}
        <footer className="border-t border-[#DCDDDA] bg-white mt-20">

          <div className="max-w-7xl mx-auto px-8 py-10 grid md:grid-cols-4 gap-10">

            {/* LOGO */}
            <div>

              <div className="flex items-center gap-3 mb-4">

                <Image
                  src="/logoH.png"
                  alt="SOMEV - Métal Évolution"
                  width={45}
                  height={45}
                />

                <div>
                  <h3 className="font-display font-bold">
                    SOMEV
                  </h3>

                  <p className="text-xs text-[#6E7276]">
                    MÉTAL ÉVOLUTION
                  </p>
                </div>

              </div>

              <p className="text-sm text-[#6E7276] leading-6">
                Fabrication métallique sur mesure, découpe laser,
                pliage et solutions adaptées aux professionnels.
              </p>

            </div>

            {/* NAVIGATION */}
            <div>

              <h4 className="font-semibold mb-4">
                Navigation
              </h4>

              <div className="flex flex-col gap-2 text-[#6E7276]">

                <Link
                  href="/"
                  className="hover:text-[#1EA7FF] transition"
                >
                  Accueil
                </Link>

                <Link
                  href="/services"
                  className="hover:text-[#1EA7FF] transition"
                >
                  Services
                </Link>

                <Link
                  href="/products"
                  className="hover:text-[#1EA7FF] transition"
                >
                  Produits
                </Link>

              </div>

            </div>

            {/* SOCIÉTÉ */}
            <div>

              <h4 className="font-semibold mb-4">
                Société
              </h4>

              <div className="flex flex-col gap-2 text-[#6E7276]">

                <Link
                  href="/custom"
                  className="hover:text-[#1EA7FF] transition"
                >
                  Fabrication sur mesure
                </Link>

                <Link
                  href="/about"
                  className="hover:text-[#1EA7FF] transition"
                >
                  À propos
                </Link>

                <Link
                  href="/contact"
                  className="hover:text-[#1EA7FF] transition"
                >
                  Contact
                </Link>

              </div>

            </div>

            {/* RÉSEAUX */}
            <div>

              <h4 className="font-semibold mb-4">
                Nous suivre
              </h4>

              <a
                href="https://www.facebook.com/profile.php?id=61589247662424"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#6E7276] hover:text-[#1EA7FF] transition"
              >
                Facebook
              </a>

            </div>

          </div>

          {/* COPYRIGHT */}
          <div className="border-t border-[#DCDDDA] py-6 text-center text-sm text-[#6E7276]">
            © {new Date().getFullYear()} SOMEV — Métal Évolution.
            Tous droits réservés.
          </div>

        </footer>

      </body>
    </html>
  );
}