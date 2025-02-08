import AuthProvider from "@/components/AuthProvider"
import "./globals.css"
import { Inter } from "next/font/google"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { ErrorBoundary } from "react-error-boundary"
import ErrorFallback from "@/components/ErrorFallback"


const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Hotelia",
  description: "Hotel Management Application",
}



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white`}>
        <AuthProvider>
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Navbar />
            <main className="container mx-auto px-4 py-8">{children}</main>
            <Footer />
          </ErrorBoundary>
        </AuthProvider>
      </body>
    </html>
  )
}

