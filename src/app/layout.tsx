import { type Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

import siteMeta from '@/lib/metadata'

const poppins = Poppins({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: siteMeta.title,
  description: siteMeta.description,
}

const RootLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="text-slate-500 antialiased">{children}</body>
    </html>
  )
}

export default RootLayout
