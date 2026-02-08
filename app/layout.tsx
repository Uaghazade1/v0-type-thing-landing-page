import React from "react"
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import './globals.css'

const _inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'typething - Notes, Bookmarks & Keys for macOS',
  description:
    'typething is a macOS app for note taking, bookmark saving, and key storing. Keep everything in one place, right on your Mac.',
  keywords: ['macOS', 'notes', 'bookmarks', 'keys', 'productivity', 'typething'],
}

export const viewport = {
  themeColor: '#0D0D0D',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
