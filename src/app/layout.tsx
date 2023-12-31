import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import UtilityBar from './components/UtilityBar/UtilityBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tic-Tac-Toe',
  description: 'A project to test out Pusher Channels for realtime updates with vercel deployment.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <UtilityBar />
        {children}
      </body>
    </html>
  )
}
