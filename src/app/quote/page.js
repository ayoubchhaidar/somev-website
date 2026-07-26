"use client";

import Link from "next/link";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { products } from "@/data/products";

export default function QuotePage() {
  const searchParams = useSearchParams();
  const productSlug = searchParams.get("product");

  const selectedProduct = products.find(
    (product) => product.slug === productSlug
  );

  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    setSending(true);
    setSuccess("");
    setError("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    // Produit sélectionné depuis le catalogue
    formData.set(
      "product",
      selectedProduct
        ? selectedProduct.name
        : "Projet personnalisé"
    );

    try {
      const response = await fetch("/api/send-quote", {
        method: "POST",
        body: formData,
      });

      // On récupère d'abord la réponse sous forme de texte
      // afin d'éviter l'erreur JSON.parse si le serveur renvoie du HTML.
      const responseText = await response.text();

      let data;

      try {
        data = JSON.parse(responseText);
      } catch {
        console.error(
          "Réponse non JSON reçue par /api/send-quote :",
          responseText
        );

        throw new Error(
          "Le serveur a renvoyé une réponse inattendue. Vérifiez la route /api/send-quote et redémarrez le serveur."
        );
      }

      if (!response.ok) {
        throw new Error(
          data?.error ||
            "Une erreur est survenue lors de l'envoi."
        );
      }

      setSuccess(
        data?.message ||
          "Votre demande a bien été envoyée. Nous vous contacterons prochainement."
      );

      form.reset();

    } catch (err) {
      console.error("Erreur lors de l'envoi :", err);

      setError(
        err?.message ||
          "Impossible d'envoyer votre demande. Veuillez réessayer."
      );

    } finally {
      setSending(false);
    }
  }

  return (
    <main className="max-w-6xl mx-auto px-6 md:px-8 py-16 md:py-20">

      {/* RETOUR */}

      <Link
        href={
          selectedProduct
            ? `/products/${selectedProduct.slug}`
            : "/products"
        }
        className="inline-flex items-center gap-2 font-mono text-xs text-[#6E7276] hover:text-[#1EA7FF] transition mb-12"
      >
        ← Retour
      </Link>


      {/* HEADER */}

      <div className="max-w-3xl mb-12">

        <p className="font-mono text-sm text-[#1EA7FF] tracking-wider mb-3">
          DEMANDE DE DEVIS
        </p>

        <h1 className="font-display text-4xl md:text-5xl font-semibold mb-5">
          Parlons de votre projet
        </h1>

        <p className="text-[#6E7276] leading-7">
          Décrivez-nous votre besoin. Que ce soit pour un produit de notre
          catalogue ou une fabrication personnalisée, nous étudierons votre
          demande afin de vous proposer une solution adaptée.
        </p>

      </div>


      {/* PRODUIT SÉLECTIONNÉ */}

      <section className="bg-[#F4F4F2] border border-[#DCDDDA] clip-corner-sm p-6 md:p-7 mb-10">

        <p className="font-mono text-xs text-[#1EA7FF] mb-3">
          PRODUIT CONCERNÉ
        </p>

        {selectedProduct ? (
          <>
            <h2 className="font-display text-2xl font-semibold">
              {selectedProduct.name}
            </h2>

            <p className="font-mono text-xs text-[#6E7276] mt-2">
              {selectedProduct.category}
            </p>
          </>
        ) : (
          <>
            <h2 className="font-display text-2xl font-semibold">
              Projet personnalisé
            </h2>

            <p className="text-sm text-[#6E7276] mt-2 leading-6">
              Votre projet ne figure pas dans notre catalogue ?
              Décrivez-nous votre besoin et nous étudierons votre demande.
            </p>
          </>
        )}

      </section>


      {/* FORMULAIRE */}

      <form
        onSubmit={handleSubmit}
        encType="multipart/form-data"
        className="bg-white border border-[#DCDDDA] clip-corner p-6 md:p-10"
      >

        {/* INFORMATIONS */}

        <div className="mb-10">

          <p className="font-mono text-xs text-[#1EA7FF] mb-2">
            01 — VOS INFORMATIONS
          </p>

          <h2 className="font-display text-2xl font-semibold">
            Coordonnées
          </h2>

        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* NOM */}

          <div>

            <label
              htmlFor="name"
              className="block font-mono text-xs text-[#6E7276] mb-2"
            >
              NOM COMPLET *
            </label>

            <input
              id="name"
              type="text"
              name="name"
              placeholder="Votre nom complet"
              required
              className="w-full border border-[#DCDDDA] bg-[#F4F4F2] px-4 py-3 outline-none focus:border-[#1EA7FF] transition"
            />

          </div>


          {/* EMAIL */}

          <div>

            <label
              htmlFor="email"
              className="block font-mono text-xs text-[#6E7276] mb-2"
            >
              ADRESSE E-MAIL *
            </label>

            <input
              id="email"
              type="email"
              name="email"
              placeholder="votre@email.com"
              required
              className="w-full border border-[#DCDDDA] bg-[#F4F4F2] px-4 py-3 outline-none focus:border-[#1EA7FF] transition"
            />

          </div>


          {/* TÉLÉPHONE */}

          <div>

            <label
              htmlFor="phone"
              className="block font-mono text-xs text-[#6E7276] mb-2"
            >
              TÉLÉPHONE *
            </label>

            <input
              id="phone"
              type="tel"
              name="phone"
              placeholder="+216 XX XXX XXX"
              required
              className="w-full border border-[#DCDDDA] bg-[#F4F4F2] px-4 py-3 outline-none focus:border-[#1EA7FF] transition"
            />

          </div>


          {/* ENTREPRISE */}

          <div>

            <label
              htmlFor="company"
              className="block font-mono text-xs text-[#6E7276] mb-2"
            >
              ENTREPRISE
            </label>

            <input
              id="company"
              type="text"
              name="company"
              placeholder="Nom de votre entreprise"
              className="w-full border border-[#DCDDDA] bg-[#F4F4F2] px-4 py-3 outline-none focus:border-[#1EA7FF] transition"
            />

          </div>

        </div>


        {/* SÉPARATION */}

        <div className="border-t border-[#DCDDDA] my-12" />


        {/* PROJET */}

        <div className="mb-10">

          <p className="font-mono text-xs text-[#1EA7FF] mb-2">
            02 — VOTRE PROJET
          </p>

          <h2 className="font-display text-2xl font-semibold">
            Détails de la demande
          </h2>

        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* QUANTITÉ */}

          <div>

            <label
              htmlFor="quantity"
              className="block font-mono text-xs text-[#6E7276] mb-2"
            >
              QUANTITÉ SOUHAITÉE
            </label>

            <input
              id="quantity"
              type="number"
              min="1"
              name="quantity"
              placeholder="Ex. 10"
              className="w-full border border-[#DCDDDA] bg-[#F4F4F2] px-4 py-3 outline-none focus:border-[#1EA7FF] transition"
            />

          </div>


          {/* FINITION */}

          <div>

            <label
              htmlFor="finish"
              className="block font-mono text-xs text-[#6E7276] mb-2"
            >
              FINITION SOUHAITÉE
            </label>

            <select
              id="finish"
              name="finish"
              defaultValue=""
              className="w-full border border-[#DCDDDA] bg-[#F4F4F2] px-4 py-3 outline-none focus:border-[#1EA7FF] transition"
            >

              <option value="" disabled>
                Sélectionnez une finition
              </option>

              <option value="Brut">
                Brut
              </option>

              <option value="Peinture">
                Peinture
              </option>

              <option value="Thermolaquage">
                Thermolaquage
              </option>

              <option value="Galvanisé">
                Galvanisé
              </option>

              <option value="Autre">
                Autre
              </option>

            </select>

          </div>


          {/* DIMENSIONS */}

          <div className="md:col-span-2">

            <label
              htmlFor="dimensions"
              className="block font-mono text-xs text-[#6E7276] mb-2"
            >
              DIMENSIONS / MESURES
            </label>

            <input
              id="dimensions"
              type="text"
              name="dimensions"
              placeholder="Ex. 120 cm × 60 cm × 30 cm"
              className="w-full border border-[#DCDDDA] bg-[#F4F4F2] px-4 py-3 outline-none focus:border-[#1EA7FF] transition"
            />

          </div>


          {/* DESCRIPTION */}

          <div className="md:col-span-2">

            <label
              htmlFor="message"
              className="block font-mono text-xs text-[#6E7276] mb-2"
            >
              DESCRIPTION DU BESOIN *
            </label>

            <textarea
              id="message"
              name="message"
              rows={7}
              required
              placeholder="Décrivez votre projet, vos besoins particuliers, les dimensions, la quantité, le type de matériau..."
              className="w-full border border-[#DCDDDA] bg-[#F4F4F2] px-4 py-3 resize-none outline-none focus:border-[#1EA7FF] transition"
            />

          </div>

        </div>


        {/* SÉPARATION */}

        <div className="border-t border-[#DCDDDA] my-12" />


        {/* FICHIER */}

        <div className="mb-10">

          <p className="font-mono text-xs text-[#1EA7FF] mb-2">
            03 — DOCUMENTS
          </p>

          <h2 className="font-display text-2xl font-semibold mb-2">
            Plan ou image
          </h2>

          <p className="text-sm text-[#6E7276] mb-5">
            Vous pouvez ajouter une photo, un plan ou un document technique
            pour nous aider à mieux comprendre votre projet.
          </p>


          <label
            htmlFor="attachment"
            className="flex flex-col items-center justify-center w-full min-h-36 border border-dashed border-[#BFC2C4] bg-[#F4F4F2] cursor-pointer hover:border-[#1EA7FF] transition p-6 text-center"
          >

            <span className="text-3xl mb-3">
              +
            </span>

            <span className="font-medium text-sm">
              Ajouter un fichier
            </span>

            <span className="text-xs text-[#6E7276] mt-1">
              Image, PDF ou fichier technique
            </span>

            <input
              id="attachment"
              type="file"
              name="attachment"
              accept="image/*,.pdf,.dwg,.dxf"
              className="hidden"
            />

          </label>

        </div>


        {/* MESSAGE DE SUCCÈS */}

        {success && (
          <div className="mb-6 border border-green-200 bg-green-50 text-green-700 px-5 py-4">
            {success}
          </div>
        )}


        {/* MESSAGE D'ERREUR */}

        {error && (
          <div className="mb-6 border border-red-200 bg-red-50 text-red-700 px-5 py-4">
            {error}
          </div>
        )}


        {/* CTA */}

        <div className="pt-2">

          <button
            type="submit"
            disabled={sending}
            className="w-full md:w-auto clip-corner-sm bg-[#1B1D1E] text-white font-medium px-8 py-4 hover:bg-[#1EA7FF] disabled:opacity-60 disabled:cursor-not-allowed transition"
          >

            {sending ? "Envoi en cours..." : "Envoyer ma demande"}

            {!sending && (
              <span className="ml-3">
                →
              </span>
            )}

          </button>


          <p className="text-xs text-[#6E7276] mt-4">
            * Champs obligatoires
          </p>

        </div>

      </form>


      {/* BAS DE PAGE */}

      <div className="mt-12 text-center">

        <p className="text-sm text-[#6E7276]">
          Besoin d'une information avant de demander un devis ?
        </p>

        <Link
          href="/contact"
          className="inline-block mt-2 font-medium text-[#1EA7FF] hover:underline"
        >
          Contactez-nous →
        </Link>

      </div>

    </main>
  );
}