import { Michroma } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/Header";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import CustomCursor from "@/components/CustomCursor";
import Link from "next/link";

const michroma = Michroma({
  subsets: ["latin", "latin-ext"],
  preload: true,
  weight: "400",
});

export const metadata = {
  title: "Mārga(मार्ग)",
  description: "Your Personal AI Helper",
};

export default function RootLayout({ children }) {
  return (
    <>
      <ClerkProvider
        appearance={{
          baseTheme: dark,
        }}
      >
        <CustomCursor type="liquid" />
        <html lang="en" suppressHydrationWarning>
          <body className={`${michroma.className}`}>
            <ThemeProvider
              attribute="class"
              defaultTheme="dark"
              enableSystem
              disableTransitionOnChange
            >
              {/* {header} */}
              <Header />
              <main className="min-h-screen pt-15">{children}</main>
              {/* {footer} */}
              <footer className="bg-muted/80 mt-10 py-8">
                <div className="container mx-auto px-4 text-xs md:text-sm text-center text-gray-200">
                  <p>
                    © Copyrights.
                    <Link href="/terms" className="hover:underline ml-1 mr-1">
                      Terms and Conditions
                    </Link>
                  </p>
                </div>
              </footer>
            </ThemeProvider>
          </body>
        </html>
      </ClerkProvider>
    </>
  );
}
