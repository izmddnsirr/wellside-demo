import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

// Import Poppins font from Google Fonts
// This font will be used throughout the application
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

// Metadata for the application
export const metadata: Metadata = {
  title: "Wellside",
  description: "Wellside Barbershop - Your local barbershop",
};

export default function RootLayout({ children, }: { children: React.ReactNode; }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={poppins.className}>
        {children}
      </body>
    </html>
  );
}
