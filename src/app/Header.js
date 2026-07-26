"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const navItems = [
    {
      name: "Accueil",
      href: "/",
    },
    {
      name: "Services",
      href: "/services",
    },
    {
      name: "Produits",
      href: "/products",
    },
    {
      name: "Sur mesure",
      href: "/custom",
    },
    {
      name: "À propos",
      href: "/about",
    },
    {
      name: "Contact",
      href: "/contact",
    },
  ];

  const isActive = (href) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[#DCDDDA] bg-white/95 backdrop-blur-md">

      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-[88px] flex items-center">

        {/* ================= LOGO ================= */}

        <Link
          href="/"
          className="flex items-center gap-3 shrink-0"
        >
          <Image
            src="/logoH.png"
            alt="SOMEV - Métal Évolution"
            width={52}
            height={52}
            priority
            className="object-contain"
          />

          <div className="leading-none">

            <div className="font-display text-[21px] font-bold tracking-tight">
              SOMEV
            </div>

            <div className="text-[9px] tracking-[3px] text-[#6E7276] mt-1">
              MÉTAL ÉVOLUTION
            </div>

          </div>
        </Link>


        {/* ================= NAVIGATION ================= */}

        <nav className="hidden lg:flex items-center ml-auto mr-10">

          <div className="flex items-center gap-9 text-[15px] font-medium">

            {navItems.map((item) => {
              const active = isActive(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative py-2 transition-colors ${
                    active
                      ? "text-[#1EA7FF] font-semibold"
                      : "text-[#1B1D1E] hover:text-[#1EA7FF]"
                  }`}
                >
                  {item.name}

                  {active && (
                    <span className="absolute left-0 right-0 -bottom-1 h-[2px] bg-[#1EA7FF] rounded-full" />
                  )}
                </Link>
              );
            })}

          </div>

        </nav>


        {/* ================= CTA ================= */}

        <Link
          href="/quote"
          className="hidden lg:inline-flex items-center justify-center shrink-0 bg-[#1EA7FF] text-white font-semibold px-6 py-3.5 rounded-lg hover:bg-[#0E90EB] transition-colors"
        >
          Demander un devis
        </Link>

      </div>

    </header>
  );
}