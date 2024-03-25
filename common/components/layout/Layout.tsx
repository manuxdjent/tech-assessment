import { ReactNode } from 'react'
import { Inter } from 'next/font/google'
import Navbar from '../navbar/Navbar'

const inter = Inter({ subsets: ['latin'] })

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <>
      <Navbar />
      <main className={inter.className}>{children}</main>
    </>
  )
}
