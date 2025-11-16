import type { Metadata } from 'next'
import { Nunito, Nunito_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const nunito = Nunito({ 
  subsets: ["latin"],
  weight: ['300', '400', '700'],
  variable: '--font-nunito',
  display: 'swap',
});

const nunitoSans = Nunito_Sans({ 
  subsets: ["latin"],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-nunito-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'ikai Asai | Handcrafted Heritage',
  description: 'Discover the artistry of centuries-old Indian crafts, reimagined for contemporary living. Each piece tells a story of tradition, heritage, and masterful craftsmanship.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/logos/IA-logo.png',
        type: 'image/png',
      },
    ],
    apple: '/logos/IA-logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.variable} ${nunitoSans.variable} font-nunito antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
