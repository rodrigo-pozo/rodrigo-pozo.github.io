import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import { Footer } from './footer'
import './globals.css'
import { Header } from './header'
import { LanguageProvider } from './language-context'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://rodrigo-pozo.github.io/'),
  alternates: { canonical: '/' },
  title: {
    default: 'Rodrigo Pozo Lagos',
    template: '%s | Rodrigo Pozo Lagos',
  },
  description:
    'Portfolio of Rodrigo Pozo Lagos, Data Scientist and M.Sc. Candidate at PUC Chile.',
  icons: {
    icon: '/favicon.png',
  },
}

const geist = Geist({
  variable: '--font-geist',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geist.variable} ${geistMono.variable} bg-white tracking-tight antialiased dark:bg-zinc-950`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem={true}
          storageKey="theme"
        >
          <div className="flex min-h-screen w-full flex-col">
            <div className="relative mx-auto w-full max-w-2xl flex-1 px-5 pt-16 sm:pt-20">
              <LanguageProvider>
                <Header />
                {children}
                <Footer />
              </LanguageProvider>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
