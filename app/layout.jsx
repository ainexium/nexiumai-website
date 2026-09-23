import "./globals.css";

export const metadata = {
  title: "NEXIUM.AI — L'intelligence, au service du possible",
  description: "NEXIUM.AI conçoit des produits SaaS et des solutions technologiques pour aider les entreprises à franchir le cap du numérique.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
