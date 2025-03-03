import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'Siddharth Subramanian | Full Stack Engineer based in Flagstaff, AZ',
  description:
    'A full stack engineer based in Flagstaff, AZ currently pursuing a Masters in Computer Science at Northern Arizona University.',
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="text-slate-500 antialiased">{children}</body>
    </html>
  )
}

export default RootLayout
