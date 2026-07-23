import Image from "next/image";
import Link from "next/link";
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

        {/* ================= NAVBAR ================= */}

        <nav className="sticky top-0 z-50 border-b border-[#DCDDDA] bg-white/90 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">

            {/* Logo */}

            <Link href="/" className="flex items-center gap-3">

              <Image
                src="/logoH.png"
                alt="SOMEV"
                width={55}
                height={55}
                priority
              />

              <div>

                <h1 className="font-display text-xl font-bold leading-none">
                  SOMEV
                </h1>

                <span className="block text-[10px] tracking-[3px] text-[#6E7276]">
                  MÉTAL ÉVOLUTION
                </span>

              </div>

            </Link>

            {/* Navigation */}

            <div className="hidden lg:flex items-center gap-8 text-[15px] font-medium">

              <Link href="/" className="hover:text-[#1EA7FF] transition">
                Accueil
              </Link>

              <Link href="/services" className="hover:text-[#1EA7FF] transition">
                Services
              </Link>

              <Link href="/products" className="hover:text-[#1EA7FF] transition">
                Produits
              </Link>

              <Link href="/portfolio" className="hover:text-[#1EA7FF] transition">
                Réalisations
              </Link>

              <Link
                href="/custom"
                className="text-[#1EA7FF] font-semibold hover:opacity-80 transition"
              >
                Sur mesure
              </Link>

              <Link href="/about" className="hover:text-[#1EA7FF] transition">
                À propos
              </Link>

              <Link href="/contact" className="hover:text-[#1EA7FF] transition">
                Contact
              </Link>

            </div>

            {/* CTA */}

            <Link
              href="/custom"
              className="hidden lg:inline-flex items-center rounded-lg bg-[#1EA7FF] px-5 py-3 text-white font-semibold hover:bg-[#0E90EB] transition"
            >
              Demander un devis
            </Link>

          </div>
        </nav>

        {/* ================= MAIN ================= */}

        <main className="flex-1">
          {children}
        </main>

        {/* ================= FOOTER ================= */}

        <footer className="border-t border-[#DCDDDA] bg-white mt-20">

          <div className="max-w-7xl mx-auto px-8 py-10 grid md:grid-cols-4 gap-10">

            {/* Logo */}

            <div>

              <div className="flex items-center gap-3 mb-4">

                <Image
                  src="/logoH.png"
                  alt="SOMEV"
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

            {/* Navigation */}

            <div>

              <h4 className="font-semibold mb-4">
                Navigation
              </h4>

              <div className="flex flex-col gap-2 text-[#6E7276]">

                <Link href="/">Accueil</Link>
                <Link href="/services">Services</Link>
                <Link href="/products">Produits</Link>
                <Link href="/portfolio">Réalisations</Link>

              </div>

            </div>

            {/* Société */}

            <div>

              <h4 className="font-semibold mb-4">
                Société
              </h4>

              <div className="flex flex-col gap-2 text-[#6E7276]">

                <Link href="/custom">Fabrication sur mesure</Link>
                <Link href="/about">À propos</Link>
                <Link href="/contact">Contact</Link>

              </div>

            </div>

            {/* Contact */}

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

          <div className="border-t border-[#DCDDDA] py-6 text-center text-sm text-[#6E7276]">

            © {new Date().getFullYear()} SOMEV — Métal Évolution. Tous droits réservés.

          </div>

        </footer>

      </body>
    </html>
  );
}