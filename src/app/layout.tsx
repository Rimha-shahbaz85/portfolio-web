import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "M. Shakir Jamil - Full Stack Engineer (MERN)",
  description: "Full Stack Engineer (MERN) with 3+ years of experience in designing, developing, and implementing applications using a wide range of technologies.",
  keywords: ["Full Stack Engineer", "MERN", "React", "Node.js", "MongoDB", "TypeScript", "Next.js"],
  authors: [{ name: "M. Shakir Jamil" }],
  creator: "M. Shakir Jamil",
  openGraph: {
    title: "M. Shakir Jamil - Full Stack Engineer (MERN)",
    description: "Full Stack Engineer (MERN) with 3+ years of experience in designing, developing, and implementing applications using a wide range of technologies.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300`}>
        {children}
      </body>
    </html>
  );
}
