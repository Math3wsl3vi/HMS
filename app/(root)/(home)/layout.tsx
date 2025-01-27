import Navbar from '@/components/Navbar';
import SideBar from '@/components/SideBar';
import { Metadata } from 'next';
import React, { ReactNode } from 'react'

export const metadata: Metadata = {
    title: "Virtual Hospital",
    description: "Virtual Hospital for Consultations",
    icons:{
      icon:'/icons/logo.png'
    }
  };

const RootLayout = ({children}:{children:ReactNode}) => {
  return (
    <main className='relative '>
    <Navbar/>
    <div className='flex flex-row'>
        <SideBar/>
        <section className='flex min-h-screen flex-1 flex-col px-6 pb-6 pt-28 max-md:pb-14 sm:px-14 bg-white'>
            <div className='w-full'>
                  {children}
            </div>
        </section>
    </div>
</main>
  )
}

export default RootLayout