import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'PHOTO BOOK',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel='icon' href='../../public/favicon.ico' sizes='any' />
      <body className={inter.className + ' bg-[#F4F9FF]'}>{children}</body>
    </html>
  )
}
