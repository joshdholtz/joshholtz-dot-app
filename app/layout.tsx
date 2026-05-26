import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains-mono',
})

export const metadata: Metadata = {
  title: 'JoshHoltz.app — Unexpected Architecture Detected',
  description:
    'For 34 years, I assumed this system was running standard firmware. Turns out I was debugging the wrong operating system.',
  metadataBase: new URL('https://joshholtz.app'),
  openGraph: {
    title: 'JoshHoltz.app — Unexpected Architecture Detected',
    description:
      'For 34 years, I assumed this system was running standard firmware. Turns out I was debugging the wrong operating system.',
    url: 'https://joshholtz.app',
    siteName: 'JoshHoltz.app',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JoshHoltz.app — Unexpected Architecture Detected',
    description:
      'For 34 years, I assumed this system was running standard firmware. Turns out I was debugging the wrong operating system.',
    creator: '@joshholtz',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`dark h-full ${inter.variable} ${jetBrainsMono.variable}`}
      style={{ colorScheme: 'dark' }}
    >
      <head>
        <meta name="theme-color" content="#18181b" />
        <meta name="color-scheme" content="dark" />
      </head>
      <body className="min-h-full bg-[#18181b] text-zinc-100 antialiased">
        {children}
      </body>
    </html>
  )
}
