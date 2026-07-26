import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const formData = await request.formData();

    // =============================
    // INFORMATIONS CLIENT
    // =============================

    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const company = formData.get("company");

    // =============================
    // INFORMATIONS PROJET
    // =============================

    const product = formData.get("product");
    const quantity = formData.get("quantity");
    const finish = formData.get("finish");
    const dimensions = formData.get("dimensions");
    const message = formData.get("message");

    // =============================
    // FICHIER
    // =============================

    const attachment = formData.get("attachment");

    // =============================
    // VALIDATION
    // =============================

    if (!name || !email || !phone || !message) {
      return Response.json(
        {
          error: "Veuillez remplir les champs obligatoires.",
        },
        { status: 400 }
      );
    }

    // =============================
    // PIÈCE JOINTE
    // =============================

    let attachments = [];

    if (
      attachment &&
      typeof attachment === "object" &&
      attachment.size > 0
    ) {
      const buffer = Buffer.from(
        await attachment.arrayBuffer()
      );

      attachments.push({
        filename: attachment.name,
        content: buffer,
      });
    }

    // =============================
    // EMAIL SOMEV
    // =============================

    const adminEmail = await resend.emails.send({
      from: "SOMEV <onboarding@resend.dev>",
      to: [process.env.SOMEV_EMAIL],
      replyTo: email,

      subject: `Nouvelle demande de devis — ${name}`,

      attachments,

      html: `
        <div style="
          font-family: Arial, sans-serif;
          max-width: 700px;
          margin: auto;
          color: #1B1D1E;
        ">

          <h1 style="color: #1EA7FF;">
            Nouvelle demande de devis
          </h1>

          <p>
            Une nouvelle demande de devis vient d'être envoyée
            depuis le site SOMEV.
          </p>

          <hr />

          <h2>Informations client</h2>

          <p>
            <strong>Nom :</strong>
            ${name}
          </p>

          <p>
            <strong>Email :</strong>
            ${email}
          </p>

          <p>
            <strong>Téléphone :</strong>
            ${phone}
          </p>

          <p>
            <strong>Entreprise :</strong>
            ${company || "Non renseignée"}
          </p>

          <h2>Projet</h2>

          <p>
            <strong>Produit :</strong>
            ${product || "Projet personnalisé"}
          </p>

          <p>
            <strong>Quantité :</strong>
            ${quantity || "Non précisée"}
          </p>

          <p>
            <strong>Finition :</strong>
            ${finish || "Non précisée"}
          </p>

          <p>
            <strong>Dimensions :</strong>
            ${dimensions || "Non précisées"}
          </p>

          <h2>Description du besoin</h2>

          <div style="
            background: #f4f4f2;
            padding: 20px;
            border-radius: 8px;
            white-space: pre-wrap;
          ">
            ${message}
          </div>

          ${
            attachment && attachment.size > 0
              ? `
                <p style="margin-top: 25px;">
                  📎
                  <strong>Fichier joint :</strong>
                  ${attachment.name}
                </p>
              `
              : `
                <p style="margin-top: 25px;">
                  Aucun fichier joint.
                </p>
              `
          }

        </div>
      `,
    });

    // =============================
    // VÉRIFICATION EMAIL SOMEV
    // =============================

    if (adminEmail.error) {
      console.error(
        "Erreur email SOMEV:",
        adminEmail.error
      );

      return Response.json(
        {
          error: "Impossible d'envoyer la demande à SOMEV.",
        },
        { status: 500 }
      );
    }

    // =============================
    // EMAIL DE CONFIRMATION CLIENT
    // =============================

    const clientEmail = await resend.emails.send({
      from: "SOMEV <onboarding@resend.dev>",
      to: ["ayoubchhaidar9@gmail.com"],

      subject:
        "Confirmation de votre demande de devis — SOMEV",

      html: `
        <div style="
          font-family: Arial, sans-serif;
          max-width: 650px;
          margin: auto;
          color: #1B1D1E;
        ">

          <h1 style="
            margin-bottom: 10px;
          ">
            Merci pour votre demande.
          </h1>

          <p style="
            color: #1EA7FF;
            font-weight: bold;
          ">
            SOMEV — MÉTAL ÉVOLUTION
          </p>

          <p>
            Bonjour ${name},
          </p>

          <p>
            Nous avons bien reçu votre demande de devis.
          </p>

          <p>
            Notre équipe va étudier votre projet et vous
            recontacter prochainement afin de vous proposer
            une solution adaptée.
          </p>

          <div style="
            background: #f4f4f2;
            padding: 20px;
            margin: 25px 0;
            border-radius: 8px;
          ">

            <strong>Résumé de votre demande</strong>

            <p>
              <strong>Projet :</strong>
              ${product || "Projet personnalisé"}
            </p>

            <p>
              <strong>Quantité :</strong>
              ${quantity || "Non précisée"}
            </p>

            <p>
              <strong>Finition :</strong>
              ${finish || "Non précisée"}
            </p>

            <p>
              <strong>Dimensions :</strong>
              ${dimensions || "Non précisées"}
            </p>

          </div>

          <p>
            Nous reviendrons vers vous dès que possible.
          </p>

          <p>
            Merci pour votre confiance.
          </p>

          <p>
            Cordialement,<br />
            <strong>SOMEV Métal Évolution</strong>
          </p>

        </div>
      `,
    });

    // =============================
    // VÉRIFICATION EMAIL CLIENT
    // =============================

    if (clientEmail.error) {
      console.error(
        "Erreur email client:",
        clientEmail.error
      );

      return Response.json(
        {
          error:
            "La demande a été reçue, mais l'email de confirmation n'a pas pu être envoyé.",
        },
        { status: 500 }
      );
    }

    // =============================
    // SUCCÈS
    // =============================

    return Response.json({
      success: true,
      message:
        "Votre demande a bien été envoyée.",
    });

  } catch (error) {
    console.error(
      "Erreur générale:",
      error
    );

    return Response.json(
      {
        error:
          "Une erreur est survenue lors de l'envoi.",
      },
      { status: 500 }
    );
  }
}