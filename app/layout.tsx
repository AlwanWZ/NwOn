import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Skripsi Online Alwan",
  description: "Aplikasi Skripsi dengan Sticky Heading",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className="bg-gray-100">{children}</body>
    </html>
  );
}
