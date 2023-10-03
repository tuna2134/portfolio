import './globals.scss'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Header } from './header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'tuna2134 portfolio',
  description: '本当に、何もないよ(たぶん)',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <head>
        <link rel="stylesheet" href="https://unpkg.com/ress/dist/ress.min.css" />
      </head>
      <body className={inter.className}>
        <Header></Header>
        {children}
      </body>
    </html>
  )
}
