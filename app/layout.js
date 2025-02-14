// RootLayout.tsx (Layout principale con tema scuro)

import { Geist, Geist_Mono, Fira_Code } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
});

export const metadata = {
  title: "FileForge - Open Source Utility Suite",
  description: "The ultimate SaaS for file management and conversion.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${firaCode.variable} antialiased bg-gray-900 text-gray-200`}
      >
        <header className="w-full p-4 bg-gray-800 text-white">
          <div className="container mx-auto flex justify-between items-center">
            <a href="/">
              <h1 className="text-lg font-bold">FileForge</h1>
            </a>
            <nav>
              <ul className="flex space-x-4 text-sm">
                <li><a href="/tools" className="hover:text-blue-400">Tools</a></li>
                <li><a href="/about" className="hover:text-blue-400">About</a></li>
              </ul>
            </nav>
          </div>
        </header>
        <main className="container mx-auto p-6">{children}</main>
        
        <footer className="w-full p-4 text-center mt-10 bg-gray-800 text-gray-300">
          <p className="text-sm">
            Built by <span className="font-semibold">K35P</span>. <a href="https://github.com/K35P/FileForge" className="text-blue-400 hover:text-blue-500">Source code is available on GitHub</a>.
          </p>
        </footer>
      </body>
    </html>
  );
}
