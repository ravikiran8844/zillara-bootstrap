import './globals.css'
import { Inter } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.css';
import Footer from '@/components/Footer/Footer';
import AnnouncementBar from '@/components/AnnouncementBar/AnnouncementBar';
import NavBar from '@/components/NavBar/NavBar';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Zillara Home Page - JewlOne',
  description: 'Zillara home page',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AnnouncementBar/>
        <NavBar/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
