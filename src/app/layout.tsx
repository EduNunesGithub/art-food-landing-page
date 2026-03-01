import type { Metadata } from "next";
import { Lora, Playfair_Display, Roboto, Poppins } from "next/font/google";
import Script from "next/script";
import { twMerge } from "tailwind-merge";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { CookiesPopup } from "@/components/cookies-popup";
import "@/app/globals.css";
import { LeadDialogProvider } from "@/providers/lead-dialog-provider";
import { LeadDialog } from "@/components/lead-dialog/intex";

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  weight: ["400", "500", "600", "700"],
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  alternates: {
    canonical: "https://art-food-landing-page.vercel.app/",
  },
  title: "Receitas e Cardápios Inteligentes com IA | ArtFood",
  description:
    "Crie receitas, cardápios personalizados e listas de compras com uma IA que entende suas restrições e objetivos. Em breve no WhatsApp e no app ArtFood.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <Script
          id="schema-artfood"
          strategy="beforeInteractive"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              applicationCategory: "HealthApplication",
              creator: {
                "@type": "Organization",
                name: "ArtFood",
              },
              description:
                "Assistente inteligente de receitas que cria cardápios personalizados e listas de compras com base em restrições e objetivos. Disponível via WhatsApp e app.",
              name: "ArtFood",
              offers: {
                "@type": "Offer",
                availability: "https://schema.org/PreOrder",
                price: "21.90",
                priceCurrency: "BRL",
              },
              operatingSystem: "Web, Android, iOS",
            }),
          }}
        />
      </head>

      <body
        className={twMerge(
          "antialiased",
          lora.variable,
          playfairDisplay.variable,
          poppins.variable,
          roboto.variable,
        )}
      >
        <LeadDialogProvider>
          <Header />

          {children}

          <Footer />
          <CookiesPopup />
          <LeadDialog />
        </LeadDialogProvider>
      </body>
    </html>
  );
}
