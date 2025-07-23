import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { Toaster } from "@/components/ui/sonner";
import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MediCall - Doctors Appointment App",
  description: "Connect with doctors anytime, anywhere",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider appearance={{ baseTheme: dark }}>
      <html lang="en" suppressHydrationWarning>
        <body className={`${inter.className} `}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {/* header */}
            <Header />
            <main className="min-h-screen">{children}</main>
            <Toaster richColors />
            {/* footer */}
            <footer className="bg-muted/50 py-6">
              <div className="container mx-auto px-4 text-center text-gray-300 space-y-3">
                <p className="text-sm">Made with 💖 by Praful Gahlot</p>
                <div className="flex justify-center space-x-4 text-xl">
                  <Link
                    href="https://github.com/Praful-bit"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white"
                  >
                    <FaGithub />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/praful-gahlot-9a6329268/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white"
                  >
                    <FaLinkedin />
                  </Link>
                </div>

                <p className="text-sm">Phone: 8979012764</p>
              </div>
            </footer>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
