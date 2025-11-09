import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navigation } from '../components/Navigation'
import { Footer } from '../components/Footer'
import { ScrollProgress } from '../components/ScrollProgress'
import { BackToTop } from '../components/BackToTop'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Digital Adhyay - Digital Marketing Agency | Aman Jha',
  description: 'Digital Adhyay helps businesses strengthen their online presence and drive digital growth. Founded by Aman Jha, we combine marketing expertise with technology.',
  keywords: 'digital marketing, SEO, web development, social media marketing, Aman Jha, Digital Adhyay',
  authors: [{ name: 'Aman Jha' }],
  creator: 'Digital Adhyay',
  publisher: 'Digital Adhyay',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body 
        className={inter.className} 
        suppressHydrationWarning={true}
        data-new-gr-c-s-check-loaded=""
        data-gr-ext-installed=""
      >
        <ScrollProgress />
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  )
}