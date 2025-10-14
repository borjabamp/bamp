import "../styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BAMP Digital Partners · Partner digital para crecer con inteligencia",
  description:
    "BAMP Digital Partners: estrategia, automatización, IA aplicada, performance y analytics. Tu partner digital para crecer con inteligencia.",
  openGraph: {
    title: "BAMP Digital Partners",
    description:
      "Estrategia · Tecnología · IA aplicada · Performance · Analytics",
    url: process.env.SITE_URL || "https://bamp.es",
    siteName: "BAMP Digital Partners",
    type: "website",
    locale: "es_ES",
  },
  metadataBase: new URL(process.env.SITE_URL || "https://bamp.es"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        {/* Google Analytics 4 */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-3JZPN8PF6C"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-3JZPN8PF6C', {
        page_path: window.location.pathname,
      });
    `,
          }}
        />

      </head>
      <body style={{ fontFamily: "Inter,system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
