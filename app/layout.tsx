import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";



export const metadata: Metadata = {
  title: {
    default: "GAIA Payscale | IT Staffing, HR & Payroll Services",
    template: "%s | GAIA Payscale",
  },

  description:
    "GAIA Payscale provides IT staffing, recruitment, HR and payroll services, workforce solutions, IT services and infrastructure support for growing businesses.",

  alternates: {
    canonical: "https://www.gaiapayscale.com/",
  },

  openGraph: {
    title: "GAIA Payscale | IT Staffing, HR & Payroll Services",
    description:
      "Professional IT staffing, recruitment, HR & payroll services, workforce solutions and IT infrastructure support.",
    url: "https://www.gaiapayscale.com/",
    siteName: "GAIA Payscale",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-900 antialiased">

        <Header />

        {children}

        <Footer />

      </body>
    </html>
  );
}