import { ReactNode } from 'react'
import './globals.css'
import { Roboto_Flex, Bai_Jamjuree } from 'next/font/google'
import Profile from '@/components/Profile'
import EmptyMemories from '@/components/EmptyMemories'
import Hero from '@/components/Hero'
import SignIn from '@/components/SignIn'
import { cookies } from 'next/headers'

const robotoFlex = Roboto_Flex({
  subsets: ['latin'],
  variable: '--font-roboto',
})

const baiJamjuree = Bai_Jamjuree({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-bai-jamjuree',
})

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  const isAuthenticated = cookies().has('token')

  return (
    <html lang="en">
      <body
        className={`${robotoFlex.variable} ${baiJamjuree.variable} font-sans`}
      >
        <main className="grid min-h-screen grid-cols-2">
          {/** Left */}
          <div className="relative flex flex-col items-start justify-between overflow-hidden border-r border-white/10 bg-[url(../assets/bg-stars.svg)] bg-cover px-28 py-16">
            {/** Blur */}
            <div className="absolute right-8 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-700 blur-[188px]" />
            {/** Stripes */}
            <div className="absolute bottom-0 right-2 top-0 w-2 bg-stripes" />
            {isAuthenticated ? <Profile /> : <SignIn />}
            <Hero />
          </div>

          {/** Right */}
          <div className="flex flex-col bg-[url(../assets/bg-stars.svg)] bg-cover p-16">
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}
