import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { LanguageProvider } from '@/contexts/LanguageContext'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'โรงเรียนตัวอย่าง - หน้าแรก',
  description: 'เว็บไซต์โรงเรียนตัวอย่าง สถาบันการศึกษาที่มุ่งเน้นคุณภาพการศึกษา',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="th">
      <body className={inter.className}>
        <LanguageProvider>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </LanguageProvider>
      </body>
    </html>
  )
}