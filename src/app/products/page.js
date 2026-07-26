import Link from "next/link";
import Image from "next/image";
import { products } from "@/data/products";

export default function ProductsPage() {
  return (
    <div className="px-8 py-20 max-w-6xl mx-auto">
      <p className="font-mono text-sm text-[#1EA7FF] mb-3">
        CATALOGUE
      </p>

      <h1 className="font-display text-4xl font-semibold mb-10">
        Tous nos produits
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <Link
            key={product.slug}
            href={`/products/${product.slug}`}
            className="clip-corner bg-white border border-[#DCDDDA] p-4 hover:border-[#1EA7FF] transition"
          >
            <div className="relative aspect-square mb-4 overflow-hidden clip-corner-sm">
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                className="object-contain"
              />
            </div>

            <h3 className="font-display font-medium text-lg">
              {product.name}
            </h3>

            <p className="font-mono text-xs text-[#6E7276] mt-1">
              {product.category}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}