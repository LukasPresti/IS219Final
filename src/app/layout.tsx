import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Lukas Presti | Portfolio',
  description: 'Building clean, powerful front-end experiences with purpose.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <Navbar />
        <main className="w-full">{children}</main>
+       <Footer />
      </body>
    </html>
  )
}
