'use client'

import { Inter } from 'next/font/google'
import './globals.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Wrapper from '@/components/Wrapper'
import Login from './login/page'
import { getToken } from '@/util/Client';
import { redirect, usePathname } from 'next/navigation';

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  if (!getToken() && usePathname() != "/") {
    redirect("/")
  }

  return (
    <html lang="en">
      <body className={inter.className}>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/people" element={<Wrapper>{children}</Wrapper>} />
            <Route path="/materials" element={<Wrapper>{children}</Wrapper>} />
            <Route path="/overview" element={<Wrapper>{children}</Wrapper>} />
            <Route path="/logs" element={<Wrapper>{children}</Wrapper>} />
          </Routes>
        </Router>
      </body>
    </html>
  )
}