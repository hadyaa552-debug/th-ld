import type { Metadata } from "next"
import { Cairo } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/toaster"

const cairo = Cairo({ subsets: ["arabic", "latin"] })

export const metadata: Metadata = {
  title: "The Land Developers – TLD | Kukun • Armonia • Il Bayou",
  description: "اكتشف مشاريع TLD المميزة — Kukun في مدينة المستقبل، Armonia في العاصمة الإدارية، وIl Bayou في سهل حشيش",
  keywords: "TLD, The Land Developers, Kukun, Armonia, Il Bayou, مدينة المستقبل, العاصمة الإدارية, سهل حشيش",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body className={cairo.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
