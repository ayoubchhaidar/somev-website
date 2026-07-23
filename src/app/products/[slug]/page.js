import Link from "next/link";
import { products } from "@/data/products";
import { notFound } from "next/navigation";

export default function ProductPage({ params }) {
  const product = products.find((p) => p.slug === params.slug);

  if (!product) return notFound();

  return (
    <div className="px-8 py-20 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
      <div className="aspect-square bg-white border border-[#DCDDDA] clip-corner" />

      <div>
        <p className="font-mono text-sm text-[#1EA7FF] mb-2">
          {product.category}
        </p>

        <h1 className="font-display text-3xl font-semibold mb-6">
          {product.name}
        </h1>

        <p className="text-[#6E7276] mb-8">
          {product.description}
        </p>

        <div className="border border-[#DCDDDA] bg-white clip-corner-sm p-5 mb-8 font-mono text-sm space-y-2">
          <div className="flex justify-between border-b border-[#DCDDDA] pb-2">
            <span className="text-[#6E7276]">MATERIAL</span>
            <span>{product.material}</span>
          </div>

          <div className="flex justify-between border-b border-[#DCDDDA] pb-2">
            <span className="text-[#6E7276]">DIMENSIONS</span>
            <span>{product.dimensions}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-[#6E7276]">FINISH</span>
            <span>{product.finish}</span>
          </div>
        </div>

        <Link
          href="/contact"
          className="clip-corner-sm inline-block bg-[#1B1D1E] text-white font-medium px-7 py-3 hover:bg-[#1EA7FF] transition"
        >
          Request a Quote
        </Link>
      </div>
    </div>
  );
}