import Link from "next/link";
import { products } from "@/data/products";

export default function ProductsPage() {
  return (
    <div className="px-8 py-20 max-w-6xl mx-auto">
      <p className="font-mono text-sm text-[#1EA7FF] mb-3">
        CATALOG
      </p>

      <h1 className="font-display text-4xl font-semibold mb-10">
        All Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <Link
            key={product.slug}
            href={`/products/${product.slug}`}
            className="clip-corner bg-white border border-[#DCDDDA] p-4 hover:border-[#1EA7FF] transition"
          >
            <div className="aspect-square bg-[#F4F4F2] mb-4 clip-corner-sm" />

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