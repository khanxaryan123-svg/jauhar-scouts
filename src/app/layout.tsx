import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jauhar Scouts",
  description: "Adventure, leadership, friendship, and scouting programmes for youth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
