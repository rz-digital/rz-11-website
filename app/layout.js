import { Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const metadata = {
  title: "RZ-11 Consultancy | Digital Systems That Move Business Forward",
  description:
    "RZ-11 delivers IT consultancy, tailor-made software, observability, smart solutions, and AI and semiconductor solutions.",
  icons: {
    icon: `${basePath}/rz-11-logo.png`,
    shortcut: `${basePath}/rz-11-logo.png`,
    apple: `${basePath}/rz-11-logo.png`,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${manrope.variable} ${spaceGrotesk.variable}`}>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
